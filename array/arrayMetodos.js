const pilotos = ['Vettel','Alonso', 'Raikkonen', 'Massa']

pilotos.pop() // massa sai do array, retira o ultimo
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona na primeira posição
console.log(pilotos)

pilotos.splice(1,0,'Massa')
pilotos.splice(3,1)
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) // ele retorna outro array, tradução pedaço do array
console.log(algunsPilotos)
const algunsPilotos2 = pilotos.slice(1,4) // ele retorna outro array, tradução pedaço do array
console.log(algunsPilotos2)