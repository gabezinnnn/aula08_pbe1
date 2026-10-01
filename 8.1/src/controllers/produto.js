const produtos = require("../../dados/produtos.json")

const criar = (req, res) => {
    const dados = req.body
    dados.id = Number(produtos.length) + 1
    produtos.push(dados)

    res.send("Cadastrado com sucesso.")
}
const listar = (req, res) => {
    res.json(produtos)
}
const alterar = (req, res) => {
    const id = req.params.id
    const dados = req.body

    const chaves = Object.keys(dados)
    const produto = produtos.find(p => p.id == id)
    
    chaves.forEach(chave => {
        produto[chave] = dados[chave]
    })

    res.send("Atualizado com sucesso.")
}
const excluir = (req, res) => {
    const id= req.params.id

    produtos.forEach((produto, i) => {
        if (produto.id == id){
            produtos.splice(i, 1)
            res.send("Deletado com sucesso")
        }
    })
}

module.exports = {
    criar, listar, alterar, excluir
}