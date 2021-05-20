const pessoa = {
    saudacao : 'Bom Dia!',
    falar (){console.log(this.saudacao)}
}

pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre paradigmas, por conta da palavra this

// com isso a função bind amarra o objeto para a palavra this
const falarDePessoa = pessoa.falar.bind(pessoa) // apenas o resultado
falarDePessoa()
