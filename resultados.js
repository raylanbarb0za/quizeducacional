const resultadoTexto = document.getElementById('resultado-texto');
const resultadosContainer = document.getElementById('resultados-container');
const estrelinhas = localStorage.getItem('estrelinhas');
const resultados = JSON.parse(localStorage.getItem('resultados'));

resultadoTexto.innerText = `Você ganhou ${estrelinhas} estrelinhas!`;

resultados.forEach((item, index) => {
    resultadosContainer.innerHTML += `
        <div class="resultado-item">
            <p><strong>Pergunta ${index + 1}:</strong> ${item.pergunta}</p>
            <p><strong>Sua resposta:</strong> ${item.respostaUsuario || "Não respondida"} <span class="${item.acertou ? 'certo' : 'errado'}">(${item.acertou ? 'Certo' : 'Errado'})</span></p>
            <p><strong>Resposta correta:</strong> ${item.respostaCorreta}</p>
        </div>
    `;
});

function salvarResultado() {
    const nomeAluno = document.getElementById('nome-aluno').value;
    const ranking = JSON.parse(localStorage.getItem('ranking')) || [];
    ranking.push({ nome: nomeAluno, estrelinhas: parseInt(estrelinhas) });
    localStorage.setItem('ranking', JSON.stringify(ranking));
    window.location.href = 'ranking.html';
}