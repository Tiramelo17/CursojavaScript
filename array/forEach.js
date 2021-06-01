 const aprovados = ['Gabriel','Guilherme','Teixeira']

 aprovados.forEach(function (nome,indice) {
     console.log(`${indice + 1}) ${nome}`)
 })
 console.log('')
 aprovados.forEach(nome => console.log(nome))
 
 console.log('')
 const exibirAprovados = aprovado => console.log(aprovado)

 aprovados.forEach(exibirAprovados)