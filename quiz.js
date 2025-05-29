const quizContainer = document.getElementById('quiz-container');
const proximaPerguntaBtn = document.getElementById('proxima-pergunta');
const caixaNome = document.getElementById('caixa-nome');
const disciplina = new URLSearchParams(window.location.search).get('disciplina');
const disciplinasFormatadas = {
    portugues: "Português",
    matematica: "Matemática",
    historia: "História",
    geografia: "Geografia",
    artes: "Artes",
    ensinoreligioso: "Ensino Religioso",
    ingles: "Inglês"
};

const quizzes = {
    portugues: [
        {
            pergunta: "Qual é o plural de 'caderno'?",
            respostas: ["Cadernos", "Cadernas", "Cadernoses", "Cadernas"],
            respostaCorreta: "Cadernos"
        },
        {
            pergunta: "Qual é o significado da palavra 'gigante'?",
            respostas: ["Muito pequeno", "Muito antigo", "Muito grande", "Muito rápido"],
            respostaCorreta: "Muito grande"
        },
        {
            pergunta: "Qual é o plural de 'casa'?",
            respostas: ["casa", "casas", "casos", "casinhas"],
            respostaCorreta: "Casas"
        },
        {
            pergunta: "Complete: O gato _____ o rato.",
            respostas: ["persegue", "corre", "brinca", "observa"],
            respostaCorreta: "persegue"
        },
        {
            pergunta: "Qual é o antônimo de 'feliz'?",
            respostas: ["triste", "alegre", "contente", "radiante"],
            respostaCorreta: "triste"
        },
        {
            pergunta: "Quantas sílabas tem a palavra 'banana'?",
            respostas: ["dois", "três", "quatro", "cinco"],
            respostaCorreta: "três"
        },
        {
            pergunta: "Qual é o sinônimo de 'rápido'?",
            respostas: ["veloz", "lento", "devagar", "calmo"],
            respostaCorreta: "veloz"
        },
        {
            pergunta: "Qual é o plural de 'cão'?",
            respostas: ["cães", "cão", "cãos", "cainhos"],
            respostaCorreta: "cães"
        },
        {
            pergunta: "Complete: A menina _____ o livro.",
            respostas: ["leu", "ler", "lê", "leia"],
            respostaCorreta: "leu"
        },
        {
            pergunta: "Qual é o antônimo de 'grande'?",
            respostas: ["pequeno", "enorme", "gigante", "imenso"],
            respostaCorreta: "pequeno"
        },
        {
            pergunta: "Quantas sílabas tem a palavra 'computador'?",
            respostas: ["três", "quatro", "cinco", "seis"],
            respostaCorreta: "quatro"
        },
        {
            pergunta: "Qual é o sinônimo de 'inteligente'?",
            respostas: ["esperto", "burro", "lento", "ignorante"],
            respostaCorreta: "esperto"
        },
        {
            pergunta: "Qual é o plural de 'flor'?",
            respostas: ["flores", "flor", "floris", "florz"],
            respostaCorreta: "flores"
        },
        {
            pergunta: "Complete: O sol _____ no horizonte.",
            respostas: ["nasce", "nascia", "nascendo", "nascido"],
            respostaCorreta: "nasce"
        },
        {
            pergunta: "Qual é o antônimo de 'claro'?",
            respostas: ["escuro", "brilhante", "luminoso", "nítido"],
            respostaCorreta: "escuro"
        },
        {
            pergunta: "Quantas sílabas tem a palavra 'universidade'?",
            respostas: ["cinco", "seis", "sete", "oito"],
            respostaCorreta: "seis"
        },
        {
            pergunta: "Qual é o sinônimo de 'rápido'?",
            respostas: ["veloz", "lento", "devagar", "calmo"],
            respostaCorreta: "veloz"
        }
    ],
    matematica: [
        {
            pergunta: "Quanto é 7 × 6?",
            respostas: ["42", "36", "48", "56"],
            respostaCorreta: "42"
        },
        {
            pergunta: "Qual número completa a sequência? 2, 4, 6, __, 10",
            respostas: ["7", "8", "9", "12"],
            respostaCorreta: "8"
        },
        {
            pergunta: "Se João tem 12 balas e dá 5 para Ana, com quantas ele fica?",
            respostas: ["5", "7", "17", "6"],
            respostaCorreta: "7"
        },
        {
            pergunta: "Quanto é 2 + 2?",
            respostas: ["3", "4", "5", "6"],
            respostaCorreta: "4"
        },
        {
            pergunta: "Quanto é 5 x 3?",
            respostas: ["10", "15", "20", "25"],
            respostaCorreta: "15"
        },
        {
            pergunta: "Quanto é 10 - 4?",
            respostas: ["5", "6", "7", "8"],
            respostaCorreta: "6"
        },
        {
            pergunta: "Quanto é 12 ÷ 3?",
            respostas: ["2", "3", "4", "6"],
            respostaCorreta: "4"
        },
        {
            pergunta: "Quanto é 7 + 8?",
            respostas: ["13", "14", "15", "16"],
            respostaCorreta: "15"
        },
        {
            pergunta: "Quanto é 9 x 7?",
            respostas: ["63", "56", "72", "81"],
            respostaCorreta: "63"
        },
        {
            pergunta: "Qual é a raiz quadrada de 64?",
            respostas: ["6", "8", "10", "12"],
            respostaCorreta: "8"
        },
        {
            pergunta: "Quanto é 15 ÷ 3?",
            respostas: ["3", "5", "6", "9"],
            respostaCorreta: "5"
        },
        {
            pergunta: "Qual é o resultado de 12 + 18?",
            respostas: ["28", "30", "32", "34"],
            respostaCorreta: "30"
        },
        {
            pergunta: "Quanto é 20% de 100?",
            respostas: ["10", "20", "30", "40"],
            respostaCorreta: "20"
        },
        {
            pergunta: "Qual é o valor de π (pi) arredondado para duas casas decimais?",
            respostas: ["3.14", "3.16", "3.18", "3.20"],
            respostaCorreta: "3.14"
        },
        {
            pergunta: "Quanto é 7²?",
            respostas: ["49", "56", "63", "70"],
            respostaCorreta: "49"
        },
        {
            pergunta: "Qual é o resultado de 25 - 17?",
            respostas: ["6", "7", "8", "9"],
            respostaCorreta: "8"
        },
        {
            pergunta: "Quanto é 3 x 4 + 5?",
            respostas: ["17", "19", "21", "23"],
            respostaCorreta: "17"
        },
        {
            pergunta: "Qual é o resultado de 100 ÷ 10?",
            respostas: ["5", "10", "15", "20"],
            respostaCorreta: "10"
        }
    ],
    historia: [
        {
            pergunta: "Quem descobriu o Brasil?",
            respostas: ["Pedro Álvares Cabral", "Lula", "Trump"],
            respostaCorreta: "Pedro Álvares Cabral"
        },
        {
            pergunta: "Em que ano o Brasil foi descoberto?",
            respostas: ["1492", "1500", "1520", "1600"],
            respostaCorreta: "1500"
        },
        {
            pergunta: "Quem foi o primeiro presidente do Brasil?",
            respostas: ["Dom Pedro II", "Deodoro da Fonseca", "Getúlio Vargas", "Juscelino Kubitschek"],
            respostaCorreta: "Deodoro da Fonseca"
        },
        {
            pergunta: "Qual foi o período da Ditadura Militar no Brasil?",
            respostas: ["1950-1960", "1964-1985", "1970-1980", "1985-1990"],
            respostaCorreta: "1964-1985"
        },
        {
            pergunta: "Quem proclamou a Independência do Brasil?",
            respostas: ["Dom Pedro I", "Dom Pedro II", "Tiradentes", "Getúlio Vargas"],
            respostaCorreta: "Dom Pedro I"
        },
        {
            pergunta: "Quem foi o líder da Revolução Russa de 1917?",
            respostas: ["Lenin", "Stalin", "Trotsky", "Marx"],
            respostaCorreta: "Lenin"
        },
        {
            pergunta: "Em que ano ocorreu a Proclamação da República no Brasil?",
            respostas: ["1889", "1891", "1900", "1910"],
            respostaCorreta: "1889"
        },
        {
            pergunta: "Qual foi o principal motivo da Primeira Guerra Mundial?",
            respostas: ["Assassinato do Arquiduque Franz Ferdinand", "Invasão da Polônia", "Revolução Industrial", "Queda do Muro de Berlim"],
            respostaCorreta: "Assassinato do Arquiduque Franz Ferdinand"
        },
        {
            pergunta: "Quem foi o primeiro presidente dos Estados Unidos?",
            respostas: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"],
            respostaCorreta: "George Washington"
        },
        {
            pergunta: "Qual foi o período da Revolução Francesa?",
            respostas: ["1789-1799", "1800-1810", "1776-1783", "1815-1825"],
            respostaCorreta: "1789-1799"
        },
        {
            pergunta: "Quem foi o imperador romano que construiu o Coliseu?",
            respostas: ["Nero", "Augusto", "Vespasiano", "Calígula"],
            respostaCorreta: "Vespasiano"
        },
        {
            pergunta: "Qual foi o principal evento que marcou o fim da Idade Média?",
            respostas: ["Queda de Constantinopla", "Queda do Império Romano", "Revolução Industrial", "Descobrimento da América"],
            respostaCorreta: "Queda de Constantinopla"
        },
        {
            pergunta: "Quem foi o líder da independência da Índia?",
            respostas: ["Mahatma Gandhi", "Jawaharlal Nehru", "Indira Gandhi", "Subhas Chandra Bose"],
            respostaCorreta: "Mahatma Gandhi"
        },
        {
            pergunta: "Qual foi o principal motivo da Guerra Fria?",
            respostas: ["Conflito entre EUA e URSS", "Expansão do colonialismo", "Revolução Industrial", "Queda do Muro de Berlim"],
            respostaCorreta: "Conflito entre EUA e URSS"
        },
        {
            pergunta: "Quem foi o primeiro imperador do Brasil?",
            respostas: ["Dom Pedro I", "Dom Pedro II", "Dom João VI", "Dom Miguel I"],
            respostaCorreta: "Dom Pedro I"
        }
    ],
    geografia: [
        {
            pergunta: "Qual é o maior oceano do mundo?",
            respostas: ["Atlântico", "Índico", "Pacífico", "Ártico"],
            respostaCorreta: "Pacífico"
        },
        {
            pergunta: "Em qual continente fica o Brasil?",
            respostas: ["África", "Europa", "América do Sul", "Ásia"],
            respostaCorreta: "América do Sul"
        },
        {
            pergunta: "Qual instrumento mede a temperatura?",
            respostas: ["Barômetro", "Termômetro", "Higrômetro", "Anemômetro"],
            respostaCorreta: "Termômetro"
        },
        {
            pergunta: "Qual é a capital do Brasil?",
            respostas: ["Rio de Janeiro", "São Paulo", "Brasília", "Belo Horizonte"],
            respostaCorreta: "Brasília"
        },
        {
            pergunta: "Qual é o maior oceano do mundo?",
            respostas: ["Atlântico", "Índico", "Ártico", "Pacífico"],
            respostaCorreta: "Pacífico"
        },
        {
            pergunta: "Qual é o país mais populoso do mundo?",
            respostas: ["Índia", "Estados Unidos", "China", "Brasil"],
            respostaCorreta: "China"
        },
        {
            pergunta: "Qual é o rio mais longo do mundo?",
            respostas: ["Amazonas", "Nilo", "Yangtzé", "Mississipi"],
            respostaCorreta: "Nilo"
        },
        {
            pergunta: "Qual é o clima predominante no deserto do Saara?",
            respostas: ["Tropical", "Árido", "Polar", "Equatorial"],
            respostaCorreta: "Árido"
        },
        {
            pergunta: "Qual é o maior país do mundo em área territorial?",
            respostas: ["Rússia", "Canadá", "China", "Estados Unidos"],
            respostaCorreta: "Rússia"
        },
        {
            pergunta: "Qual é o menor país do mundo?",
            respostas: ["Vaticano", "Mônaco", "San Marino", "Liechtenstein"],
            respostaCorreta: "Vaticano"
        },
        {
            pergunta: "Qual é o rio mais caudaloso do mundo?",
            respostas: ["Amazonas", "Nilo", "Yangtzé", "Mississipi"],
            respostaCorreta: "Amazonas"
        },
        {
            pergunta: "Qual é o país mais populoso do mundo?",
            respostas: ["China", "Índia", "Estados Unidos", "Indonésia"],
            respostaCorreta: "China"
        },
        {
            pergunta: "Qual é o maior deserto do mundo?",
            respostas: ["Saara", "Arábia", "Gobi", "Antártida"],
            respostaCorreta: "Antártida"
        },
        {
            pergunta: "Qual é a capital da França?",
            respostas: ["Paris", "Londres", "Berlim", "Roma"],
            respostaCorreta: "Paris"
        },
        {
            pergunta: "Qual é o oceano mais profundo do mundo?",
            respostas: ["Pacífico", "Atlântico", "Índico", "Ártico"],
            respostaCorreta: "Pacífico"
        },
        {
            pergunta: "Qual é o país conhecido como 'Terra do Sol Nascente'?",
            respostas: ["Japão", "China", "Coreia do Sul", "Tailândia"],
            respostaCorreta: "Japão"
        },
        {
            pergunta: "Qual é a montanha mais alta do mundo?",
            respostas: ["Monte Everest", "K2", "Monte Kilimanjaro", "Monte McKinley"],
            respostaCorreta: "Monte Everest"
        },
        {
            pergunta: "Qual é o país com maior número de vulcões ativos?",
            respostas: ["Indonésia", "Japão", "Islândia", "Itália"],
            respostaCorreta: "Indonésia"
        }
    ],
    ensinoreligioso: [
        {
            pergunta: "Qual é o livro sagrado do Cristianismo?",
            respostas: ["Alcorão", "Torá", "Bíblia", "Vedas"],
            respostaCorreta: "Bíblia"
        },
        {
            pergunta: "Qual é o profeta principal do Islamismo?",
            respostas: ["Jesus", "Maomé", "Moisés", "Buda"],
            respostaCorreta: "Maomé"
        },
        {
            pergunta: "Qual é a religião predominante no Brasil?",
            respostas: ["Islamismo", "Budismo", "Cristianismo", "Judaísmo"],
            respostaCorreta: "Cristianismo"
        },
        {
            pergunta: "Qual é o símbolo do Judaísmo?",
            respostas: ["Cruz", "Estrela de Davi", "Lua Crescente", "Om"],
            respostaCorreta: "Estrela de Davi"
        },
        {
            pergunta: "Qual é o local sagrado do Hinduísmo?",
            respostas: ["Meca", "Jerusalém", "Varanasi", "Roma"],
            respostaCorreta: "Varanasi"
        },
        {
            pergunta: "Qual é o livro sagrado do Islamismo?",
            respostas: ["Alcorão", "Torá", "Bíblia", "Vedas"],
            respostaCorreta: "Alcorão"
        },
        {
            pergunta: "Qual é o profeta principal do Judaísmo?",
            respostas: ["Moisés", "Abraão", "Isaías", "Ezequiel"],
            respostaCorreta: "Moisés"
        },
        {
            pergunta: "Qual é a religião predominante na Índia?",
            respostas: ["Hinduísmo", "Budismo", "Islamismo", "Cristianismo"],
            respostaCorreta: "Hinduísmo"
        },
        {
            pergunta: "Qual é o símbolo do Cristianismo?",
            respostas: ["Cruz", "Estrela de Davi", "Lua Crescente", "Om"],
            respostaCorreta: "Cruz"
        },
        {
            pergunta: "Qual é o local sagrado do Islamismo?",
            respostas: ["Meca", "Jerusalém", "Varanasi", "Roma"],
            respostaCorreta: "Meca"
        },
        {
            pergunta: "Qual é o livro sagrado do Hinduísmo?",
            respostas: ["Vedas", "Alcorão", "Torá", "Bíblia"],
            respostaCorreta: "Vedas"
        },
        {
            pergunta: "Qual é o profeta principal do Cristianismo?",
            respostas: ["Jesus", "Maomé", "Moisés", "Buda"],
            respostaCorreta: "Jesus"
        },
        {
            pergunta: "Qual é a religião predominante no Japão?",
            respostas: ["Xintoísmo", "Budismo", "Cristianismo", "Islamismo"],
            respostaCorreta: "Xintoísmo"
        },
        {
            pergunta: "Qual é o símbolo do Budismo?",
            respostas: ["Roda do Dharma", "Cruz", "Estrela de Davi", "Lua Crescente"],
            respostaCorreta: "Roda do Dharma"
        },
        {
            pergunta: "Qual é o local sagrado do Judaísmo?",
            respostas: ["Jerusalém", "Meca", "Varanasi", "Roma"],
            respostaCorreta: "Jerusalém"
        }
    ],
    ingles: [
        {
            pergunta: "What color is the sky on a sunny day?",
            respostas: ["Green", "Red", "Blue", "Yellow"],
            respostaCorreta: "Blue"
        },
        {
            pergunta: "How do you say 'maçã' in English?",
            respostas: ["Banana", "Apple", "Orange", "Grape"],
            respostaCorreta: "Apple"
        },
        {
            pergunta: "Which animal says 'meow'?",
            respostas: ["Dog", "Cat", "Cow", "Bird"],
            respostaCorreta: "Cat"
        },
        {
            pergunta: "Complete: I _____ a book.",
            respostas: ["read", "eat", "run", "play"],
            respostaCorreta: "read"
        },
        {
            pergunta: "What is the opposite of 'big'?",
            respostas: ["Tall", "Short", "Small", "Fast"],
            respostaCorreta: "Small"
        },
        {
            pergunta: "Como se diz 'gato' em inglês?",
            respostas: ["Dog", "Cat", "Bird", "Mouse"],
            respostaCorreta: "Cat"
        },
        {
            pergunta: "Qual é a forma correta do verbo 'to be' para 'he'?",
            respostas: ["Are", "Is", "Am", "Be"],
            respostaCorreta: "Is"
        },
        {
            pergunta: "Complete: She _____ a book every night.",
            respostas: ["reads", "read", "reading", "is reading"],
            respostaCorreta: "reads"
        }
    ],
    artes: [
        {
            pergunta: "Quem pintou a Mona Lisa?",
            respostas: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
            respostaCorreta: "Leonardo da Vinci"
        },
        {
            pergunta: "Qual é o estilo artístico de Van Gogh?",
            respostas: ["Cubismo", "Impressionismo", "Expressionismo", "Realismo"],
            respostaCorreta: "Expressionismo"
        },
        {
            pergunta: "Qual é a obra mais famosa de Michelangelo?",
            respostas: ["A Última Ceia", "O Grito", "A Criação de Adão", "Noite Estrelada"],
            respostaCorreta: "A Criação de Adão"
        },
        {
            pergunta: "Qual é o principal instrumento na música clássica?",
            respostas: ["Violino", "Piano", "Flauta", "Violoncelo"],
            respostaCorreta: "Piano"
        },
        {
            pergunta: "Quem compôs a Nona Sinfonia?",
            respostas: ["Mozart", "Beethoven", "Bach", "Chopin"],
            respostaCorreta: "Beethoven"
        },
        {
            pergunta: "Quem pintou 'A Noite Estrelada'?",
            respostas: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
            respostaCorreta: "Vincent van Gogh"
        },
        {
            pergunta: "Qual é o estilo artístico de Pablo Picasso?",
            respostas: ["Cubismo", "Impressionismo", "Expressionismo", "Realismo"],
            respostaCorreta: "Cubismo"
        },
        {
            pergunta: "Qual é a obra mais famosa de Michelangelo?",
            respostas: ["A Criação de Adão", "A Última Ceia", "O Grito", "Mona Lisa"],
            respostaCorreta: "A Criação de Adão"
        },
        {
            pergunta: "Qual é o principal instrumento na música clássica?",
            respostas: ["Violino", "Piano", "Flauta", "Violoncelo"],
            respostaCorreta: "Piano"
        },
        {
            pergunta: "Quem compôs 'A Quinta Sinfonia'?",
            respostas: ["Beethoven", "Mozart", "Bach", "Chopin"],
            respostaCorreta: "Beethoven"
        },
        {
            pergunta: "Qual é o estilo artístico de Claude Monet?",
            respostas: ["Impressionismo", "Cubismo", "Expressionismo", "Realismo"],
            respostaCorreta: "Impressionismo"
        },
        {
            pergunta: "Quem pintou 'Guernica'?",
            respostas: ["Pablo Picasso", "Vincent van Gogh", "Salvador Dalí", "Leonardo da Vinci"],
            respostaCorreta: "Pablo Picasso"
        },
        {
            pergunta: "Qual é a obra mais famosa de Salvador Dalí?",
            respostas: ["A Persistência da Memória", "A Noite Estrelada", "O Grito", "Mona Lisa"],
            respostaCorreta: "A Persistência da Memória"
        },
        {
            pergunta: "Quem foi o compositor de 'As Quatro Estações'?",
            respostas: ["Antonio Vivaldi", "Johann Sebastian Bach", "Wolfgang Amadeus Mozart", "Ludwig van Beethoven"],
            respostaCorreta: "Antonio Vivaldi"
        },
        {
            pergunta: "Qual é o estilo artístico de Frida Kahlo?",
            respostas: ["Surrealismo", "Realismo", "Expressionismo", "Cubismo"],
            respostaCorreta: "Surrealismo"
        }
    ]
}

