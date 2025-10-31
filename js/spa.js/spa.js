const templates = {
  home: `
    <section class="hero">
      <div class="container">
        <h2>Bem-vindo à Vida Verde</h2>
        <p class="lead">Plantando hoje, respirando amanhã.</p>
      </div>
    </section>
  `,
  projetos: `
    <section class="section">
      <div class="container">
        <h2>Projetos Ativos</h2>
        <div class="grid">
          <div class="card project">Projeto 1</div>
          <div class="card project">Projeto 2</div>
          <div class="card project">Projeto 3</div>
        </div>
      </div>
    </section>
  `,
  cadastro: `
    <section class="section">
      <div class="container">
        <h2>Cadastro de Voluntário</h2>
        <p>Formulário de cadastro aqui...</p>
      </div>
    </section>
  `,
  contato: `
    <section class="section">
      <div class="container">
        <h2>Contato</h2>
        <p>Formulário de contato aqui...</p>
      </div>
    </section>
  `
};

// Função para carregar template
function loadPage(page) {
  const main = document.querySelector('main');
  main.innerHTML = templates[page] || '<p>Página não encontrada.</p>';

  // Atualiza classe ativa do menu
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if(link.dataset.page === page) link.classList.add('active');
  });
}

// Eventos de clique no menu
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const page = link.dataset.page;
    loadPage(page);
    history.pushState({ page }, '', link.getAttribute('href'));
  });
});

// Carrega página inicial
let initialPage = window.location.pathname.includes('projeto.html') ? 'projetos' :
                  window.location.pathname.includes('cadastro.html') ? 'cadastro' :
                  window.location.pathname.includes('contato.html') ? 'contato' : 'home';
loadPage(initialPage);

// Suporte ao botão voltar/avançar
window.addEventListener('popstate', e => {
  const page = e.state?.page || 'home';
  loadPage(page);
});