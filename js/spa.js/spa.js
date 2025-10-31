console.log("spa.js carregado!");

// Exemplo simples de SPA
function carregarPagina(url) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.querySelector('main').innerHTML = html;
        })
        .catch(err => console.error("Erro ao carregar página:", err));
}

// Exemplo de links SPA
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        carregarPagina(href);
    });
});