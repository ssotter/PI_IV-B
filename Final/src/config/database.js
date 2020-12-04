const sqlite3 = require('sqlite3').verbose();
const bd = new sqlite3.Database('data.db');

const USUARIOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    nome_completo VARCHAR(40) NOT NULL UNIQUE, 
    email VARCHAR(255) NOT NULL, 
    senha VARCHAR(255) NOT NULL
)
`;

const INSERIR_USUARIO_1 = 
`
INSERT INTO usuarios (
    nome_completo, 
    email,
    senha
) SELECT 'Sergio Sotter', 'sergio.sotter@network-rg.com.br', '123' WHERE NOT EXISTS (SELECT * FROM usuarios WHERE email = 'sergio.sotter@network-rg.com.br')
`;

const CLIENTES_SCHEMA = 
`
CREATE TABLE IF NOT EXISTS clientes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    endereco TEXT NOT NULL,
    cep TEXT NOT NULL,
    data TEXT NOT NULL,
    fone TEXT NOT NULL
)
`;

const INSERIR_CLIENTE_1 = 
`
INSERT INTO clientes (
    nome,
    endereco,
    cep,
    data,
    fone
) SELECT 'Sergio Llopart Sotter', 'Rua Visconde de Mauá, 153', '96211-030', '01/12/1968', '984125555' WHERE NOT EXISTS (SELECT * FROM clientes WHERE nome = 'Sergio LLopart Sotter')
`;

const INSERIR_CLIENTE_2 = 
`
INSERT INTO clientes (
    nome,
    endereco,
    cep,
    data,
    fone
) SELECT 'Claudia Estabel', 'Av. Presidente Vargas, 323', '96208-040', '23/06/1972', '984120000' WHERE NOT EXISTS (SELECT * FROM clientes WHERE nome = 'Claudia Estabel')
`;

const INSERIR_CLIENTE_3 = 
`
INSERT INTO clientes (
    nome,
    endereco,
    cep,
    data,
    fone
) SELECT 'Paulo Correa', 'Rua Rio Branco, 1050', '96210-390', '22/02/1978', '984124444' WHERE NOT EXISTS (SELECT * FROM clientes WHERE nome = 'Paulo Correa')
`;

const INSERIR_CLIENTE_4 = 
`
INSERT INTO clientes (
    nome,
    endereco,
    cep,
    data,
    fone
) SELECT 'Diquerson de Barros', 'Av. Silva Paes, 3023 apto 101', '96201-098', '21/05/1972', '984122222' WHERE NOT EXISTS (SELECT * FROM clientes WHERE nome = 'Diquerson de Barros')
`;

const INSERIR_CLIENTE_5 = 
`
INSERT INTO clientes (
    nome,
    endereco,
    cep,
    data,
    fone
) SELECT 'Fausto Silva', 'Rua Colombo, 1222 apto 1201', '96200-976', '11/08/1978', '984126666' WHERE NOT EXISTS (SELECT * FROM clientes WHERE nome = 'Fausto Silva')
`;


bd.serialize(() => {
    bd.run("PRAGMA foreign_keys=ON");
    bd.run(USUARIOS_SCHEMA);
    bd.run(INSERIR_USUARIO_1);
    bd.run(CLIENTES_SCHEMA);
    bd.run(INSERIR_CLIENTE_1);
    bd.run(INSERIR_CLIENTE_2);
    bd.run(INSERIR_CLIENTE_3);
    bd.run(INSERIR_CLIENTE_4);
    bd.run(INSERIR_CLIENTE_5);

    bd.each("SELECT * FROM usuarios", (err, usuario) => {
        console.log('Usuario: ');
        console.log(usuario);
    });
});

process.on('SIGINT', () =>
    bd.close(() => {
        console.log('BD encerrado!');
        process.exit(0);
    })
);

module.exports = bd;