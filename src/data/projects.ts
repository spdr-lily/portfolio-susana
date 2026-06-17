import type { Project } from "@/types";

export const projects: Project[] = [
 {
    id: 1,
    title: "M.I.N.D.",
    description: "Sistema open-source de apoio à decisão clínica baseado em DSM-5-TR, CID-11 e inferência probabilística.",
    technologies: [
      "FastAPI",
      "PostgreSQL",
      "Airflow",
      "Redis",
      "Machine Learning"
    ],
    image: "/images/mind.png",
    featured: true,
    githubUrl: "https://github.com/spdr-lily/m.i.n.d",
    deployUrl: "https://mind.local"
  },
  {
    id: 2,
    title: "Sistema de Manutenção Preditiva",
    description:
      "Machine Learning supervisionado com Random Forest para predição de falhas em equipamentos industriais.",
    technologies: ["Machine Learning", "Random Forest", "Python", "Industrial"],
    image: "/images/dashboard.png",
    githubUrl: "https://github.com/spdr-lily/random-forest-para-manutencao-preditiva",
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
Implementação de técnicas de balanceamento de classes (como SMOTE), dado que falhas são eventos raros no ambiente industrial real.`
  },
  {
    id: 3,
    title: "Dashboard Online com Flask + Dash",
    description:
      "Backend em Flask com API REST e frontend interativo em Dash para visualização de dados.",
    technologies: ["Flask", "Dash", "API REST", "Deploy"],
    image: "/images/dashboard.png",
    githubUrl: "https://github.com/spdr-lily/Projeto-de-Dashboard-e-Visualizacao-de-Dados",
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
Adicionar filtros dinâmicos e reativos (callbacks) no Dash por período de data e comportamento do cliente.`
  },
  {
    id: 4,
    title: "Análise de Séries Temporais",
    description:
      "Modelagem e previsão de séries temporais aplicadas a indicadores de saúde e negócios.",
    technologies: ["Python", "Statsmodels", "Prophet", "Time Series"],
    image: "/images/etl.png",
    githubUrl: "https://github.com/spdr-lily/analise-de-series-temporais-de-uma-empresa",
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

Modelagem Preditiva: Implementar modelos autorregressivos clássicos como SARIMA (para capturar sazonalidade) ou algoritmos de Machine Learning como Prophet (do Meta) para gerar as previsões formais de vendas para os trimestres seguintes.`
  },
  {
    id: 5,
    title: "Processamento de Linguagem Natural (NLP)",
    description:
      "Chatbot com Wikipedia e análise de sentimentos usando NLTK e spaCy para compreensão de texto.",
    technologies: ["NLTK", "spaCy", "Chatbot", "Sentiment Analysis"],
    image: "/images/etl.png",
    githubUrl: "https://github.com/spdr-lily/chatbot-com-wikipedia",
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

Migrar a engine de busca para uma arquitetura RAG (Retrieval-Augmented Generation) acoplada a um modelo LLM local (como Llama 3).`
  },
];
