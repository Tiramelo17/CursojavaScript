const pai = {nome: 'Pedro', corCabelo: 'Preto'}
const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)
console.log(filha1.nome)

const filha2 = Object.create(pai, {
    nome: {value : 'Bia', writable: false,enumerable: true},
    altura: {value: 1.67},
    idade: {value: 17}
})

console.log(filha2.altura)
console.log(filha2.idade)
console.log(filha2.nome)

for( let key in filha2){
    filha2.hasOwnProperty(key)? //retorna true quando a chave é do proprio objeto 
        console.log(key) : console.log(`por erança: ${key}`)
}
