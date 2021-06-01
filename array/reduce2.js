const alunos = [
    {nome: "joão", nota: 7.3, bolsista: false},
    {nome: "melo", nota: 8.3, bolsista: true},
    {nome: "Anna", nota: 6.3, bolsista: false},
    {nome: "Maria", nota: 8.7, bolsista: true}
]

//dafio retornando apenas verdadeiro ou falso se todos são bolsistas 
let a = alunos.map(bol=> bol.bolsista).reduce(function(acum,atual){
        return acum && atual === true ? true: false   
})

console.log(a)
// algum aluno é bolsista ? 

a = alunos.map(bol=> bol.bolsista).reduce(function(acum,atual){
    return acum || atual === true ? true : false
})

console.log(a)