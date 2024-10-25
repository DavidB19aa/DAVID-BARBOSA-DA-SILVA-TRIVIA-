/* 
   ESTUDANTE: DAVID BARBOSA DA SILVA
   MATRÍCULA: 202304324468
*/
const perguntas = [
    {
        texto: "Qual linguagem de programação é mais comumente usada para desenvolvimento web no lado do cliente?",
        opcoes: ["Python", "Java", "JavaScript", "C++"],
        respostaCorreta: 2
    },
    {
        texto: "O que significa 'compilar' um código-fonte?",
        opcoes: [
            "Executar o código diretamente no navegador", 
            "Converter o código-fonte em código de máquina", 
            "Formatar o código para melhorar a legibilidade", 
            "Salvar o código em um arquivo"
        ],
        respostaCorreta: 1
    },
    {
        texto: "Qual é o objetivo principal do uso de 'frameworks' em programação?",
        opcoes: [
            "Facilitar a formatação de documentos de texto", 
            "Automatizar a execução de tarefas em segundo plano", 
            "Fornecer uma base estruturada para o desenvolvimento de aplicações", 
            "Otimizar o desempenho do hardware"
        ],
        respostaCorreta: 2
    },
    {
        texto: "Qual dos seguintes é um conceito fundamental em programação orientada a objetos?",
        opcoes: ["Compilação", "Herança", "Algoritmo", "Banco de dados"],
        respostaCorreta: 1
    },
    {
        texto: "O que é uma função recursiva em programação?",
        opcoes: [
            "Uma função que chama a si mesma", 
            "Uma função que é executada apenas uma vez", 
            "Uma função que retorna múltiplos valores", 
            "Uma função que é chamada a partir de outra função"
        ],
        respostaCorreta: 0
    }
];

let perguntaAtual = 0;
let pontuacao = 0;

const exibirPergunta = () => {
    const perguntaElement = document.getElementById('pergunta');
    const opcoesElement = document.getElementById('respostas');
    const mensagemElement = document.getElementById('mensagem');

    mensagemElement.textContent = "";
    perguntaElement.innerHTML = `<p>${perguntas[perguntaAtual].texto}</p>`;
    opcoesElement.innerHTML = "";

    perguntas[perguntaAtual].opcoes.forEach((opcao, index) => {
        const botao = document.createElement('button');
        botao.textContent = opcao;
        botao.setAttribute('data-index', index + 1);
        botao.onclick = () => verificarResposta(index, botao);
        opcoesElement.appendChild(botao);
    });
};

const verificarResposta = (indiceSelecionado, botaoSelecionado) => {
    const mensagemElement = document.getElementById('mensagem');
    const { respostaCorreta } = perguntas[perguntaAtual];

    if (indiceSelecionado === respostaCorreta) {
        mensagemElement.textContent = 'Correto!';
        mensagemElement.style.color = 'green';
        pontuacao++;
    } else {
        mensagemElement.textContent = 'Errado!';
        mensagemElement.style.color = 'red';
        const botoes = document.querySelectorAll('#respostas button');
        botoes[respostaCorreta].style.backgroundColor = 'green';
    }

    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {
        setTimeout(() => {
            const botoes = document.querySelectorAll('#respostas button');
            botoes.forEach(botao => {
                botao.style.backgroundColor = '';
            });
            exibirPergunta();
        }, 1000);
    } else {
        setTimeout(() => {
            mensagemElement.textContent = `Fim do jogo! Você conseguiu: ${pontuacao} milhas de ${perguntas.length}`;
            mensagemElement.style.color = 'white';
        }, 1000);
    }
};

window.onload = exibirPergunta;
