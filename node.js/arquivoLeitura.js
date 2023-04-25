const fs = require('fs')

// __dirname ela se refere ao arquivo local no caso da pasta NODE.JS, representa o diretório atual 
const caminho = __dirname + '/arquivo.json'

// sincrono, ou seja, ele vai esperar o retorno 
const conteudo = fs.readFileSync(caminho,'utf-8')
console.log(conteudo)

//assincrono...., ele não espera o retorno para seguir o resto dos comandos 

fs.readFile(caminho,'utf-8',(err,conteudo)=> {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})


fs.readdir(__dirname,(err,arquivos)=>{
    console.log('Conteudo da pasta...')
    console.log(arquivos)
}) 

//forma mais facil pois ja instancia um objeto e o passa para a constante, temos que passar a extensão do arquivo pra não dar xabu 
const config = require('./arquivo.json')
console.log('conteudo que eu quero: ')
config.db.host = 'melo'
console.log(config.db)
