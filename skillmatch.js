// ==========================================
// MINI-PROJETO: SKILLMATCH-JS
// ==========================================

// RF01 – Criar o perfil do candidato
const candidato = {
  nome: "Simone Penido",
  areaInteresse: "Desenvolvimento de Software / Análise de Sistemas",
  experienciaAnos: 2,
  habilidades: ["JavaScript", "HTML5", "CSS3", "Git", "SQL", "Banco de Dados"]
};

// RF09 & RF10 – POO: Classe base Vaga e Herança com VagaRemota
class Vaga {
  constructor(id, empresa, cargo, requisitos) {
    this.id = id;
    this.empresa = empresa;
    this.cargo = cargo;
    this.requisitos = requisitos; // Array de strings com as habilidades exigidas
  }

  // RF11 – Uso do this
  detalhesVaga() {
    return `${this.cargo} na ${this.empresa} - Requisitos: ${this.requisitos.join(", ")}`;
  }
}

// Classe que herda de Vaga (Requisito RF10 - Herança)
class VagaRemota extends Vaga {
  constructor(id, empresa, cargo, requisitos, plataformaReuniao) {
    super(id, empresa, cargo, requisitos);
    this.plataformaReuniao = plataformaReuniao; 
  }

  // Sobrescrevendo o método detalhesVaga (Especialização de comportamento)
  detalhesVaga() {
    return `[Remota via ${this.plataformaReuniao}] ${super.detalhesVaga()}`;
  }
}

// RF02 – Criar uma lista de vagas (instâncias usando a classe e herança)
const listaVagasIniciais = [
  new Vaga(1, "TechCorp Soluções", "Desenvolvedora Front-End Júnior", ["JavaScript", "HTML5", "CSS3", "React"]),
  new Vaga(2, "DataSys Consultoria", "Analista de Sistemas", ["SQL", "Banco de Dados", "JavaScript", "Modelagem de Dados"]),
  new VagaRemota(3, "Inovação Global", "Analista de Produto", ["Gestão de Projetos", "SQL", "Git", "Comunicação"], "Microsoft Teams")
];

// RF14 – Usar Promise e async/await para simular o carregamento de um servidor
function simularCarregamentoVagas() {
  return new Promise((resolve, reject) => {
    console.log("Conectando ao servidor para carregar as vagas...");
    setTimeout(() => {
      const sucesso = true; 
      if (sucesso) {
        resolve(listaVagasIniciais);
      } else {
        reject("Erro ao carregar as vagas do servidor.");
      }
    }, 1200);
  });
}

// RF13 – Usar Closure para manter um contador interno de relatórios gerados
function criarContadorRelatorios() {
  let contador = 0; // Valor interno preservado sem variável global
  return function() {
    contador++;
    return contador;
  };
}
const registrarRelatorio = criarContadorRelatorios();

// RF12 – Usar Callback (recebe uma função para formatar a exibição da mensagem)
function exibirComMensagemPersonalizada(mensagem, callbackFormato) {
  callbackFormato(mensagem);
}

// Função principal assíncrona que executa todo o fluxo do sistema
async function iniciarApp() {
  try {
    // Aguarda o carregamento das vagas via Promise (RF14)
    const vagas = await simularCarregamentoVagas();
    console.log(`\n=== RELATÓRIO DE COMPATIBILIDADE: ${candidato.nome.toUpperCase()} ===\n`);

    let melhorVaga = null;
    let maiorPercentual = -1;

    // Laço for para percorrer as vagas (Conforme requisitos técnicos)
    for (let i = 0; i < vagas.length; i++) {
      const vagaAtual = vagas[i];

      // RF08 – Usar método de array (filter) para encontrar habilidades faltantes
      // RF05 – Listar habilidades que o candidato ainda não possui
      const habilidadesFaltantes = vagaAtual.requisitos.filter(
        req => !candidato.habilidades.includes(req)
      );

      // RF03 – Calcular compatibilidade (Habilidades atendidas / Total de requisitos * 100)
      const totalRequisitos = vagaAtual.requisitos.length;
      const habilidadesAtendidas = totalRequisitos - habilidadesFaltantes.length;
      const percentual = Math.round((habilidadesAtendidas / totalRequisitos) * 100);

      // RF04 – Classificar a compatibilidade usando estrutura de decisão (if-else)
      let classificacao = "";
      if (percentual >= 80) {
        classificacao = "Alta compatibilidade";
      } else if (percentual >= 50) {
        classificacao = "Média compatibilidade";
      } else {
        classificacao = "Baixa compatibilidade";
      }

      // RF07 – Gerar uma recomendação de estudo baseada na primeira habilidade faltante
      let recomendacaoEstudo = habilidadesFaltantes.length > 0 
        ? `Prioridade de estudo: Focar em aprender '${habilidadesFaltantes[0]}'.`
        : `Perfil totalmente alinhado! Nenhuma habilidade pendente.`;

      // Exibição dos dados da vaga atual utilizando o método com 'this' (RF11)
      console.log(`Vaga ${i + 1}: ${vagaAtual.detalhesVaga()}`);
      console.log(`> Compatibilidade: ${percentual}% (${classificacao})`);
      console.log(`> Habilidades Faltantes: ${habilidadesFaltantes.length > 0 ? habilidadesFaltantes.join(", ") : "Nenhuma"}`);
      console.log(`> ${recomendacaoEstudo}`);
      console.log("-".legislacao || "--------------------------------------------------");

      // RF06 – Encontrar a vaga com maior compatibilidade
      if (percentual > maiorPercentual) {
        maiorPercentual = percentual;
        melhorVaga = vagaAtual;
      }
    }

    // RF08 – Usar mais métodos de array (ex: map e reduce para resumo estatístico)
    const percentuaisArray = vagas.map(vaga => {
      const faltam = vaga.requisitos.filter(r => !candidato.habilidades.includes(r));
      return Math.round(((vaga.requisitos.length - faltam.length) / vaga.requisitos.length) * 100);
    });

    const mediaGeral = Math.round(percentuaisArray.reduce((acc, val) => acc + val, 0) / vagas.length);

    console.log(`\n[DESTAQUE DE ADERÊNCIA - RF06]`);
    console.log(`A vaga com maior aderência ao seu perfil é: ${melhorVaga.cargo} (${melhorVaga.empresa}) com ${maiorPercentual}% de compatibilidade!`);
    console.log(`Média geral de compatibilidade nas vagas analisadas: ${mediaGeral}%\n`);

    // Usando Callback (RF12) e Closure (RF13)
    exibirComMensagemPersonalizada(
      `Relatório #${registrarRelatorio()} gerado com sucesso.`, 
      msg => console.log(`[LOG DO SISTEMA] ${msg}`)
    );

  } catch (erro) {
    console.error("Erro crítico na execução do sistema:", erro);
  }
}

// Executando o aplicativo
iniciarApp();