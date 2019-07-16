const express = require('express');

const router = express.Router();
const funcionarioController = require('../controllers/funcionario.controller');

// router.get('/', controller.get);
// router.get('/:id', controller.getById);
router.get('/findAll', funcionarioController.findAll);
router.post('/create', funcionarioController.create);
// router.put('/:id', controller.put);
// router.delete('/:id', controller.delete);

module.exports = router;
