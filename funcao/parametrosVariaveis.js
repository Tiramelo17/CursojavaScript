function soma() {
    let soma = 0
    for( i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(5,6))
console.log(soma(5))
console.log(soma(12,35,2,1,4))
