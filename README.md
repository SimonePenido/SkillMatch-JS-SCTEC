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

## 🛠️ Como executar o projeto (Passo a Passo)

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.
2. Clone este repositório ou baixe os arquivos para o seu computador.
3. Abra a pasta do projeto no **VS Code**.
4. No terminal integrado, execute o comando:
   ```bash
   node skillmatch.js