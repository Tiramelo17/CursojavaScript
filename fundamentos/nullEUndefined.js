let valor // não inicializada Undefined
console.log(valor)

valor = null

console.log(valor) //ausência de valor null

const produto = {}
console.log(produto.preco)
console.log(produto)
produto.preco = 3.50
console.log(produto.preco)
produto.preco = undefined //evitar atribuir undefined
console.log(!!produto.preco)
//delete produto.preco

produto.preco = null // melhor pratica atribuir null para "zerar"
console.log(!!produto.preco)
console.log(produto)
