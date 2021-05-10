const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))

//onde na string esta o caractere ou valor "r" por exemplo
console.log(escola.indexOf('r'))

//vaido indice 0 até o indice 3
console.log(escola.substring(0,5))

//junta strings 
console.log('Escola '.concat(escola))
//subistitui o valor que está na terceira posição para o valor "e"
console.log(escola.replace(3,'e'))

//Transforma as strings em um array
console.log('Ana,Maria,Pedro'.split(','))