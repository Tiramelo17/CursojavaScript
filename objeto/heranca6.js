function aula(nome,videoID) {
    this.nomo = nome
    this.videoID = videoID
}

const aula1 = new aula('Bem Vindo', 123)
console.log(aula1)

// simulando o new 

function novo(f,...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj,params) 
    return obj
}

const aula3 = novo(aula,"Bem Vindo",1234)
console.log(aula3)