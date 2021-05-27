const obj = { a: 1,b:2,c:3, soma() {
    return a+b+c
}}

console.log(JSON.stringify(obj))
// a função é "excluida" porque é uma forma de transmitir dados

// console.log(JSON.parse("{a:1, b:2, c:3}"))
// console.log(JSON.parse("{ 'a' :1, 'b' :2, 'c':3}"))
console.log(JSON.parse('{ "a" :1, "b" :2, "c":3}'))