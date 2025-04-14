const rankingLista = document.getElementById('ranking-lista');
const ranking = JSON.parse(localStorage.getItem('ranking')) || [];

        ranking.sort((a, b) => b.estrelinhas - a.estrelinhas);

        ranking.forEach((item) => {
            if (item.nome) {
                rankingLista.innerHTML += `
                    <li>${item.nome}: ${item.estrelinhas} ⭐ (${item.disciplina})</li>
                `;   
            }
        });

function limparDados() {
    localStorage.removeItem('ranking'); // Remove do localStorage
    ranking.length = 0; // Limpa o array
    atualizarRanking(); // Atualiza a exibição
    alert('Todos os dados do ranking foram removidos!');
}
        if (ranking.length === 0) {
            rankingLista.innerHTML = `<li>Nenhum nome adicionado :(</li>`;
        }
