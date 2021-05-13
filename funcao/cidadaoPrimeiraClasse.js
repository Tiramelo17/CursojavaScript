//Função em Js é first-class 
// pode passar função como variável, ela trata como dado

// criar de forma literal 
function fun1(parametro) {
    // o retorno depende do que você passar como return    
    // bloco é obrigatorio "{}"
}

// Armazenar em uma variável 
const fun2 = function() {
    //função anonima, que é referenciada 
    //pelo nome da constante.
}

// Armazenar em um array
const array = [function (a,b){return a+b},fun1,fun2]
//não é muito comum declarar já direto ali como foi feito na posição 0

console.log(array[0](5,6))

//Armazenar em um atributo de obj
const obj = {}
obj.falar = function () {return 'opa'}
obj.nome = 'jubileu'
console.log(obj.nome)
console.log(obj.falar())

// Passar função como parametro
function run (fun) {
    fun()
    // isso é muito poderoso quando usado corretamente 
}
run(function() {console.log('Executar a função')})

// Uma função pode retornar/ conter uma função
function soma(a,b) {
    return function(c){
        console.log(a+b+c)
    }    
}
soma(2,3)(4)
// ou 
const firstSoma = soma(2,3)
firstSoma(4)
