// Função para atualizar a lista na tela
function atualizarLista() {
  const ranking = JSON.parse(localStorage.getItem('ranking')) || [];
  const rankingLista = document.getElementById('ranking-lista');
  
  rankingLista.innerHTML = ranking.length > 0
    ? ranking.sort((a, b) => b.estrelinhas - a.estrelinhas)
        .map(item => `<li>${item.nome}: ${item.estrelinhas} ⭐ (${item.disciplina})</li>`)
        .join('')
    : '<li>Nenhum nome adicionado :(</li>';
}

// Função para limpar os dados (chamada pelo onclick)
function limparDados() {
  if (confirm('Tem certeza que deseja apagar TODOS os dados do ranking?')) {
    localStorage.removeItem('ranking');
    atualizarLista();
    alert('Dados apagados com sucesso!');
  }
}

// Carrega a lista quando a página abre
document.addEventListener('DOMContentLoaded', atualizarLista);
