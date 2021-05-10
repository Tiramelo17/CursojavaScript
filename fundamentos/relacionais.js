console.log('01','1' == 1) //se preocupa com o valor e não o tipo
console.log('02', '1' === 1) // se preocupa tambem com o tipo
console.log('03', '3' != 3)
console.log('03', '3' !== 3)

const d1 = new Date(0)
const d2 = new Date(0)
//nesses dois casos não faz diferença, pois comparam endereços de memoria e não valores
console.log('04',d1===d2) 
console.log('05', d1 == d2)
// Nesse caso faz diferença caso os valores tivesem diferenças 
console.log('06', d1.getTime == d2.getTime)
console.log('07', d1.getTime === d2.getTime)

console.log('08', undefined == null)
console.log('09', undefined === null)