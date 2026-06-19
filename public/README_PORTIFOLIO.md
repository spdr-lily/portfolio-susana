# M.I.N.D. — Mental Inference & Neurocognitive Diagnostics

Sistema open-source de apoio à decisão clínica em saúde mental, baseado nos critérios diagnósticos do **DSM-5-TR** e **CID-11**, combinando inferência probabilística bayesiana com pipelines automatizados de dados.

## Arquitetura

O M.I.N.D. é estruturado em três camadas principais:

1. **Ingestão de Dados Clínicos** — Coleta e padronização de sintomas relatados pelo paciente via questionários estruturados e escalas psicométricas.
2. **Motor de Inferência Probabilística** — Aplica o raciocínio bayesiano para calcular probabilidades de hipóteses diagnósticas com base nos critérios preenchidos, reduzindo o viés de heurísticas clínicas.
3. **Pipeline de Dados (Airflow)** — Automatiza a extração, transformação e carga (ETL) dos registros clínicos, garantindo reprodutibilidade e rastreabilidade das análises.

## Stack Tecnológica

- **FastAPI** — API RESTful de alta performance para o backend.
- **PostgreSQL** — Banco de dados relacional para persistência dos registros clínicos e scores diagnósticos.
- **Apache Airflow** — Orquestração dos pipelines de dados e atualização dos modelos probabilísticos.
- **Redis** — Cache de sessão e suporte a filas de processamento assíncrono.
- **Machine Learning** — Modelos auxiliares para análise de sentimentos e triagem preliminar de sintomas.

## Funcionalidades

- Mapeamento dinâmico de sintomas para critérios do DSM-5-TR e CID-11.
- Cálculo de probabilidade diagnóstica por inferência bayesiana.
- Dashboard de visualização dos scores e histórico do paciente.
- Pipeline ETL automatizado com Airflow para atualização dos dados clínicos.
- API REST documentada com Swagger/OpenAPI.

## Licença

Open-source sob licença MIT.
