const imprimirResultado = function(nota){
    switch (Math.floor(nota)) {
        case 10:  //O proprio Js sabe que as duas comparações fazem parte do mesmo bloco
        case 9:
            console.log('Quadro de Honra') 
            break
        case 8:    
        case 7:    
            console.log('Aluno Aprovado')
            break
        case 6:
        case 5: 
            console.log('recuperação')
            break
        case 4:
        case 3: 
        case 2:
        case 1:
        case 0:
            console.log('Reprovado') 
            break               
        default:
            console.log('Nota inválida')
            break;
    }
}

imprimirResultado(3)