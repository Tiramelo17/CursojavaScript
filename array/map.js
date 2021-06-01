// a ideia é percorrer um array e tranforma-lo de alguma forma 
// e colocando esse resultado em outro array sem modificar o array original

const nums = [1,2,3,4,5]

//for com propósito 

let result = nums.map(function(e) { 
    return e*2
})

let result2 = nums.map( f => {
    return f*2
})

console.log(result)
console.log(result2)

// varios maps utilizados

const lamb1 = e=> e+10
const lamb2 = e=> e*5
const lamb3 = e=> `R$ ${parseFloat(e).toFixed(2)}`

let result3 = nums.map(lamb1).map(lamb2).map(lamb3)
console.log(result3)

