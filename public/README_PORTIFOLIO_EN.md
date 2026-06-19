# M.I.N.D — Clinical Decision Support System for Mental Health

> **Mental Intelligence & Network Data** — A CDSS (Clinical Decision Support System) that combines Bayesian inference, DSM-5-TR criteria and machine learning to aid psychiatric diagnosis.

---

## The Real Problem

Psychiatric diagnosis is inherently probabilistic. There is no blood test for depression or anxiety — diagnosis depends on reported symptoms, duration, exclusion of similar conditions, and clinical judgment about comorbidities. Three concrete problems:

1. **Diagnostic error** — Bipolar Disorder is misdiagnosed as unipolar depression in ~40% of first consultations (Angst et al., 2011), because patients seek help during depressive episodes, not manic ones.
2. **Cognitive overload** — The DSM-5-TR contains criteria for ~192 disorders. A clinician must memorize symptom combinations, minimum durations, exclusions and differentials.
3. **Isolated scale subjectivity** — A single scale (PHQ-9, GAD-7) cannot capture the intersection between symptoms, temporal criteria and differential exclusions.

This project **does not attempt to replace the psychiatrist**. It structures diagnostic reasoning into a formal and auditable engine, allowing the clinician to review, accept or reject each hypothesis — always with `requires_human_review = True`.

---

## What This Project Demonstrates About Me as an Engineer

| Skill | Evidence in the Project |
|---|---|
| **Complex systems architecture** | Integration of 6 subsystems (inference, scales, ML, DW, audit, security) in a single container with well-defined layer communication. |
| **Technical decision-making with explicit trade-offs** | Every non-obvious decision in this document includes the rejected alternative and the rationale. |
| **Defensive coding and resilience** | 3 layers of clinical validation (Pydantic → Service → DB), human-in-the-loop by default, rate limiting, CSP, HSTS. |
| **Complete ML pipeline** | From training to deployment: 12 models with MLflow tracking, DVC versioning, temporal split, explicit critique of own limitations. |
| **Privacy and compliance by design** | LGPD embedded in the architecture (PII/clinical separation, Fernet AES encryption, pseudonymization, consent, retention). |
| **548 tests** | Unit + integration with coverage. |
| **Documentation a clinician can understand** | Clinical manual in pt-BR (`CLINICAL_MANUAL.md`) explaining CDSS fundamentals without engineering jargon. |

---

## Non-Obvious Technical Decisions (and Why)

### 1. Hybrid inference: rules → bayes → scales → ML, in that order

Most CDSS use a single approach (decision tree, pure neural network, or rules). This project uses **four chained layers**, each addressing the blind spot of the previous one:

| Layer | What it does | What it covers |
|---|---|---|
| **DSM-5-TR Criteria** (rule engine) | Gatekeeper: minimum symptom count, duration, group satisfaction | If it fails, `prob *= 0.3` — no high probability passes without formal criteria |
| **Epidemiological Naive Bayes** | Brazilian priors, literature CPTs, sequential symptom update | ~70% of the signal — models inherent diagnostic uncertainty |
| **Scale adjustment** (threshold match) | Maps PHQ-9, GAD-7 scores to boost via `SCALE_DISORDER_MAP` | Adds `0.08 + (score - threshold) / 100` — objective evidence from validated instruments |
| **ML blending** (RF/XGBoost) | Risk prediction based on scales | Weight 0.15 — complementary signal, minority by design |

**Why**: The patient may minimize symptoms (scale underestimates), the clinician may miss a differential (rule fails), the ML model may overfit to synthetic data. Four independent evidence sources with calibrated weights reduce the risk of any single blind spot dominating the decision.

### 2. Bayesian network with Brazilian epidemiological priors, not uniform

Many systems assume `P(disorder) = 1/N`. This project uses prevalences from the **São Paulo Megacity Mental Health Survey** (Andrade et al., 2012): major depression 9.4%, OCD 3.9%, bipolar type II 0.3%. The difference between `1/19 ≈ 5.3%` and 9.4% for depression dramatically alters the posterior when few symptoms are present.

**Why**: Uniform priors penalize common disorders and overestimate rare ones. A calibrated prior makes the system conservative where it should be (rare diagnosis requires more evidence to overcome the low prior). Conditional probabilities `P(symptom | disorder)` come from Andrews et al. (2018) and comorbidity correlations from Kessler et al. (2005, 2015).

### 3. Clinical identity separation — not schema, but privacy architecture

The patient has no "name" in the clinical database. `PatientIdentity` (name encrypted with **Fernet AES**) and `PatientProfile` (clinical data) are separate tables. The UUID traverses the system — consultations, scales, inferences — without exposing the real name.

