# SkillMatch JS (Módulo 01 - Mini-Projeto Avaliativo)

Sistema desenvolvido em JavaScript para análise de compatibilidade entre o perfil de um candidato e vagas de emprego, avaliando aderência de habilidades, listando pendências de estudo e simulando carregamento assíncrono de dados.

## 🚀 O que o sistema faz
- **Modelagem de Perfil:** Utiliza o perfil profissional da candidata (Simone Penido), contendo área de interesse, tempo de experiência e conjunto de habilidades dominadas.
- **Catálogo de Vagas:** Carrega vagas fictícias (Desenvolvedora Front-End Júnior, Analista de Sistemas e Analista de Produto) estruturadas via Programação Orientada a Objetos (POO), incluindo herança para vagas remotas.
- **Cálculo de Compatibilidade:** Compara as habilidades do perfil com os requisitos da vaga para gerar um percentual de aderência.
- **Classificação:** Agrupa o resultado em *Alta compatibilidade* (80-100%), *Média compatibilidade* (50-79%) ou *Baixa compatibilidade* (0-49%).
- **Recomendação de Estudo:** Identifica as habilidades faltantes e indica a prioridade de aprendizado.
- **Simulação de Servidor:** Utiliza `Promise` e `async/await` para simular requisições assíncronas, além de aplicar `callbacks` e `closures`.

---

---

## 🛠️ Estrutura do Projeto

```text
skillmatch-js/
│
├── index.html        # Interface web com estilos CSS internos
├── skillmatch.js      # Script principal contendo a lógica da aplicação
└── README.md          # Documentação do projeto

---

## 📐 Decisões de Projeto

### 1\. Regra de Cálculo de Compatibilidade

O percentual é calculado dividindo o número de requisitos que o candidato **já possui** pelo **total de requisitos exigidos** pela vaga, multiplicado por 100: Percentual = (Habilidades Atendidas / Total de Requisitos) \* 100

### 2\. Critério de Prioridade de Estudo

O sistema prioriza a **primeira habilidade faltante** listada no array de requisitos da vaga que ainda não faz parte do repertório do candidato, direcionando o foco de aprendizado de forma imediata.

### 3\. Arquitetura Cliente-Servidor Simulada

Na web moderna, o front-end solicita dados a um servidor externo de forma assíncrona. Para simular esse comportamento sem uma API real, o projeto utiliza `Promise` e `async/await` com um atraso (`setTimeout`), garantindo o fluxo assíncrono sem bloquear a execução principal.

## 🧩 Conceitos Aplicados do Módulo 01

-   **Variáveis e Tipos:** Uso de `const` e `let`, strings, números, booleanos e arrays.
    
-   **Estruturas de Decisão:** `if-else` para classificação de faixas de compatibilidade.
    
-   **Laços de Repetição:** `for` para percorrer as listas de vagas.
    
-   **POO:** Criação da classe base `Vaga` e da subclasse `VagaRemota` (Herança), aplicando construtores, atributos, métodos e a palavra-chave `this`.
    
-   **Métodos de Array:** Uso de `filter`, `map` e `reduce`.
    
-   **Funções Avançadas:** Arrow functions, funções de `callback` e `closure` (contador interno preservado para registro de relatórios).
    
-   **Assincronicidade:** `Promise` e `async/await`.
    

## 🔌 Extensões Recomendadas (VS Code)

-   **Prettier:** Formatação de código.
    
-   **GitLens:** Controle de versão visual.

-   **Live Server:** Execução da página HTML em um servidor local com reload automático.
    

## 🔗 Link

-   **Repositório GitHub:** \[https://github.com/SimonePenido/SkillMatch-JS-SCTEC\]

    
