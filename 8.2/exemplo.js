const clientes = require("./dados.json")

//PATCH ou PUT 
//localhost:3000/clientes/:id
//dados via BODY

// const id = req.params.id
const id = 1

// const dados = req.body
const dados = {
    "endereco": "Nova Rua, 789",
    "cidade": "Pedreira"
}

const chaves = Object.keys(dados)

const cliente = clientes.find(c => c.id == id)

chaves.forEach(chave => [
    cliente[chave] = dados[chave]
])

console.log(clientes)