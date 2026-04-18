# Nome: Super Transcriptor

# Problema Escolhido : 
Transcrição de texto via imagens

# Objetivo da aplicação
O objetivo da aplicação foi desenvolver uma utilização de Visão Computacional para leitura de texto em fotos e tradução de texto presente nelas caso fossem em lingua estrangeira. 
O projeto se expandiu para a leitura de texto manuscrito a fim de implementar uma possível leitura de receitas médicas manuscritas.

# Caso de uso
Digitalização Inteligente de Documentos Manuscritos. Diferente de um OCR tradicional, a aplicação usa de modelos de linguagem LLM como o Deepseek para realizar transcrições de texto e manuscritos, uma limitação tradicional do OCR.

# Tecnológias usadas
- Nginx (estruturação do servidor e hosteamento)
- EasyOCR (Implementação de algoritmo de visão computacional)
- Ollama (implementação Open-source de LLM)
- Deepseek-ocr (Agente de IA de LLM)
- FastAPI e Python (Back-end)
- React, Vite e Typescript (Front-end)

# Arquitetura geral da solução
Uso de containers e arquitetura Monorepo (Back-end e Front-end no mesmo repositório) com uso de Reverse Proxy via Nginx.


# Instruções de execução
- Docker e Docker Compose
## Como executar o programa:
Após clonar o repositório siga os seguintes passos: 

1. Na pasta raíz do projeto execute o comando ``` docker compose up --build ```
2. O arquivo docker-compose.yaml irá instalar todas as dependências necessárias 
3. No terminal da pasta raiz que contém o docker-compose.yaml execute o comando ```docker exec centro-ia-selecao-estagiario-fullstack-2026-04-ollama-1 ollama pull deepseek-ocr ```
4. Abra a aplicação no localhost (http://localhost/)

# Como a IA foi integrada
### Easy OCR
Para a parte de visão computacional foi usado a biblioteca EasyOCR que traz uma implementação de algoritmos de OCR para identificação de texto em uma imagem.
### Agentes de IA
Foi usado o framework Open Source Ollama em conjunto com o agente Deepseek-OCR para realizar a transcrição de documentos escritos à mão.

# Exemplos de Uso da Aplicação
## Caso 1:Tradução de placas, emails e textos impressos
Um usuário entraria na aplicação, realizaria o upload da sua foto contendo o texto a ser traduzido e o programa iria processar a imagem, exibir o texto transcrito e uma tradução para uma das linguagens disponíveis.
## Caso 2: Transcrição de textos manuscritos
Um usuário entraria na aplicação, realizaria o upload da sua foto contendo o texto a ser transcrito e a aplicação faria o processamento da imagem e apresentaria o texto transcrito.

# Limitações atuais do MVP
- Limite máximo de imagens de 1Mb;
- Uso de LLM locais devido ao Ollama;
- Impossibilidade de atualizar o modelo de IA sem mudar a arquitetura do projeto

# Possíveis evoluções futuras
- Implementação de Modelos de OCR treinados sem depender de LLMS e Modelos pré-prontos;
- Melhoras no Front-End;
- Melhora na velocidade de resposta do Back-end.