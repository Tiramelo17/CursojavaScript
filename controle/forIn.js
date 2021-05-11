const notas = [10,8.5,2.5,9.6,4,5,6]
for(i in notas){ 
    console.log(`Nota: ${notas[i]}`)
}

const pessoa = { 
    nome: 'Gabriel',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
