const Funcionario = require('../models/funcionario.models');

exports.create = (req, res) => {
  if (!req.body.nomeFuncionario && !req.body.cargo && !req.body.numeroIdentificador) {
    return res.status(400).send({ message: 'Os campos não podem estar vazios.' });
  }

  const funcionario = new Funcionario({
    nomeFuncionario: req.body.nomeFuncionario,
    cargo: req.body.cargo,
    numeroIdentificador: req.body.numeroIdentificador,
  });

  funcionario.save()
    .then((data) => {
      res.status(200).send(data);
    }).catch((err) => {
      res.status(500).send({ message: 'Erro ao criar um novo funcionario' } || err.message);
    });
};

exports.findAll = (req, res) => {
  Funcionario.find()
    .then((funcionarios) => {
      res.status(200).send(funcionarios);
    }).catch((err) => {
      res.status(500).send({ message: 'Erro ao selecionar todos(as) os(as) Funcionários(as)' || err.message });
    });
};

// exports.findById = (req, res) => {
//   Funcionario.findById(req.params.id)
//     .then((funcionario) => {
//       if (!funcionario) {
//         return res.status(404).send({ message: `Funcionario não encontrado ${req.params.id}` });
//       }
//       res.status(200).send(funcionario);
//     }).catch((err) => {
//       if (err.kind === 'ObjetId') {
//         return res.status(400).send({ message: `Funcionario não encontrado ${req.params.id}` });
//       }
//       res.status(500).send({ message: 'Erro ao selecionar todos(as) os(as) Funcionários(as)' || err.message });
//     });
// };

exports.findById = (req, res) => {
  Funcionario.findById(req.params.id)
    .then((funcionario) => {
      if (!funcionario) {
        return res.status(404).send({ message: `Funcionário(a) não encontrado(a) ${req.params.id}` });
      }

      res.status(200).send(funcionario);
    }).catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(400).send({ message: `Id do Funcionário(a) não encontrado(a) ${req.params.id}` });
      }

      res.status(500).send({ message: 'Erro ao selecionar os(as) Funcionários(as) || err.message' });
    });
};

exports.update = (req, res) => {
  // Validar os campos
  if (!req.body.nomeFuncionario) {
    return res.status(400).send({ message: 'Os campos não podem ser vazios! ' });
  }

  // Encontrar 'Id' do Funcionário e depois atualizar os dados via 'request':
  Funcionario.findByIdAndUpdate(req.params.id, {
    nomeFuncionario: req.body.nomeFuncionario,
    cargo: req.body.cargo,
    numeroIdentificador: req.body.numeroIdentificador,
  }, { new: true })
    .then((funcionario) => {
      if (!funcionario) {
        res.status(404).send({ message: `Funcionário(a) não encontrado(a) ${req.params.id}` });
      }

      res.status(200).send({ message: 'Funcionário(a) atualizado(a) com sucesso!', funcionario });
    }).catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({ message: `Erro ao encontrar o Id do Funcionário(a) ${req.params.id}` });
      }

      res.status(500).send({ message: `Erro ao atualizar os dados do(a) Funcionário(a) ${req.params.id}` });
    });
};

exports.delete = (req, res) => {
  Funcionario.findByIdAndDelete(req.params.id)
    .then((funcionario) => {
      if (!funcionario) {
        return res.status(404).send({ message: `Id do Funcionário(a) não encontrado(a) ${req.params.id}` });
      }

      res.status(200).send({ message: 'Funcionário(a) excluído com sucesso!', funcionario });
    }).catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({ message: `Id do Funcionário(a) não encontrado ${req.params.id}` });
      }

      return res.status(500).send({ message: `Erro ao excluir Funcionário(a) ${req.params.id}` });
    });
};
