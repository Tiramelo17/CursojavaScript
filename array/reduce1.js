// como se fosse um acumulador 
const alunos = [
    {nome: "joão", nota: 7.3, bolsista: false},
    {nome: "melo", nota: 8.3, bolsista: true},
    {nome: "Anna", nota: 6.3, bolsista: false}
]

const resultado = alunos.map(a=> a.nota).reduce(function(acumulador,atual){
    console.log(acumulador,atual)
    return acumulador+atual
})

console.log(alunos.map(a=> a.nota))
console.log(resultado)