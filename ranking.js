const rankingLista = document.getElementById('ranking-lista');
const ranking = JSON.parse(localStorage.getItem('ranking')) || [];

ranking.sort((a, b) => b.estrelinhas - a.estrelinhas);

// Exibe os nomes no ranking
ranking.forEach((item) => {
    if (item.nome) {
        rankingLista.innerHTML += `
            <li>${item.nome}: ${item.estrelinhas} ⭐ (${item.disciplina})</li>
        `;   
    }
});

// Se o ranking estiver vazio
if (ranking.length === 0) {
    rankingLista.innerHTML = `<li>Nenhum nome adicionado :(</li>`;
}

function limparDados() {
    if (confirm('Tem certeza que deseja limpar todos os dados do ranking?')) {
        localStorage.removeItem('ranking');
        rankingLista.innerHTML = `<li>Nenhum nome adicionado :(</li>`;
        alert('Ranking limpo com sucesso!');
    }
}