function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // escolhe uma pergunta aleatória
        [array[i], array[j]] = [array[j], array[i]]; // troca os elementos
    }
    return array;
}

function voltarParaDisciplinas() {

    // limpa o estado do quiz no localStorage
    localStorage.removeItem('quiz');
    localStorage.removeItem('perguntaAtual');
    localStorage.removeItem('estrelinhas');
    localStorage.removeItem('disciplina'); // limpa a disciplina salva

    window.location.href = 'disciplinas.html';
}

function ocultarBotaoVoltar() {
    const botaoVoltar = document.getElementById('voltar');
    if (botaoVoltar) {
        botaoVoltar.style.display = 'none'; // oculta o botão
    }
}

let quiz;
let perguntaAtual;
let estrelinhas;

if (localStorage.getItem('quiz') && localStorage.getItem('disciplina') === disciplina) {

    // se houver um estado salvo e for a mesma disciplina, recupera do localStorage
    quiz = JSON.parse(localStorage.getItem('quiz'));
    perguntaAtual = parseInt(localStorage.getItem('perguntaAtual'));
    estrelinhas = parseInt(localStorage.getItem('estrelinhas'));
} else {

    // se não houver um estado salvo ou for uma disciplina diferente, inicia um novo quiz
    const todasQuestoes = quizzes[disciplina];  
    const questoesEmbaralhadas = embaralharArray([...todasQuestoes]);
    quiz = questoesEmbaralhadas.slice(0, 5); 
    perguntaAtual = 0;
    estrelinhas = 0;
    salvarEstado();
    localStorage.setItem('disciplina', disciplina);
}

