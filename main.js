const braco = document.querySelector('#braco');
console.log(braco);

const controle = document.querySelectorAll('.controle-ajuste');
console.log(controle);

controle.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.textContent);
    });
})

function manipulaDados(operação){
    if (operação ==='-'){
        braco.value = parseInt(braco.value) - 1;
    } else {
        braco.value = parseInt(braco.value) + 1;
    }

}