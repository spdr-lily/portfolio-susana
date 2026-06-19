const translations = {
  pt: {
    projectData: [
      {
        title: "M.I.N.D.",
        description: "Sistema open-source de apoio à decisão clínica baseado em DSM-5-TR, CID-11 e inferência probabilística.",
        details: `M.I.N.D. — Mental Inference & Neurocognitive Diagnostics

Sistema open-source de apoio à decisão clínica em saúde mental, baseado nos critérios diagnósticos do DSM-5-TR e CID-11, combinando inferência probabilística bayesiana com pipelines automatizados de dados.

Arquitetura

O M.I.N.D. é estruturado em três camadas principais:

1. Ingestão de Dados Clínicos: Coleta e padronização de sintomas relatados pelo paciente via questionários estruturados e escalas psicométricas.

2. Motor de Inferência Probabilística: Aplica o raciocínio bayesiano para calcular probabilidades de hipóteses diagnósticas com base nos critérios preenchidos, reduzindo o viés de heurísticas clínicas.

3. Pipeline de Dados (Airflow): Automatiza a extração, transformação e carga (ETL) dos registros clínicos, garantindo reprodutibilidade e rastreabilidade das análises.

Stack Tecnológica

- FastAPI => API RESTful de alta performance para o backend.
- PostgreSQL => Banco de dados relacional para persistência dos registros clínicos e scores diagnósticos.
- Apache Airflow => Orquestração dos pipelines de dados e atualização dos modelos probabilísticos.
- Redis => Cache de sessão e suporte a filas de processamento assíncrono.
- Machine Learning => Modelos auxiliares para análise de sentimentos e triagem preliminar de sintomas.

Funcionalidades

- Mapeamento dinâmico de sintomas para critérios do DSM-5-TR e CID-11.
- Cálculo de probabilidade diagnóstica por inferência bayesiana.
- Dashboard de visualização dos scores e histórico do paciente.
- Pipeline ETL automatizado com Airflow para atualização dos dados clínicos.
- API REST documentada com Swagger/OpenAPI.`,
      },
      {
        title: "Sistema de Manutenção Preditiva",
        description: "Machine Learning supervisionado com Random Forest para predição de falhas em equipamentos industriais.",
        details: `1. Introdução & Desafio de Negócio

Na indústria de manufatura pesada, como uma fábrica de pneus, o tempo de inatividade não planejado (downtime) gera prejuízos financeiros severos e gargalos na cadeia de suprimentos.

Este projeto consistiu no desenvolvimento de um pipeline de Machine Learning focado em Manutenção Preditiva. O objetivo principal foi estimar a probabilidade de falha de maquinários essenciais a partir do desgaste temporal e do volume de produção acumulado, permitindo que a equipe de engenharia atue de forma preventiva antes que a quebra ocorra.

2. Stack Tecnológica

Linguagem: Python
Manipulação de Dados: Pandas, NumPy
Machine Learning: Scikit-Learn (RandomForestClassifier)

3. Metodologia e Desenvolvimento

Engenharia de Recursos (Feature Engineering) & Dados

A modelagem foi estruturada utilizando dados históricos de sensores e registros de manutenção:

Variáveis Preditoras (X): Dias decorridos desde a última manutenção preventiva e o volume de produção atual do equipamento.
Variável Alvo (y): Indicador binário de falha (0 para operação normal, 1 para falha mecânica).

Modelagem & Arquitetura

Optou-se pelo algoritmo de Random Forest (Classificação) por sua robustez contra outliers, capacidade de capturar relações não-lineares entre as variáveis e menor propensão ao overfitting quando comparado a árvores de decisão simples.

O pipeline seguiu as etapas de:
Divisão dos dados em conjuntos de treino e teste para garantir uma avaliação real de generalização.
Treinamento e extração das probabilidades preditivas (predict_proba) em vez de apenas classificações rígidas, permitindo uma tomada de decisão baseada em faixas de risco.

4. Resultados Práticos

O modelo demonstrou alta sensibilidade para identificar padrões de desgaste combinados (tempo vs. esforço produtivo).

Exemplo de Aplicação Prática:
Ao simular a entrada de novos dados de chão de fábrica para um equipamento operando há 6 dias desde a última revisão e com uma produção de 350 pneus, o modelo calculou uma probabilidade de falha de 78%.

Na prática, esse score dispararia um alerta automatizado para a equipe de manutenção programar uma intervenção na próxima troca de turno, evitando uma parada forçada na linha de produção.

5. Conclusão & Próximos Passos

A implementação provou a viabilidade técnica de utilizar modelagem probabilística para antecipar paradas críticas na fábrica. Como próximos passos para evolução do projeto, destacam-se:

Ingestão de variáveis de telemetria em tempo real (temperatura, vibração e pressão dos equipamentos).
Implementação de técnicas de balanceamento de classes (como SMOTE), dado que falhas são eventos raros no ambiente industrial real.`,
      },
      {
        title: "Dashboard Online com Flask + Dash",
        description: "Backend em Flask com API REST e frontend interativo em Dash para visualização de dados.",
        details: `Dashboard de Varejo Online: Arquitetura de Dados End-to-End (Flask + Dash + SQLite)

1. Introdução & Objetivos do Projeto

O objetivo deste projeto foi desenvolver um aplicativo de dados (Data App) completo e desacoplado para monitoramento de métricas de e-commerce. A solução foi desenhada seguindo a arquitetura de microserviços, separando o armazenamento de dados, a camada de negócio (API Backend) e a interface de visualização (Frontend Interativo).

A ferramenta permite que gestores de varejo acompanhem, em tempo real, o comportamento de consumo dos clientes, ticket médio dos pedidos e a evolução do faturamento ao longo do tempo.

2. Stack Tecnológica & Arquitetura

O projeto foi modularizado para garantir escalabilidade e manutenção independente de cada camada:

Backend & API: Python, Flask, SQLAlchemy
Frontend & Visualização: Plotly Dash, HTML5, CSS3 (Flexbox)
Banco de Dados: SQLite3
Ambiente de Desenvolvimento: PyCharm & Jupyter Notebooks

3. Estrutura do Ecossistema (Design de Diretórios)

├── backend/
│   ├── app.py           # API RESTful Flask e rotas de consumo
│   └── database.py      # DDL/DML e estruturação do banco de dados
├── frontend/
│   ├── app.py           # Aplicação Dash e chamadas HTTP via Requests
│   └── assets/
│       └── style.css    # Customização de layout e responsividade visual
├── data/
│   └── loja_online.db   # Banco de dados relacional (SQLite)
├── notebooks/
│   └── inicial.ipynb    # Análise Exploratória de Dados (EDA) e prototipagem SQL
└── requirements.txt     # Gerenciamento de dependências do ecossistema

4. Engenharia e Modelagem de Dados (SQL)

A camada de persistência foi estruturada em um banco relacional baseado em duas entidades principais com integridade referencial (Chave Estrangeira):

clientes: Cadastro base contendo informações cadastrais e data de entrada.
pedidos: Registro transacional das compras, vinculado à tabela de clientes.

Durante a fase de Análise Exploratória de Dados (EDA) via Jupyter Notebook, utilizei a integração pandas + sqlite3 para validar a consistência das transações e prototipar as consultas analíticas complexas (como agregações e junções) antes de implementá-las na API definitiva.

5. Desenvolvimento do Backend (API RESTful)

Em vez de conectar o painel diretamente ao banco de dados, o projeto implementou uma API Flask isolada. Isso garante segurança e permite que outras aplicações consumam os mesmos dados de forma padronizada via JSON.

Foram desenvolvidos três endpoints analíticos principais:

GET /api/clientes: Retorna a listagem de consumidores base.
GET /api/pedidos: Entrega o histórico de transações com engenharia de atributos em tempo de execução (extração do dia da semana a partir da data do pedido).
GET /api/clientes/gastos: Executa um JOIN com agregação (SUM e GROUP BY) direto no banco de dados para computar o Lifetime Value (LTV) de cada cliente, ordenando-os do maior para o menor.

6. Frontend Interativo & Design Responsivo

O frontend foi construído utilizando Plotly Dash, que consome os dados consumindo a API Flask assincronamente através da biblioteca requests.

Métricas e Indicadores Visuais Controlados:

Consumo e Perfil: Gráfico de barras indicando o comportamento de compra individual.
Saúde Financeira: Histograma de distribuição do valor dos pedidos para análise de dispersão do ticket médio.
Análise Temporal: Gráficos de linha medindo a velocidade de aquisição de novos clientes e o volume de transações ao longo dos dias.

UI/UX e Tratamento de Erros:

Resiliência: O código foi blindado com blocos try-except. Caso a API fique fora do ar, o frontend não quebra; ele exibe layouts alternativos amigáveis informando a indisponibilidade dos dados.
Layout Fluido: Organização dos blocos de gráficos via CSS utilizando propriedades estruturais modernas (display: flex e flex-wrap: wrap), garantindo o alinhamento adequado dos componentes visuais independentemente da resolução da tela.

7. Conclusão & Próximos Passos

O projeto cumpre com sucesso o papel de uma aplicação funcional end-to-end. Para as próximas iterações do ecossistema, planeja-se:

Implementar autenticação JWT nas rotas da API Flask.
Substituir o SQLite por um banco PostgreSQL em ambiente de staging.
Adicionar filtros dinâmicos e reativos (callbacks) no Dash por período de data e comportamento do cliente.`,
      },
      {
        title: "Análise de Séries Temporais",
        description: "Modelagem e previsão de séries temporais aplicadas a indicadores de saúde e negócios.",
        details: `Análise Exploratória e Modelagem Estatística de Séries Temporais de Vendas

1. Introdução & Desafio de Negócio

No setor de varejo e planejamento estratégico, antecipar o volume de vendas futuro é crucial para a otimização de estoque, gestão de fluxo de caixa e direcionamento de campanhas de marketing.

Este projeto consistiu no desenvolvimento de um pipeline analítico em Python focado no estudo de Séries Temporais (Time Series Analysis). O objetivo foi estruturar um ambiente de análise capaz de absorver dados históricos de faturamento mensal, identificar componentes estatísticos elementares (tendência e sazonalidade) e preparar a base de dados para algoritmos de previsão (forecasting).

2. Stack Tecnológica

Ambiente: Google Colab
Manipulação de Dados: Pandas, NumPy
Visualização de Dados: Matplotlib (configuração gráfica otimizada inline)

3. Metodologia e Estrutura do Pipeline

Engenharia de Dados Temporais

Estruturação de Indexação: Criação de um intervalo cronológico de 24 meses utilizando a função pd.date_range com frequência mensal definida (freq='M'), estabelecendo a base temporal estável do DataFrame.

Modelagem do Histórico Transacional: Simulação de volume volumétrico de vendas mensais (escala de 80.000 a 120.000 unidades), gerando a variável dependente atrelada ao tempo.

Indexação por DateTime: Transformação da coluna de datas no índice oficial do DataFrame (DatetimeIndex), passo indispensável para que o Pandas habilite funções avançadas de séries temporais, como reamostragem (resampling) e deslocamentos (shifting).

Análise Visual & Diagnóstico

Desenvolvimento de uma interface gráfica linear para avaliar o comportamento do faturamento ao longo do horizonte de 24 meses. A plotagem foi enriquecida com:

Grades de dispersão temporal para identificar visualmente possíveis quebras de estrutura ou picos de demanda.
Rótulos de eixos padronizados para legibilidade executiva.

4. Resultados & Insights Extraídos

A plotagem dos dados permitiu a realização de um diagnóstico visual inicial da série (análise de estacionariedade visual).

Métrica de Negócio Observada:
Através da consolidação dos dados no DataFrame, estruturou-se uma visão clara da oscilação mensal das vendas, permitindo à gerência identificar a amplitude de variação (limites superior de 120k e inferior de 80k unidades) para planejar margens de segurança operacional no estoque.

5. Próximos Passos para Evolução (Roadmap Técnico)

Como o esqueleto estrutural e visual da série temporal já está validado, as próximas etapas planejadas para transformar este estudo em um ecossistema preditivo de ponta são:

Decomposição Estatística: Aplicar a biblioteca statsmodels para decompor a série em suas três componentes fundamentais: Tendência, Sazonalidade e Resíduo (Ruído).

Testes de Estacionariedade: Executar o teste estatístico de Dickey-Fuller Aumentado (ADF) para verificar se a série é estacionária antes de aplicar modelos lineares.

Modelagem Preditiva: Implementar modelos autorregressivos clássicos como SARIMA (para capturar sazonalidade) ou algoritmos de Machine Learning como Prophet (do Meta) para gerar as previsões formais de vendas para os trimestres seguintes.`,
      },
      {
        title: "Processamento de Linguagem Natural (NLP)",
        description: "Chatbot com Wikipedia e análise de sentimentos usando NLTK e spaCy para compreensão de texto.",
        details: `Chatbot Cognitivo Híbrido: Integração Wikipedia API & Pipeline de Análise de Sentimentos Multimodelo

1. Introdução & Contexto de Negócio

Na era da automação do atendimento, chatbots puramente transacionais (baseados em regras rígidas) falham em reter o usuário por falta de empatia e limitação de escopo informativo.

Este projeto consistiu no desenvolvimento de um Agente Conversacional Híbrido (Chatbot) capaz de resolver dois grandes desafios de sistemas de diálogo:

Escopo Aberto de Conhecimento: Integração dinâmica com a base de conhecimento da Wikipedia para consultas em tempo real.

Inteligência Emocional Artificial: Um pipeline estatístico e de Deep Learning para detecção do estado afetivo do usuário, permitindo que a IA sintonize o tom da resposta (empática, neutra ou assertiva) conforme o humor detectado.

2. Stack Tecnológica & Ecossistema

Core Language: Python
Deep Learning & LLMs: Hugging Face transformers (Pipelines de Classificação)
Processamento de Linguagem Natural (NLP Heurístico): NLTK (Léxico VADER), TextBlob
Data Ingestion: Wikipedia API Wrappers

3. Arquitetura do Sistema e Engenharia de NLP

O chatbot foi construído seguindo princípios de alta coesão e baixo acoplamento, dividindo-se em três motores principais:

A. O Motor de Sentimento (Ensemble Polimórfico)

Para mitigar vieses de classificação em textos curtos e informais, a arquitetura processa a entrada do usuário através de uma abordagem combinada (Ensemble Scoring):

Análise Léxica (Rule-Based): Uso do algoritmo VADER (SentimentIntensityAnalyzer) otimizado para capturar intensificadores e pontuações, somado à polaridade sintática do TextBlob.

Análise Semântica (Transformer-Based): Ingestão do texto por um modelo de Deep Learning baseado em Redes Neurais de Atenção (Transformers) via Hugging Face, capturando o contexto profundo e nuances que regras léxicas ignoram.

As pontuações são normalizadas e combinadas para gerar o score final de humor.

B. O Motor de Conhecimento (Dynamic Knowledge Retrieval)

Quando o usuário executa uma janela de busca, o agente aciona assincronamente a API da Wikipedia em português. O subsistema realiza uma busca por similaridade de termos (wikipedia.search), seleciona o artigo de maior relevância e extrai o sumário executivo de forma limpa, tratando dinamicamente exceções de ambiguidade (DisambiguationError).

4. Fluxo de Execução do Agente (Pipeline Conversacional)

Input do Usuário
  ↓
Motor de Sentimento: VADER + Transformers
  ↓
Cálculo do Score de Humor
  ↓
Seleção de Tom Adaptativo (Positivo/Neutro/Negativo)
  ↓
Engine de Resposta Final
  ↑
Motor de Busca: Wikipedia API → Extração do Sumário Analítico
  ↓
Output do Chatbot + Loop de Feedback

5. Resultados Práticos & Diferenciais do Projeto

O agente demonstrou alta flexibilidade operacional, unindo o processamento de contexto abstrato à precisão da informação factual.

Exemplo de Interação Prática:

Usuário (irritado): "Estou cansado de procurar e não achar nada! Me explica o que é Aprendizado de Máquina."

Análise de Sentimento: Score classificado como Negativo/Frustrado.

Ação do Bot: O sistema aciona o motor Wikipedia para coletar a definição técnica de Machine Learning. No entanto, antes de entregar o dado bruto, a engine de resposta intercepta o estado emocional e gera um preâmbulo empático: "Entendo a sua frustração e peço desculpas pela dificuldade. Deixa que eu simplifico isso para você: [...conteúdo da Wikipedia...]".

Sistema de Feedback Ativo: Ao final da sessão, o script coleta e armazena a avaliação do usuário, gerando insumos para futuras calibrações dos limiares (thresholds) de sentimento do modelo.

6. Roadmap de Evolução (Próximos Passos)

Para escalar este projeto a nível de produção industrial, os próximos marcos de desenvolvimento são:

Substituir o script de terminal por uma interface gráfica web responsiva utilizando Streamlit ou FastAPI + React.

Implementar uma camada de memória conversacional de curto prazo utilizando bancos de dados em vetor (Vector DBs) para que o chatbot não esqueça o contexto das frases anteriores.

Migrar a engine de busca para uma arquitetura RAG (Retrieval-Augmented Generation) acoplada a um modelo LLM local (como Llama 3).`,
      },
    ],
    nav: {
      home: "Home",
      about: "Sobre",
      skills: "Habilidades",
      timeline: "Timeline",
      projects: "Projetos",
      certifications: "Certificações",
      contact: "Contato",
    },
    hero: {
      badge: "Data Scientist • Data Engineer",
      tagline: "Desenvolvendo soluções inteligentes baseadas em dados, Machine Learning e Engenharia de Dados para apoio à decisão.",
      github: "GitHub",
      linkedin: "LinkedIn",
      resume: "Currículo",
      about: "Sobre",
    },
    about: {
      title: "Sobre Mim",
      text: "Cientista e Analista de Dados com experiência prática em análise e engenharia de dados, verificação documental, suporte à infraestrutura de redes e desenvolvimento de soluções baseadas em Machine Learning. Possuo sólida formação em Python, SQL, R, Estatística, IA e BI e visão multidisciplinar e pensamento sistêmico para resolução de problemas complexos.",
    },
    competencias: {
      title: "Habilidades",
    },
    timeline: {
      title: "Timeline",
      events: [
        "Início do curso superior de Ciência de Dados",
        "Início do projeto M.I.N.D.",
        "Desenvolvimento do banco clínico",
        "Integração de escalas psicométricas",
        "Formação no Curso Superior de Ciência de Dados com ênfase em IA",
        "Arquitetura de Machine Learning",
      ],
    },
    projects: {
      title: "Projetos",
    },
    featured: {
      badge: "Projeto Principal",
      github: "GitHub",
      deploy: "Deploy",
      others: "Outros projetos",
      readme: "Sobre o projeto",
    },
    projectCard: {
      github: "GitHub",
      details: "Detalhes",
    },
    certificacoes: {
      title: "Certificações",
      name: "ITIL 4 Foundations",
      issuer: "PeopleCert",
      button: "Certificado",
    },
    contact: {
      title: "Contato",
      intro: "Vamos trabalhar juntos? Envie sua mensagem.",
      nameLabel: "Nome",
      namePlaceholder: "Seu nome",
      subjectLabel: "Assunto",
      subjectPlaceholder: "Assunto",
      messageLabel: "Mensagem",
      messagePlaceholder: "Sua mensagem",
      send: "Enviar mensagem",
      sent: "Mensagem enviada!",
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "E-mail",
    },
    footer: {
      built: "Construído com Next.js e Tailwind CSS",
    },
  },
  en: {
    projectData: [
      {
        title: "M.I.N.D.",
        description: "Open-source clinical decision support system based on DSM-5-TR, ICD-11 and probabilistic inference.",
        details: `M.I.N.D. — Mental Inference & Neurocognitive Diagnostics

Open-source clinical decision support system for mental health, based on DSM-5-TR and ICD-11 diagnostic criteria, combining Bayesian probabilistic inference with automated data pipelines.

Architecture

M.I.N.D. is structured in three main layers:

1. Clinical Data Ingestion: Collection and standardization of patient-reported symptoms through structured questionnaires and psychometric scales.

2. Probabilistic Inference Engine: Applies Bayesian reasoning to calculate diagnostic hypothesis probabilities based on filled criteria, reducing clinical heuristic bias.

3. Data Pipeline (Airflow): Automates extraction, transformation and loading (ETL) of clinical records, ensuring reproducibility and traceability of analyses.

Tech Stack

- FastAPI => High-performance RESTful API for the backend.
- PostgreSQL => Relational database for persisting clinical records and diagnostic scores.
- Apache Airflow => Data pipeline orchestration and probabilistic model updates.
- Redis => Session caching and async processing queue support.
- Machine Learning => Auxiliary models for sentiment analysis and preliminary symptom screening.

Features

- Dynamic symptom mapping to DSM-5-TR and ICD-11 criteria.
- Diagnostic probability calculation via Bayesian inference.
- Dashboard for score visualization and patient history.
- Automated ETL pipeline with Airflow for clinical data updates.
- REST API documented with Swagger/OpenAPI.`,
      },
      {
        title: "Predictive Maintenance System",
        description: "Supervised Machine Learning with Random Forest for predicting failures in industrial equipment.",
        details: `1. Introduction & Business Challenge

In heavy manufacturing industries, such as a tire factory, unplanned downtime generates severe financial losses and supply chain bottlenecks.

This project consisted of developing a Machine Learning pipeline focused on Predictive Maintenance. The main objective was to estimate the probability of failure of essential machinery based on temporal wear and accumulated production volume, allowing the engineering team to act preventively before a breakdown occurs.

2. Tech Stack

Language: Python
Data Manipulation: Pandas, NumPy
Machine Learning: Scikit-Learn (RandomForestClassifier)

3. Methodology & Development

Feature Engineering

The modeling was structured using historical sensor data and maintenance records:

Predictor Variables (X): Days elapsed since last preventive maintenance and the current equipment production volume.
Target Variable (y): Binary failure indicator (0 for normal operation, 1 for mechanical failure).

Modeling & Architecture

The Random Forest (Classification) algorithm was chosen for its robustness against outliers, ability to capture non-linear relationships between variables, and lower propensity to overfitting compared to simple decision trees.

The pipeline followed these steps:
Data splitting into training and test sets to ensure realistic generalization evaluation.
Training and extraction of predictive probabilities (predict_proba) instead of rigid classifications, enabling risk-based decision making.

4. Practical Results

The model demonstrated high sensitivity in identifying combined wear patterns (time vs. productive effort).

Practical Application Example:
When simulating new factory floor data for equipment operating 6 days since last inspection with a production of 350 tires, the model calculated a 78% failure probability.

In practice, this score would trigger an automated alert for the maintenance team to schedule an intervention at the next shift change, preventing a forced production line stoppage.

5. Conclusion & Next Steps

The implementation proved the technical feasibility of using probabilistic modeling to anticipate critical factory shutdowns. Next steps for project evolution include:

Real-time telemetry variable ingestion (temperature, vibration and equipment pressure).
Implementation of class balancing techniques (such as SMOTE), since failures are rare events in real industrial environments.`,
      },
      {
        title: "Online Dashboard with Flask + Dash",
        description: "Flask backend with REST API and interactive Dash frontend for data visualization.",
        details: `Online Retail Dashboard: End-to-End Data Architecture (Flask + Dash + SQLite)

1. Introduction & Project Objectives

The objective of this project was to develop a complete and decoupled Data App for monitoring e-commerce metrics. The solution was designed following microservices architecture, separating data storage, business layer (Backend API) and visualization interface (Interactive Frontend).

The tool allows retail managers to track, in real time, customer consumption behavior, average order value and revenue evolution over time.

2. Tech Stack & Architecture

The project was modularized to ensure scalability and independent maintenance of each layer:

Backend & API: Python, Flask, SQLAlchemy
Frontend & Visualization: Plotly Dash, HTML5, CSS3 (Flexbox)
Database: SQLite3
Development Environment: PyCharm & Jupyter Notebooks

3. Ecosystem Structure (Directory Design)

├── backend/
│   ├── app.py           # RESTful Flask API and consumption routes
│   └── database.py      # DDL/DML and database structuring
├── frontend/
│   ├── app.py           # Dash application and HTTP calls via Requests
│   └── assets/
│       └── style.css    # Layout customization and visual responsiveness
├── data/
│   └── loja_online.db   # Relational database (SQLite)
├── notebooks/
│   └── inicial.ipynb    # Exploratory Data Analysis (EDA) and SQL prototyping
└── requirements.txt     # Ecosystem dependency management

4. Data Engineering & Modeling (SQL)

The persistence layer was structured in a relational database based on two main entities with referential integrity (Foreign Key):

clients: Base registration containing personal information and entry date.
orders: Transactional purchase records, linked to the clients table.

During the Exploratory Data Analysis (EDA) phase via Jupyter Notebook, I used pandas + sqlite3 integration to validate transaction consistency and prototype complex analytical queries (such as aggregations and joins) before implementing them in the final API.

5. Backend Development (RESTful API)

Instead of connecting the dashboard directly to the database, the project implemented an isolated Flask API. This ensures security and allows other applications to consume the same data in a standardized way via JSON.

Three main analytical endpoints were developed:

GET /api/clients: Returns the base consumer list.
GET /api/orders: Delivers transaction history with runtime feature engineering (extracting day of week from order date).
GET /api/clients/spending: Performs a JOIN with aggregation (SUM and GROUP BY) directly in the database to compute each client's Lifetime Value (LTV), ordering them from highest to lowest.

6. Interactive Frontend & Responsive Design

The frontend was built using Plotly Dash, which consumes data by calling the Flask API asynchronously through the requests library.

Metrics and Visual Indicators:

Consumption & Profile: Bar chart showing individual purchase behavior.
Financial Health: Histogram of order value distribution for average ticket dispersion analysis.
Temporal Analysis: Line charts measuring new customer acquisition speed and transaction volume over days.

UI/UX and Error Handling:

Resilience: The code was protected with try-except blocks. If the API goes offline, the frontend doesn't break; it displays friendly alternative layouts informing data unavailability.
Fluid Layout: Organization of chart blocks via CSS using modern structural properties (display: flex and flex-wrap: wrap), ensuring proper alignment of visual components regardless of screen resolution.

7. Conclusion & Next Steps

The project successfully fulfills the role of a functional end-to-end application. For the next iterations of the ecosystem, the following is planned:

Implement JWT authentication on Flask API routes.
Replace SQLite with PostgreSQL in a staging environment.
Add dynamic and reactive filters (callbacks) in Dash by date period and customer behavior.`,
      },
      {
        title: "Time Series Analysis",
        description: "Modeling and forecasting time series applied to health and business indicators.",
        details: `Exploratory Analysis and Statistical Modeling of Sales Time Series

1. Introduction & Business Challenge

In the retail and strategic planning sector, anticipating future sales volume is crucial for inventory optimization, cash flow management and marketing campaign targeting.

This project consisted of developing an analytical pipeline in Python focused on Time Series Analysis. The objective was to structure an analysis environment capable of absorbing historical monthly revenue data, identifying elementary statistical components (trend and seasonality) and preparing the database for forecasting algorithms.

2. Tech Stack

Environment: Google Colab
Data Manipulation: Pandas, NumPy
Data Visualization: Matplotlib (optimized inline graphic configuration)

3. Methodology & Pipeline Structure

Temporal Data Engineering

Indexing Structure: Creation of a 24-month chronological interval using pd.date_range with monthly frequency (freq='M'), establishing the stable temporal base of the DataFrame.

Transactional History Modeling: Simulation of monthly sales volumetric volume (80,000 to 120,000 units scale), generating the dependent variable tied to time.

DateTime Indexing: Transformation of the date column into the official DataFrame index (DatetimeIndex), an indispensable step for Pandas to enable advanced time series functions, such as resampling and shifting.

Visual Analysis & Diagnosis

Development of a linear graphic interface to evaluate revenue behavior over the 24-month horizon. The plotting was enriched with:

Temporal scatter grids to visually identify possible structural breaks or demand peaks.
Standardized axis labels for executive readability.

4. Results & Insights

The data plotting allowed an initial visual diagnosis of the series (visual stationarity analysis).

Observed Business Metric:
Through data consolidation in the DataFrame, a clear view of monthly sales oscillation was structured, allowing management to identify the variation amplitude (120k upper and 80k lower limits) to plan operational safety margins in inventory.

5. Next Steps for Evolution (Technical Roadmap)

With the structural and visual skeleton of the time series already validated, the next planned steps to transform this study into a cutting-edge predictive ecosystem are:

Statistical Decomposition: Apply the statsmodels library to decompose the series into its three fundamental components: Trend, Seasonality and Residual (Noise).

Stationarity Tests: Execute the Augmented Dickey-Fuller (ADF) statistical test to verify if the series is stationary before applying linear models.

Predictive Modeling: Implement classic autoregressive models such as SARIMA (to capture seasonality) or Machine Learning algorithms such as Prophet (from Meta) to generate formal sales forecasts for subsequent quarters.`,
      },
      {
        title: "Natural Language Processing (NLP)",
        description: "Chatbot with Wikipedia and sentiment analysis using NLTK and spaCy for text comprehension.",
        details: `Hybrid Cognitive Chatbot: Wikipedia API Integration & Multi-Model Sentiment Analysis Pipeline

1. Introduction & Business Context

In the age of service automation, purely transactional chatbots (based on rigid rules) fail to retain users due to lack of empathy and limited informative scope.

This project consisted of developing a Hybrid Conversational Agent (Chatbot) capable of solving two major dialogue system challenges:

Open Knowledge Scope: Dynamic integration with the Wikipedia knowledge base for real-time queries.

Artificial Emotional Intelligence: A statistical and Deep Learning pipeline for detecting the user's affective state, allowing the AI to tune the response tone (empathetic, neutral or assertive) according to detected mood.

2. Tech Stack & Ecosystem

Core Language: Python
Deep Learning & LLMs: Hugging Face transformers (Classification Pipelines)
Natural Language Processing (Heuristic NLP): NLTK (VADER Lexicon), TextBlob
Data Ingestion: Wikipedia API Wrappers

3. System Architecture & NLP Engineering

The chatbot was built following principles of high cohesion and low coupling, divided into three main engines:

A. The Sentiment Engine (Polymorphic Ensemble)

To mitigate classification biases in short and informal texts, the architecture processes user input through a combined approach (Ensemble Scoring):

Lexical Analysis (Rule-Based): Use of the VADER algorithm (SentimentIntensityAnalyzer) optimized to capture intensifiers and punctuation, combined with TextBlob's syntactic polarity.

Semantic Analysis (Transformer-Based): Text ingestion by a Deep Learning model based on Attention Neural Networks (Transformers) via Hugging Face, capturing deep context and nuances that lexical rules ignore.

Scores are normalized and combined to generate the final mood score.

B. The Knowledge Engine (Dynamic Knowledge Retrieval)

When the user performs a search query, the agent asynchronously triggers the Portuguese Wikipedia API. The subsystem performs term similarity search (wikipedia.search), selects the most relevant article and extracts the clean executive summary, dynamically handling ambiguity exceptions (DisambiguationError).

4. Agent Execution Flow (Conversational Pipeline)

User Input
  ↓
Sentiment Engine: VADER + Transformers
  ↓
Mood Score Calculation
  ↓
Adaptive Tone Selection (Positive/Neutral/Negative)
  ↓
Final Response Engine
  ↑
Knowledge Engine: Wikipedia API → Analytical Summary Extraction
  ↓
Chatbot Output + Feedback Loop

5. Practical Results & Project Differentiators

The agent demonstrated high operational flexibility, combining abstract context processing with factual information accuracy.

Practical Interaction Example:

User (irritated): "I'm tired of searching and not finding anything! Explain what Machine Learning is."

Sentiment Analysis: Score classified as Negative/Frustrated.

Bot Action: The system triggers the Wikipedia engine to collect the technical definition of Machine Learning. However, before delivering the raw data, the response engine intercepts the emotional state and generates an empathetic preamble: "I understand your frustration and apologize for the difficulty. Let me simplify this for you: [...Wikipedia content...]".

Active Feedback System: At the end of the session, the script collects and stores user evaluation, generating inputs for future calibration of the model's sentiment thresholds.

6. Evolution Roadmap (Next Steps)

To scale this project to industrial production level, the next development milestones are:

Replace the terminal script with a responsive web interface using Streamlit or FastAPI + React.

Implement a short-term conversational memory layer using Vector Databases so the chatbot doesn't forget the context of previous sentences.

Migrate the search engine to a RAG (Retrieval-Augmented Generation) architecture coupled with a local LLM model (such as Llama 3).`,
      },
    ],
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      timeline: "Timeline",
      projects: "Projects",
      certifications: "Certifications",
      contact: "Contact",
    },
    hero: {
      badge: "Data Scientist • Data Engineer",
      tagline: "Building intelligent data-driven solutions with Machine Learning and Data Engineering for decision support.",
      github: "GitHub",
      linkedin: "LinkedIn",
      resume: "Resume",
      about: "About",
    },
    about: {
      title: "About Me",
      text: "Data Scientist and Analyst with hands-on experience in data analysis and engineering, document verification, network infrastructure support, and development of Machine Learning-based solutions. Solid background in Python, SQL, R, Statistics, AI and BI, with a multidisciplinary vision and systemic thinking for solving complex problems.",
    },
    competencias: {
      title: "Skills",
    },
    timeline: {
      title: "Timeline",
      events: [
        "Started Data Science degree",
        "M.I.N.D. project started",
        "Clinical database development",
        "Psychometric scales integration",
        "Degree in Data Science with emphasis on AI",
        "Machine Learning architecture",
      ],
    },
    projects: {
      title: "Projects",
    },
    featured: {
      badge: "Featured Project",
      github: "GitHub",
      deploy: "Deploy",
      others: "Other projects",
      readme: "About the project",
    },
    projectCard: {
      github: "GitHub",
      details: "Details",
    },
    certificacoes: {
      title: "Certifications",
      name: "ITIL 4 Foundations",
      issuer: "PeopleCert",
      button: "Certificate",
    },
    contact: {
      title: "Contact",
      intro: "Let's work together? Send me a message.",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      subjectLabel: "Subject",
      subjectPlaceholder: "Subject",
      messageLabel: "Message",
      messagePlaceholder: "Your message",
      send: "Send message",
      sent: "Message sent!",
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "E-mail",
    },
    footer: {
      built: "Built with Next.js and Tailwind CSS",
    },
  },
};

export default translations;
export type Lang = keyof typeof translations;
