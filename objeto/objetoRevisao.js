const produto = new Object
produto.nome = 'Cadeira'
produto['Marca do Produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto['Marca do Produto']
console.log(produto)

const carro = {
    modelo : 'A4',
    valor: 89000, 
    proprietario : {
        nome:'Gabriel',
        idade: 19
    },
    condutores: [{
        nome: 'Gilson',
        idade: 42
    },
    {
        nome: 'Fabiane',
        idade: 45
    }]
}

console.log(carro)
delete carro.condutores
console.log(carro)
console.log(carro.valor)
