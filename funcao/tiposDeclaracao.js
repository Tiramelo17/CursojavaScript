console.log(soma(3,4)) // nessa linha as funções do tipo function declaration já foram interpretadas
// console.log(sub(5,4))  agora uma fuction expresison ira dar erro
// function declaration
function soma(x,y) {
    return x+y
}

// function expression
const sub = function(x,y){
    return x-y
}

console.log(sub(5,3))

