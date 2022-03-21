//importar o express
const express = require('express');

//importar cotroller
const ContatosController = require("../controllers/ContatosController")
//cria o roteador 
const router = express.Router();
//pede para o roteador definir uma rota :(metodo get,endereço)
router.get('/contatos', ContatosController.listarContatos);
//exportar roteador
module.exports = router;