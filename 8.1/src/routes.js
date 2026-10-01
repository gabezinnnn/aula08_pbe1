const express = require("express")
const cliente = require("./controllers/cliente.js")
const pedido = require("./controllers/pedido.js")
const produto = require("./controllers/produto.js")
const item = require("./controllers/itens.js")
const router = express.Router()

const rotaInicial = (req, res) => {
    res.json("Pedidos MVC respondendo")
}

router.get('/pedidos', pedido.listar)
router.post('/pedidos', pedido.criar)
router.patch('/pedidos/:id', pedido.alterar)
router.delete('/pedidos/:id', pedido.excluir)
router.get('/clientes', cliente.listar)
router.post('/clientes', cliente.criar)
router.patch('/clientes/:id', cliente.alterar)
router.delete('/clientes/:id', cliente.excluir)
router.get('/produtos', produto.listar)
router.post('/produtos', produto.criar)
router.patch('/produtos/:id', produto.alterar)
router.delete('/produtos/:id', produto.excluir)
router.get('/itens', item.listar)
router.post('/itens', item.criar)
router.patch('/itens/:id', item.alterar)
router.delete('/itens/:id', item.excluir)
router.get('/', rotaInicial)
router.get('/total', pedido.total)

module.exports = router