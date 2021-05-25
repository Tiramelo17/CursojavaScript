// principio da OO onde você reusa codigo 
// uma classe herda tudo de uma classe pai 

const ferrari = { 
    modelo: 'F40',
    velMax: 340
}

const volvo = { 
    modelo: 'v40',
    velMax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)

function meuObj() {
    console.log(typeof Object , typeof meuObj)
    console.log(Object.prototype, meuObj.prototype)
}

meuObj()
