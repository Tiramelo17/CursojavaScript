// Object.preventExtensions 
// não permite q o objeto seja extendido, ele não vai receber novos atributos... mas podera ser apagados 

const produto = Object.preventExtensions({
    nome : 'Qualquer',preco:1.99, tag: 'Promoção'
})

console.log('Extensível: ', Object.isExtensible(produto))
console.log(produto)
produto.nome ='Borracha'
console.log(produto)
produto.descricao ='Borracha branca escolar'
delete produto.tag
console.log(produto)

// Object.seal de selar 

const pessoa = { nome: 'Juliana', idade: 21}
Object.seal(pessoa) //n pode excluir nem adcionar novos atributos 
// mas podemos alterar os já existentes 

console.log('Esta selado: ', Object.isSealed(pessoa))

pessoa.sobrenome ='Melo'
console.log(pessoa)
delete pessoa.nome
pessoa.idade = 20
console.log(pessoa)