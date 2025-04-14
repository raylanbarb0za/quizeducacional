function atualizarLista() {
  const ranking = JSON.parse(localStorage.getItem('ranking')) || [];
  const rankingLista = document.getElementById('ranking-lista');
  
  rankingLista.innerHTML = ranking.length > 0
    ? ranking.sort((a, b) => b.estrelinhas - a.estrelinhas)
        .map(item => `<li>${item.nome}: ${item.estrelinhas} ⭐ (${item.disciplina})</li>`)
        .join('')
    : '<li>Nenhum nome adicionado :(</li>';
}

function limparDados() {
    localStorage.removeItem('ranking');
    atualizarLista();
    alert('Dados apagados com sucesso!');
  }

document.addEventListener('DOMContentLoaded', atualizarLista);
