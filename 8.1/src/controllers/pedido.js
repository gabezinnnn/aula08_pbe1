const pedido = require("../../dados/pedidos.json")
const produtos = require("../../dados/produtos.json")
const listaItens = require("../../dados/itens.json")

function total(req, res){
    // listaItens.forEach(i => {
    //     const aux2 = produto.find(l => l.id == i.id)
    //     i.preco = aux2.preco
    // })

    pedido.forEach(p => {
        
        let total = 0;
        const aux = listaItens.filter(i => i.pedido_id == p.id)
        
        aux.forEach(a => {
            total += a.quantidade* produtos.find(p => p.id == a.produto_id).preco
        })

        console.log(p.id, total)
    })
    res.send();
}

const criar = (req, res) => {
    const dados = req.body
    dados.id = Number(pedido.length) + 1 // Auto Increment
    pedido.push(dados)
    res.json("Criado com sucesso.")
}
const listar = (req, res) => {
    total()
    res.json(pedido)
}
const alterar = (req, res) => {
    const id = req.params.id
    const dados = req.body

    chaves = Object.keys(dados)
    pedidinho = pedido.find(p => p.id == id)

    chaves.forEach(chave => {
        pedidinho[chave] = dados[chave]
    })

    res.send("Alterado com sucesso.")
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
    criar, listar, alterar, excluir, total
}