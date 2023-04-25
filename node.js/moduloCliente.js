const moduloA = require('./moduloA.js')
const moduloB = require('./moduloB.js')

console.log(moduloA)
console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloB)
moduloB.falar()

const sabrina = 'Oi Gordinhaaaaaa!'


const _http = require('http')
_http.createServer((req,res) => {
    res.write('Boa noite!\n')
    res.write(sabrina + '\n')
    res.write('Cê é linda d+ trem')
    res.end()

}).listen(8080)