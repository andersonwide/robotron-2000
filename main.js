const controle = document.querySelectorAll("[data-controle]")
const estatistica = document.querySelectorAll("[data-estatistica]")

const pecas = {
    "braco": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleo":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "perna":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguete":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode,evento.target.dataset.peca)
        // atualizaEstatistica(evento.target.dataset.peca)
    })
})

function manipulaDados(operacao, controle, estatistica) {
    const peca = controle.querySelector("[data-contador]")

    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1;
        subtraiEstatistica(estatistica);
    } else {
        peca.value = parseInt(peca.value) + 1;
        somaEstatistica(estatistica);
    }
}

function somaEstatistica(peca) {
    estatistica.forEach( (elemento ) => {
        console.log(elemento)
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        
    })
}
function subtraiEstatistica(peca) {
    estatistica.forEach( (elemento ) => {
        console.log(elemento)
        elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]
        
    })
}