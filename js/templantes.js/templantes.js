cconsole.log("templantes.js carregado!");

// Aqui você pode criar funções para templates ou HTML dinâmico
function criarTemplate(titulo, descricao) {
    const container = document.createElement('div');
    container.className = 'template';
    container.innerHTML = `
        <h3>${titulo}</h3>
        <p>${descricao}</p>
    `;
    return container;
}