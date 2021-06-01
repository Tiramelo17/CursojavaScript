// O array em js na verdade é um objeto que organiza 
// seus dados a partir de um idice 

let aprovados = new Array('Bia','Carlos','Ana')
console.log(aprovados)

aprovados = ['Bia','Carlos','Ana']
console.log(aprovados[0])
console.log(aprovados[3]) // se n existir dará undefined 
aprovados[3] = 'Melo'
console.log(aprovados[3])
aprovados.push('Kaylane')
console.log(aprovados.length)

aprovados.sort() //ordena o array, altera o array original
console.log(aprovados)

delete aprovados[1]
console.log(aprovados)

aprovados.splice(2,1) // exclui a partir do indice 1 até o 1 nesse caso
aprovados.splice(1,0,'Jubuleu') // adiciona 
console.log(aprovados)