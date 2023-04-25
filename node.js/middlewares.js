// middleaware pattern (chain of responsibility)

/*
 o next é justamente uma função que no caso sera o proximo passo do fluxo 
 assim desacoplando todas a cadeia e deixando assim as funções livres para serem usadas novamente
 em outras partes do projeto 
*/
 const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx,next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = (ctx,next) => {
    ctx.valor3 = 'mid3'
}
// esse "..." quer dizer um conjunto de coisas, no caso funções e transforma em um array do tipo passado 
const exec = (ctx, ...middlewares) => {
    console.log('Array de funçoes passadas: ')
    console.log(middlewares)
    const execPasso = indice => {
        console.log('Indice atual: '+ indice)
        middlewares && indice < middlewares.length &&
            middlewares[indice](ctx, () => execPasso(indice + 1))
    }
    // Iniciando pelo passo 0 
    execPasso(0)
}

 const ctx = {}

 exec(ctx,passo2,passo1,passo3)
 console.log(ctx)