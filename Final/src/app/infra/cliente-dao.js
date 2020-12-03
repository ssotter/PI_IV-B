class ClienteDao {

    constructor(db) {
        this._db = db;
    }

    adiciona(cliente){
        return new Promise((resolve, reject) => {
            this._db.run('INSERT INTO clientes (nome, endereco, cep, data, fone) values (?,?,?,?,?)',[
                cliente.nome,
                cliente.endereco,
                cliente.cep,
                cliente.data,
                cliente.fone
            ],
            function(err){
                if (err) {
                    console.log(err);
                    return reject('Não foi possível adicionar o cliente!')
                }
                resolve();
            }
        )
        });
    }

    lista(){
        return new Promise((resolve, reject) => {
            this._db.all(
                'SELECT * FROM clientes',
                (erro, resultados) => {
                    if (erro) return reject('Não foi possível listar os clientes!');
                    return resolve(resultados);
                }
            )
        });

    }

    buscaPorId(id) {

        return new Promise((resolve, reject) => {
            this._db.get('SELECT * FROM clientes WHERE id = ?', [id], (erro, cliente) => {
                if (erro) {
                    return reject('Não foi possível encontrar o cliente!');
                }
                return resolve(cliente);
                }
            );
        });
    }

    atualiza(cliente) {
        return new Promise((resolve, reject) => {
            this._db.run('UPDATE clientes SET nome = ?, endereco = ?, cep = ?, data = ?, fone = ? WHERE id = ?', [
                cliente.nome,
                cliente.endereco,
                cliente.cep,
                cliente.data,
                cliente.fone,
                cliente.id
            ], erro => {
                if (erro) {
                    return reject('Não foi possível atualizar o cliente!');
                }
                resolve();
            });
        });
    }

    remove(id) {

        return new Promise((resolve, reject) => {
            this._db.get('DELETE FROM clientes WHERE id = ?', [id], (erro) => {
                if (erro) {
                    return reject('Não foi possível remover o cliente!');
                }
                return resolve();
            });
        });
    }
}

module.exports = ClienteDao;