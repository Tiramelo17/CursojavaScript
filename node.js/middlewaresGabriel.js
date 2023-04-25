const fs = require('fs')
const caminho = __dirname + '/arquivo.json'


const leituraDosDados = (ctx,next) => {
    console.log('Lendo os dados!')
    ctx.json = require('./arquivo.json')
    next()
}

const modificandoDados = (ctx,next) => {
    console.log('Modificando os dados!')
    ctx.json.db.user = 'GabrielMelo'
    ctx.json.db.senha = 'Ga8209m@'
    next()
}

const gravarDados = (ctx,next) => {
    console.log('Gravando os dados!')
    fs.writeFile(__dirname + '/arquivoBancoGabriel.json',JSON.stringify(ctx.json),err => {
        console.log(err || 'Arquivo Salvo!')
    }) 
    console.log('Ultimo passo realizado')
}

const exec = (ctx, ...funcoes) => {
       const passo = indice => {
        funcoes && indice < funcoes.length
            && funcoes[indice](ctx, () => passo(indice + 1))

    }
    passo(0)
}


const ctx = {}

exec(ctx, leituraDosDados,modificandoDados,gravarDados)


