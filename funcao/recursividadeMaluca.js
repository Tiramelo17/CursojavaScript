
let arrayCarros = ['Honda Civic', 'Audi A3', 'Corolla', 'Palio', 'touro']

function recurArray(param) {
    if(param.length !== 0){
        console.log("Array: "+param)
        console.log("Elemento retirado: "+param[0])
        param.shift()
        if(param.length >= 1){
            recurArray(param)
        }
    }
    return 'Array trabalhado com Sucesso!'
}

console.log(recurArray(arrayCarros))