function salvarEstado() {
    localStorage.setItem('quiz', JSON.stringify(quiz));
    localStorage.setItem('perguntaAtual', perguntaAtual);
    localStorage.setItem('estrelinhas', estrelinhas);
}

function carregarPergunta() {

    // remove as classes CSS das respostas anteriores (se houver)
    const labelsAnteriores = document.querySelectorAll('label');
    labelsAnteriores.forEach((label) => {
        label.classList.remove('resposta-correta', 'resposta-incorreta');
    });

    if (perguntaAtual < quiz.length) {
        const pergunta = quiz[perguntaAtual];
        quizContainer.innerHTML = `
            <div class="pergunta">
                <p>${pergunta.pergunta}</p>
                ${pergunta.respostas.map((resposta, i) => `
                    <label>
                        <input type="radio" name="resposta" value="${resposta}">
                        ${resposta}
                    </label>
                `).join('')}
            </div>
        `;
    } else {

        // todas as perguntas foram respondidas
        let mensagemDesempenho = "";

switch (estrelinhas) {
    case 0:
        mensagemDesempenho = "😟 Nenhuma resposta correta. Tente novamente!";
    break;
    case 1:
        mensagemDesempenho = "😞 Péssimo. Tente novamente!";
    break;
    case 2:
        mensagemDesempenho = "😐 Ok. Mas você pode melhorar!";
    break;
    case 3:
        mensagemDesempenho = "🙂 Dá pra melhorar!";
    break;
    case 4:
        mensagemDesempenho = "😀 Bom trabalho!";
    break;
    case 5:
        mensagemDesempenho = "🎉 Parabéns! Você arrasou!";
    break;
    default:
        mensagemDesempenho = "Resultado inválido.";
}
    quizContainer.innerHTML = `
    <p>Quiz concluído! Você ganhou ${estrelinhas} ⭐</p>
    <p style="font-weight: bold; color: #444;">${mensagemDesempenho}</p>
    `;

        proximaPerguntaBtn.style.display = "none";
        caixaNome.style.display = "block"; // exibe a caixa de nome
        localStorage.removeItem('quiz'); // limpa o estado salvo
        localStorage.removeItem('perguntaAtual');
        localStorage.removeItem('estrelinhas');
        localStorage.removeItem('disciplina'); 
    }
}

