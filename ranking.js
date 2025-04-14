const rankingLista = document.getElementById('ranking-lista');
const ranking = JSON.parse(localStorage.getItem('ranking')) || [];

rankingLista.innerHTML = ranking.length
  ? ranking.sort((a,b) => b.estrelinhas - a.estrelinhas)
      .map(item => `<li>${item.nome}: ${item.estrelinhas} ⭐ (${item.disciplina})</li>`)
      .join('')
  : '<li>Nenhum nome adicionado :(</li>';

function limparDados() {
  localStorage.removeItem('ranking');
  rankingLista.innerHTML = '<li>Nenhum nome adicionado :(</li>';
  alert('Ranking limpo com sucesso!');
}
