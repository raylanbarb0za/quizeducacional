const rankingLista = document.getElementById('ranking-lista');
const ranking = JSON.parse(localStorage.getItem('ranking')) || [];

// Ordena o ranking por estrelinhas (do maior para o menor)
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
