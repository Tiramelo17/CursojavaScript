const nome = 'Rebeca'
const concatenacao = 'Óla ' + nome + '!'

const template = `
Olá
${nome}! `

console.log(concatenacao,template)

const up = texto => texto.toUpperCase()

console.log(up(nome))
