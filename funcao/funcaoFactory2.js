function fabrica(nom , prec) {
    desconto = 0.1
    prec =  isNaN(prec) ? null : prec
    return { 
        nome : nom,
        preco: prec * (1-desconto)
    }
}

console.log(fabrica('ryzen 5 3600x','jubileu'))

