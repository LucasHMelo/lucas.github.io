const express = require('express');

const router = express.Router();
const funcionarioController = require('../controllers/funcionario.controller');

// router.get('/', controller.get);
// router.get('/:id', controller.getById);
// router.put('/:id', controller.put);
// router.delete('/:id', controller.delete);

router.post('/funcionario', funcionarioController.create);
router.get('/funcionarios', funcionarioController.findAll);
router.get('/funcionario/:id', funcionarioController.findById);
router.put('/funcionario/:id', funcionarioController.update);
router.delete('/funcionario/:id', funcionarioController.delete);

module.exports = router;
