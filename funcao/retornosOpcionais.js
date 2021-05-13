// A função retorna da maneira que você quiser
// ela não obrigatoria um return depois de ja ter usado um
function areaRetangulos(largura,altura) {
    const result = largura*altura
    if(result > 20){
        console.log(result)
    }
    else {
    return result
    }
}

console.log(areaRetangulos(2,4))
console.log(areaRetangulos(5,6))
areaRetangulos(15,2,5,6,4,8) // de todo jeito vai pegar apenas os dois primeiros valores e fara os calculos