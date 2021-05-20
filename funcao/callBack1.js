const fabricantes = ["Mercedes","Audi","BMW"]

function  imprimir(nome,indice) {
    console.log(`${indice+1}. ${nome}`)
}

fabricantes.forEach(imprimir) //como se fossse uma stream em java

// callBack vc passa um função que acontece quando um novo evento acontece
// nesse caso a cada elemento do array ele acontece

