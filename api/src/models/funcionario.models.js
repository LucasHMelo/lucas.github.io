const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FuncionarioSchema = new Schema({
  nomeFuncionario: { type: String, required: true, maxlength: 50 },
  cargo: { type: String, required: true, maxlength: 50 },
  numeroIdentificador: { type: Number, required: true },
}, {
  timestamps: true,
  collection: 'funcionario',
});

module.exports = mongoose.model('Funcionario', FuncionarioSchema);


// const Funcionario = mongoose.model('Funcionario', funcionarioSchema);

// module.exports = Funcionario;
