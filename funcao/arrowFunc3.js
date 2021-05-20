let comparaComThis = function (param) {
    console.log(this == param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)


let comparaComThisArrow = param => 
console.log(this == param)

comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj) //A arrow function é mais forte q a bind
comparaComThisArrow(obj)


