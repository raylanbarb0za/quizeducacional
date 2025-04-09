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

        if (ranking.length === 0) {
            rankingLista.innerHTML = `<li>Nenhum nome adicionado :(</li>`;
        }
