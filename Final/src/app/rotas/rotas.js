const ClienteDao = require('../infra/cliente-dao')
const db = require('../../config/database');
const listaMarko = require('../views/clientes/lista/lista.marko');

module.exports = (app) => {
    app.get('/', function(req, res){
        res.send('<html><body><h1> Projeto Integrador PI-IV-B - UCPel </h1></body></html>');
    });
    
    // ROTA para Listar Clientes
    app.get('/clientes', function(req, res){

        const clienteDao = new ClienteDao(db);
        clienteDao.lista()
                    .then(clientes => res.marko(
                        require('../views/clientes/lista/lista.marko'),
                        {
                            clientes: clientes
                        }
                    ))
                    .catch(erro => console.log(erro));
    });

    // ROTA para Cadastro de Clientes
    app.get('/clientes/form', function(req, res){
        res.marko(require('../views/clientes/form/form.marko'), { cliente: {}});
    });

    // ROTA para Editar Cliente
    app.get('/clientes/form/:id', function(req, res) {
        const id = req.params.id;
        const clienteDao = new ClienteDao(db);

        clienteDao.buscaPorId(id)
                    .then(cliente => res.marko(require('../views/clientes/form/form.marko'), {cliente: cliente}))
                    .catch(erro => console.log(erro));
    });

    // ROTA para Incluir Cliente
    app.post('/clientes', function(req, res){
        console.log(req.body);
        const clienteDao = new ClienteDao(db);
        clienteDao.adiciona(req.body)
                    .then(res.redirect('/clientes'))
                    .catch(erro => console.log(erro));
    });

    // ROTA para Atualizar Cliente
    app.put('/clientes', function(req, res){
        console.log(req.body);
        const clienteDao = new ClienteDao(db);
        clienteDao.atualiza(req.body)
                    .then(res.redirect('/clientes'))
                    .catch(erro => console.log(erro));
    });

    // ROTA para Deletar Clientes
    app.delete('/clientes/:id', function(req, res){
        const id = req.params.id;

        const clienteDao = new ClienteDao(db);
        clienteDao.remove(id)
            .then(() => res.status(200).end())
            .catch(erro => console.log(erro));
    });
};