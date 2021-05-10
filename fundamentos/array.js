//Heterogenio

const valores = [7.7,9.6,6.3]
console.log(valores)
console.log(valores[0])
console.log(valores[5])
console.log(valores.length)

valores[3] = 10
console.log(valores[3])
console.log(valores.length)

console.log(valores.pop()) //retira ultimo valor
delete valores[0] //deleta o valor de indice 0
console.log(valores)
