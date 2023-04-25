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

function somar(a){
    if(a === undefined || a === null){
        console.log('Erro '+ a)
        throw BaseException
    } 
    else{
    return a + 12108003;
    }
}

console.log('Teste: '+somar(5))

function retornarMenor(val1,val2){
    if(val1<val2){
        return val1
    } if(val2<val1){
        return val2
    } else {
        return undefined
    }
}

console.log('Qual menor valor entre: '+ retornarMenor(12,12))


var x = 5 + "t"
console.log(x)