function proximaPergunta() {
    const respostaSelecionada = document.querySelector('input[name="resposta"]:checked');
    if (respostaSelecionada) {

        // verifica se a resposta está correta
        const respostaCorreta = quiz[perguntaAtual].respostaCorreta;
        const todasRespostas = document.querySelectorAll('input[name="resposta"]');

        // itera sobre todas as respostas para aplicar as classes CSS
        todasRespostas.forEach((resposta) => {
            const label = resposta.parentElement; // Obtém o label associado ao input
            if (resposta.value === respostaCorreta) {
                label.classList.add('resposta-correta');
            } else {
                label.classList.add('resposta-incorreta'); 
            }
        });

        if (respostaSelecionada.value === respostaCorreta) {
            estrelinhas++;
        }

        // aguarda 1 segundo antes de avançar para a próxima pergunta
        setTimeout(() => {
            perguntaAtual++;
            salvarEstado(); 
            carregarPergunta();

            if (perguntaAtual === 1) {
                ocultarBotaoVoltar();
            }
        }, 1000);
    } else {
        alert("Por favor, selecione uma resposta antes de avançar.");
    }
}

function formatarDisciplina(disciplina) {
    return disciplina.charAt(0).toUpperCase() + disciplina.slice(1);
}

function salvarNoRanking() {
    const nome = document.getElementById('nome-aluno').value.trim();
    const disciplina = new URLSearchParams(window.location.search).get('disciplina');

    if (nome) {
        const ranking = JSON.parse(localStorage.getItem('ranking')) || [];
        ranking.push({ nome, estrelinhas, disciplina: disciplinasFormatadas[disciplina] || disciplina});
        localStorage.setItem('ranking', JSON.stringify(ranking));
        window.location.href = 'ranking.html'; 
    } else {
        alert("Por favor, digite um nome válido.");
    }
}

carregarPergunta();