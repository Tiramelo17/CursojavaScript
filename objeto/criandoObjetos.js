// usando forma literal 
const obj1 = {}
console.log(obj1)

// Object em js
console.log(typeof Object, typeof new Object)
const obj2 = new Object

// Função construtoras 
function produto(nome, preco,desconto) {
    // unico atributo prublico
    this.nome = nome
    this.getPrecoComDesconto = () => 
    {return preco * (1-desconto)}
}

const p1 = new produto('Caneta', 5 ,0.1)
const p2 = new produto('Notebook', 5600,0.2)

console.log(p1.getPrecoComDesconto())
console.log(p2.getPrecoComDesconto())

// Função Factory
function criarFuncionario(nome,salarioBase, faltas) {
    return { 
        nome,
        salarioBase,
        faltas,
        getSalario : () => {
            return salarioBase
        }
    }    
}

const func = criarFuncionario('Gabriel',2500,0)
console.log(func.nome)
console.log(func.getSalario())
console.log(typeof func)

//object.create

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função famosa que retorna objeto 
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)