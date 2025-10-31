console.log("formvalidation.js carregado!");

// Exemplo de validação simples de formulário
function validarFormulario() {
    const nome = document.querySelector('#nome').value;
    if(nome.trim() === '') {
        alert("Por favor, preencha o nome.");
        return false;
    }
    return true;
}

// Se houver formulário na página, podemos adicionar listener
const form = document.querySelector('form');
if(form) {
    form.addEventListener('submit', function(e) {
        if(!validarFormulario()) e.preventDefault();
    });
}