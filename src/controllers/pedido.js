const pedido = require("../../dados/pedidos.json")

function subtotais(){
    pedido.forEach(p => {
        p.subtotal = p.quantidade * p.preco
    })
}

const criar = (req, res) => {
    const dados = req.body
    dados.id = Number(pedido.length) + 1 // Auto Increment
    pedido.push(dados)
    res.json("Criado com sucesso.")
}
const listar = (req, res) => {
    subtotais()
    res.json(pedido)
}
const alterar = (req, res) => {
    const id = req.params.id
    const dados = req.body

    pedido.forEach(p => {
        if(p.id == id){
            p.cliente_id = dados.cliente_id
            p.produto = dados.produto
            p.preco = dados.preco
            p.quantidade = dados.quantidade
            res.send("Atualizado com sucesso")
        }
    })
}
const excluir = (req, res) => {
    const id = req.params.id

    pedido.forEach((p, i) => {
        if(p.id == id){
            pedido.splice(i, 1)
            res.send("Deletado com sucesso.")
        }
    })
}

module.exports = {
    criar, listar, alterar, excluir
}