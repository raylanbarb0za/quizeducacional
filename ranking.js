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

        function verificarAdmin() {
            const senhaCorreta = '1234';
            const senhaDigitada = document.getElementById('senha-admin').value;
            const botaoLimpar = document.getElementById('limpar-dados');

            if (senhaDigitada === senhaCorreta) {
                botaoLimpar.style.display = 'block';
                document.getElementById('admin-login').style.display = 'none';
            } else {
                alert('Senha incorreta!');
            }
        }

        function limparDados() {
            localStorage.removeItem('ranking');
            location.reload();
        }