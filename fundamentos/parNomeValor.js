//contexto lexico 1, á que nivel esse valor foi definido  
//exemplo, local, global..
const saudacao = 'Opa' 

function exec() {
    //contexto lexico 2, dentro da função
    const saudacao = 'falaaa'
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor 
const cliente = {
    nome : 'pedro',
    idade: 32,
    peso : 90,
    endereco: { 
        logradouro : 'Rua dos bobos',
        numero : 0 
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)