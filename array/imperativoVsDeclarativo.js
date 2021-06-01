const alunos = [
    {nome: "Gabriel", nota:8.7},
    {nome: "Maria", nota:5.8}
]

//imperativo
let total1 = 0
for(let i=0;i<alunos.length;i++){
    total1+=alunos[i].nota
}
console.log(total1/alunos.length)

//Declarativo

const getNota = aluno=> aluno.nota
const soma = (total,atual)=> total+atual

const total2 = alunos.map(getNota).reduce(soma)/alunos.length
console.log(total2)