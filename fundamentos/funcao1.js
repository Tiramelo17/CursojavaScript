//Função sem retorno 
function imprimirSoma(a,b){
    console.log(a+b)
}

imprimirSoma(2,3)
//se for passado parametros a menos ou a mais 
//Não dara erro e sim um NaN nesse caso.
imprimirSoma(2)

//Funcão com retorno
//é um tipo de tratamento no b, pois ele ja se inicia em 0,
//assim ele assume sempre 0 e nunca dara not a number
function soma(a=0,b=0){
    return a+b
}
console.log(soma())
console.log(soma(5,8))

