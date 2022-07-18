var result = document.getElementById('resultado')

function inserir(num) {
    var numero = result.innerHTML
    result.innerHTML = numero + num
}
function calcular() {
    result.innerHTML = eval(result.innerHTML)
}
function limpar() {
    result.innerHTML = ''
}