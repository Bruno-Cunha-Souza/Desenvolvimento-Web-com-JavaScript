const subtrair = document.querySelector("#subtrair")
const somar = document.querySelector("#somar")
const brac = document.querySelector("#brac")

const controle = document.querySelectorAll(".controle-ajuste")

controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent)
    })
})

function manipulaDados(operacao) {
    if (operacao == "-") {
        brac.value = parseInt(brac.value) - 1
    } else{
        brac.value = parseInt(brac.value) + 1
    }
}