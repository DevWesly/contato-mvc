//importar o express
const express = require('express');

//importar UsuariosController;
const UsuariosController = require("../controllers/UsuariosController");
//criar roteador
const router = express.Router();
//criar a rota no roteador
router.get('/registrar',UsuariosController.showRegistrar);
//exportar o roteador    para uso externo
module.exports= router;