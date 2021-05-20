const soma = function(x,y) {
    return x+y
}

const imprimirRsult = function (a,b, operacao = soma) {
    console.log(operacao(a,b))
}

imprimirRsult(3,4)
imprimirRsult(3,4,soma)
imprimirRsult(3,4,function(x,y){
    return x-y
})
imprimirRsult(3,4,(x,y)=> x*y)
