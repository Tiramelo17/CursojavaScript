const carrinho = [
    '{"nome": "Boarracha","preco": 3.45}',
    '{"nome": "Caderno","preco": 13.90}',
    '{"nome": "Kit de Lapis","preco": 41.22}',
    '{"nome": "caneta","preco": 7.50}'
]

// retornar array apenas com os preços 
let carP = carrinho.map(e=> JSON.parse(e))
console.log(carP)
carP = carP.map(e=> e.preco)
console.log(carP)