```python
# app/services/patient_service.py (simplified)
identity = PatientIdentity(full_name=encrypt_pii(data.name))
profile = PatientProfile(birth_date=data.birth_date, sex=data.sex, ...)
# Real name only exists encrypted in DB; decrypted on response
```

**Why**: LGPD (Brazilian Law 13.709/2018) classifies health data as **sensitive**. A leak of the consultations table does not reveal patient identity. Physical separation allows configurable retention (5 years) and anonymization for research without affecting clinical data. The rejected alternative was single-column encryption — vulnerable to key + full table leakage.

### 4. Human-in-the-loop by design, not convenience

`requires_human_review: bool = True` is the default. Always. The system generates ranked hypotheses with **Wilson confidence interval**, automatic exclusions between mutually exclusive disorders (if two have prob ≥ 0.3, the lower is excluded with justification), and a step-by-step trace of how each symptom changed the probability.

**Why**: False positive in psychiatric CDSS = incorrect treatment for months. "Default-to-review" is not a feature — it is an ethical and regulatory requirement (RDC 657/2022, ANVISA). The rejected alternative was automatic "majority vote" between pipelines.

### 5. Three layers of clinical validation — defense in depth

```python
# Layer 1: Schema → Pydantic rejects invalid input before any logic
@field_validator("birth_date")
def check_birth_date(cls, v):
    if v > date.today(): raise ValueError("Birth date in the future")

# Layer 2: Service → business rules (15+ methods)
class ClinicalIntegrityService:
    def validate_patient_profile(self, profile):
        if age(profile.birth_date) > MAX_AGE_YEARS: raise ...

# Layer 3: DB → CHECK constraints (7 constraints) as final barrier
# ck_symptom_observation_intensity: CHECK (intensity >= 0 AND <= 10)
# ck_inference_probability: CHECK (probability >= 0 AND <= 1)
```

**Why**: Bugs happen at every layer. If the Pydantic validator fails (badly typed optional field), IntegrityService catches it. If the service skips (new endpoint that forgot to call validation), the DB rejects. Critical in mental health, where scales have fixed ranges (PHQ-9: 0–27, MADRS: 0–60) and silent extrapolations would invalidate clinical interpretation. Inspired by the defense-in-depth pattern from information security, applied to clinical data integrity.

### 6. SCALE_DISORDER_MAP: Portuguese textual matching instead of rigid FK

```python
SCALE_DISORDER_MAP = {
    "PHQ-9": [(25, ["Depressive", "Depression"]),
              (15, ["Depressive", "Depression", "Dysthymia"])],
    "MDQ":  [(7,  ["Bipolar"])],
    "GAD-7":[(10, ["Anxiety", "Panic", "GAD", "Social Anxiety"])],
}
```

Instead of a foreign key between `Scale` and `Disorder`, a `(threshold, keywords)` dictionary boosts when score ≥ threshold **and** the disorder name contains the keywords.

**Why**: The DSM-5-TR evolved in 2022; ICD-11 added disorders (Gaming Disorder). Adding a new disorder does not require schema migration. A clinician can maintain the dictionary without an engineer. The alternative (FK mapping table) was rejected for rigidity — each new disorder would require migration + deployment.

---

## Machine Learning Pipeline

### 12 Models — Results (MLflow, latest run)

| Objective | Algorithm | Accuracy | F1 (macro) | AUC-ROC |
|---|---|---|---|---|
| **Diagnosis** (20 classes) | XGBoost | 1.000 | 1.000 | — |
| | Random Forest | 1.000 | 1.000 | — |
| | Logistic Reg. | 0.480 | 0.390 | — |
| **Suicide** (binary) | XGBoost | 0.979 | 0.977 | 0.996 |
| | Random Forest | 0.958 | 0.955 | 0.998 |
| | Logistic Reg. | 0.958 | 0.953 | 0.985 |
| **Relapse** (binary) | Logistic Reg. | 0.688 | 0.681 | 0.751 |
| | Random Forest | 0.688 | 0.670 | 0.673 |
| | XGBoost | 0.646 | 0.626 | 0.673 |
| **Therapeutic Response** (binary) | Random Forest | 0.729 | 0.604 | 0.789 |
| | XGBoost | 0.792 | 0.625 | 0.713 |
| | Logistic Reg. | 0.500 | 0.395 | 0.408 |

