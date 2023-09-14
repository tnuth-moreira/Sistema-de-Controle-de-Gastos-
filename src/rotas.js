const express = require("express");
const {
    listarContas,
    criarConta,
    atualizarUsuarioConta,
    excluirConta,
    deposito,
    saque,
} = require("./controladores/controle");
const { senhaBanco } = require("./intermediarios");

const rotas = express();


rotas.get('/contas', senhaBanco, listarContas);

rotas.post('/contas', criarConta);
rotas.post('/transacoes/depositar', deposito);
rotas.post('/transacoes/sacar', saque);

rotas.put('/contas/:id/usuario', atualizarUsuarioConta);

rotas.delete('/contas/:id', excluirConta);

module.exports = rotas;
