const express = require('express');
const sequelize = require('../database.js'); // Importa a instância do Sequelize

const app = express();

app.use(express.json());

app.get('/teste', async (req, res) => {
  try {
    await sequelize.authenticate();
    res.status(200).send({ mensagem: 'boas-vindas à API' });
  } catch (error) {
    console.error('Não foi possível conectar ao banco de dados:', error);
    res.status(500).send({ mensagem: 'Erro ao conectar ao banco de dados' });
  }
});

module.exports = app;