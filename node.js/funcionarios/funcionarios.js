const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require ('axios')
const { response } = require('express')
const filter = require('jade/lib/filters')

const menorSalario = (funcionario1,funcionario2) => {
return funcionario1.salario > funcionario2.salario ?  funcionario1  : funcionario2
}

const chineses = func => func.pais === 'China'

const mulheres = func => func.genero === 'F'

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario))
    
})

