console.log('Instania Unica')
const contadorUnicoA = require('./instanciaUnica')

console.log(contadorUnicoA.valor)

const contadorUnicoB = require('./instanciaUnica')

console.log(contadorUnicoB.valor)

console.log('Contado de nova instancia')

const contadorNovoA = require('./instanciaNova')()

console.log(contadorNovoA.valor)

const contadorNovoB = require('./instanciaNova')()

console.log(contadorNovoB.valor)

console.log('Instania Unica')
contadorUnicoA.inc()
console.log(contadorUnicoA.valor)
console.log(contadorUnicoB.valor)
contadorUnicoB.inc()

console.log(contadorUnicoA.valor)
console.log(contadorUnicoB.valor)

console.log('Contado de nova instancia')
contadorNovoA.inc()
console.log(contadorNovoA.valor)
console.log(contadorNovoB.valor)
contadorNovoB.inc()

console.log(contadorNovoA.valor)
console.log(contadorNovoB.valor)


