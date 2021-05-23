// contexto onde as coisas foram declaradas dentro de js 
const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}
minhaFuncao()

function exec() {
    const valor = 'Local'
    minhaFuncao() //a preferencia da busca é o local onde foi definida anteriormente
}
exec()