All models registered in MLflow (sqlite:///mlflow.db) with training metadata (hyperparameters, test_size=0.25, cv_folds=5).

### What the Numbers Actually Mean (and What They Don't)

- **Diagnosis with 1.0 accuracy** is expected and **suspicious**: the synthetic data generator produces deterministic relationships between symptoms and diagnosis. In real data, this would be impossible — that is precisely the point of using synthetic data for pipeline, not for clinical conclusions.
- **Suicide with AUC ≥ 0.98** reflects the generator's heuristic (certain scale combination → high risk), not actual suicidal ideation detection.
- **Relapse is the hardest problem** — all models near random (AUC 0.67–0.75), consistent with literature (predicting relapse in mental health is notoriously difficult even with real data).
- **Logistic Regression on therapeutic response (AUC 0.408)** is worse than random — possibly negative overfitting or poorly specified features for this task.

### Explicit Limitations (must read before interpreting)

1. **Synthetic data only** — Distributions and correlations reflect the heuristic generator, not real clinical practice.
2. **Artificial imbalance** — Prevalences are arbitrary, not epidemiological.
3. **Less meaningful temporal split** — Batch-generated data, without real disease progression.
4. **Misleading calibration** — Without real clinical noise, calibration curves may be artificially perfect.
5. **Demonstration hyperparameters** — Not clinically optimized.
6. **Zero generalization** — Models are not suitable for real population without retraining.

### Prerequisites for Real Clinical Use

Retraining on real data → prospective study with SCID-5-CV (gold standard) → ethics committee → ANVISA registration (RDC 657/2022).

---

## Architecture in 30 Seconds

```
┌──────────────┐     ┌─────────────────────────────────────────┐
│  React SPA   │◄───►│  FastAPI                                │
│  (Ant Design)│     │  ├─ Auth (JWT + RBAC, 7 roles)          │
│  + Recharts  │     │  ├─ Patient (encrypted identity)        │
│              │     │  ├─ Consultation (decrypt on response)   │
│  /login      │     │  ├─ Inference (dual pipeline)           │
│  /dashboard  │     │  │   ├─ Rules (DSM-5-TR criteria)       │
│  /patients   │     │  │   ├─ Naive Bayes (Brazil priors)     │
│  /consultas  │     │  │   ├─ Scale boost (threshold match)   │
│  /inferences │     │  │   └─ ML blend (0.15 weight)          │
│  /mia        │     │  ├─ Scales (21, scoring + interpretation)│
│  /personality│     │  ├─ ML (12 models, MLflow tracking)      │
│  /admin/*    │     │  ├─ Analytics (DW star schema, 11 views) │
│              │     │  ├─ Audit (middleware, entity-level)     │
│              │     │  └─ Chatbot MIA (rules + text search)   │
│              │     │                                          │
│              │     ├── PostgreSQL 16 (clinical, diagnostic,   │
│              │     │     dw schemas) + 12 Alembic migrations  │
│              │     ├── Redis (cache + rate limit 100 req/min) │
│              │     ├── Airflow (4 DAGs: training, etl, backup,│
│              │     │     monitoring)                          │
│              │     └── PySpark 3.5 (batch inference,          │
│              │           population metrics, CSV import)      │
└──────────────┘     └─────────────────────────────────────────┘
```

---

## How to Explore the Code

| What to look for | Path |
|---|---|
| Dual inference engine (rules + bayes) | [`app/ml/inference/`](./app/ml/inference/) |
| 21 psychometric scales + SCALE_DISORDER_MAP | [`app/ml/models/assessment_scales.py`](./app/ml/models/assessment_scales.py) |
| LGPD: identity separation, encryption, consent | [`app/security/lgpd.py`](./app/security/lgpd.py) |
| 3-layer clinical validation | [`app/services/integrity_service.py`](./app/services/integrity_service.py) |
| ML pipeline: training, registration, prediction | [`app/ml/training/`](./app/ml/training/) |
| Personality: BFP (Big Five) + Dark Triad factors | [`app/ml/predictors/personality_factors.py`](./app/ml/predictors/personality_factors.py) |
| MIA diagnostic chatbot | [`app/services/chatbot_service.py`](./app/services/chatbot_service.py) |
| ETL for Data Warehouse (star schema) | [`app/etl/dw_loader.py`](./app/etl/dw_loader.py) |
| 12-model evaluation notebook | [`notebooks/model_evaluation.ipynb`](./notebooks/model_evaluation.ipynb) |
| Full clinical manual (pt-BR) | [`CLINICAL_MANUAL.md`](./CLINICAL_MANUAL.md) |
| 548 tests | [`tests/`](./tests/) |

---

## Stack Summary

| Category | Technologies |
|---|---|
| Backend | Python 3.14, FastAPI, SQLAlchemy 2.0, Alembic, Pydantic v2 |
| Frontend | React 18, TypeScript, Vite 5, Ant Design 5, Recharts, Zustand |
| ML/MLOps | scikit-learn, XGBoost, MLflow, DVC |
| Infrastructure | PostgreSQL 16, Redis, Docker Compose, Apache Airflow, PySpark |
| Security | JWT, RBAC, Fernet AES (LGPD), CSP, HSTS, Rate Limit (100 req/min), Bandit zero |
| Quality | 548 tests, flake8, black, mypy, pre-commit, GitHub Actions, codecov |

---

## License

MIT
