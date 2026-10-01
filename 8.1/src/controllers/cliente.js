const cliente = require("../../dados/cliente.json")

const criar = (req, res) => {
    const dados = req.body
    dados.id = Number(cliente.length) + 1 // Auto Increment
    cliente.push(dados)
    res.json("Cadastrado com sucesso")
}
const listar = (req, res) => {
    res.json(cliente)
}
const alterar = (req, res) => {
    const id = req.params.id
    const dados = req.body

    const chaves = Object.keys(dados)

    const clientinho = cliente.find(c => c.id == id)

    chaves.forEach(chave => {
        clientinho[chave] = dados[chave]
    })

    res.send("Alterado com sucesso.")
}
const excluir = (req, res) => {
    const id = req.params.id

    cliente.forEach((c, i) => {
        if(c.id == id){
            cliente.splice(i, 1)
            res.send("Deletado com sucesso.")
        }
    })
}

module.exports = {
    criar, listar, alterar, excluir
}