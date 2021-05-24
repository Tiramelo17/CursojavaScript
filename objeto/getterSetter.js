const sequencia = {
    _valor: 1, //convenção, forma de indicar que ela é privada, o _ não a torna privada
    get valor(){return this._valor++},
    set valor(valor) {
        if(valor> this.valor){
            this._valor = valor
        }
    }

}

console.log(sequencia.valor,sequencia.valor)
sequencia.valor = 10
console.log(sequencia.valor,sequencia.valor)
