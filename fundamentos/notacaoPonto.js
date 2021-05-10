console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'bola'
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome 
    this.exec = function() {
        console.log(this.nome + ', seu teste está sendo realizado')
    }
}
const obj2 = new Obj('Gabriel')
const obj3 = new Obj('Leticia')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()