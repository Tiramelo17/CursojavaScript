class Avo { 
    constructor(nome,idade){
        this.nome = nome
        this.sobrenome = 'Melo'
        this.idade = idade
    }
}

class Pai extends Avo {
    
}

const pai = new Pai('Gilson', 42)
console.log(pai.sobrenome)
console.log(pai.idade)
