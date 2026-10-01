const itens = require("../../dados/itens.json")

function subtotal() {
    itens.forEach(item => {
        item.total = item.preco * item.quantidade
    })
}

const criar = (req, res) => {
    const dados = req.body
    dados.id = Number(itens.length) + 1
    itens.push(dados)

    res.send("Cadastrado com sucesso.")
}
const listar = (req, res) => {
    subtotal()
    res.json(itens)
}
const alterar = (req, res) => {
    const id = req.params.id
    const dados = req.body
    const chaves = Object.keys(dados)
    const item = itens.find(i => i.id == id)

    chaves.forEach(chave => {
        item[chave] = dados[chave]
    })

    res.json("Atualizado com sucesso")
}
const excluir = (req, res) => {
    const id = req.params.id

    itens.forEach((item, i) => {
        if(item.id == id){
            itens.splice(i, 1)
            res.json("Deletado com sucesso")
        }
    })
}

module.exports = {
    criar, listar, alterar, excluir, subtotal
}