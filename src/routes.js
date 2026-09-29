const express = require("express")
const cliente = require("./controllers/cliente.js")
const pedido = require("./controllers/pedido.js")
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
router.get('/', rotaInicial)

module.exports = router