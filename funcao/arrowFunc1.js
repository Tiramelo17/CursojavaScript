//Objetivo de ser reduzida, alem de também amarrar 
// o this

let dobro0 = function (a) {
    return a*2
}

dobro1 = (a) => {
    return a*2
} //sempre armazenar em uma variavel ou constante

dobro2 = a => 2*a // retorno implícito
console.log(dobro0(5));
console.log(dobro1(5));
console.log(dobro2(5));

let ola = function(){
    return 'ola'
}

// reescrevendo ela em arrow
ola1 = () => 'Ola'

console.log(ola())
console.log(ola1())