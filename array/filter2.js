Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i; i<this.length;i++){
       if(callback(this[i],i,this)){
           newArray.push(this[i])
       } 
    }
    return newArray
}

const notas = [7.5,8,6.5,2.5,5.6,7.9]

let aprovados = notas.filter2()
console.log(aprovados)