// Recurso introduzido do ES2015

    const pessoa  = {
    nome : 'Ana',
    idade : 17,
    peso : 57,
    endereco : {
        logradouro : 'Julieta jardim' , 
        numero : 35
    }
}

//Tire os atributos nome e idade do Objeto pessoa
const {nome,idade} = pessoa 
console.log(nome, idade)

const { nome : n, idade: i} = pessoa
console.log(n,i)

//atributos que não estão lá
const { sobrenome, bemHumorada = true} = pessoa 

const { endereco: { logradouro, numero}} = pessoa 
console.log(logradouro,numero)