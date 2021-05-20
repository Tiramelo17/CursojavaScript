function Pessoa() { 
    this.idade = 0
    const self = this //armazenando o this numa constante
    setInterval(function () {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/,1000)
}

new Pessoa 