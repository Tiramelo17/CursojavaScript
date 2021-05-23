function Pessoa(nome) {
    this.nome = nome
    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const pes1 = new Pessoa('Gabriel')
pes1.falar()
