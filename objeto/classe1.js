class Lancamento { 
    constructor(nome = 'Genérico', valor = 0){
    this.nome = nome
    this.valor = valor 
    }
}

class CicloFinanceiro {
    constructor(mes,ano){
        this.mes = mes 
        this.ano = ano
        this.lancamentos = []
    }

    addlancamentos(...lancamentosR){
        lancamentosR.forEach(l => this.lancamentos.push(l))
    }

    sumario(){
        let valorConsolidado = 0 
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario',45000)
const contaDeluz = new Lancamento('Conta de luz', -350)
const contas = new CicloFinanceiro(5,2021)
contas.addlancamentos(salario)
contas.addlancamentos(contaDeluz)
console.log(contas.sumario())