// Importação do módulo Express
const express = require('express')
const server = express()

// Instanciando Rota
const router = express.Router()
const fs = require('fs')
server.use(express.json({extended: true}))

// Criar função de Leitura de arquivo
const readFile = () => {
    const content = fs.readFileSync('./data/clientes.json', 'utf-8')
    return (JSON.parse(content))
}

// Criar função de Escrita de arquivo
const writeFile = (content) => {
    const updateFile = JSON.stringify(content)
    fs.writeFileSync('./data/clientes.json', updateFile, 'utf-8')
}

// ROTA GET -> leitura de dados e mostrar dados
router.get('/', function(req,res){
    const content = readFile()
    res.send(content)
})

// ROTA POST -> inserção de dados
router.post('/', function(req,res){
    const currentContent = readFile()
    const {nome, endereco, cep, data, fone} = req.body
    const id = Math.random().toString(32).substr(2.9)
    currentContent.push({id, nome, endereco, cep, data, fone})
    writeFile(currentContent)
    res.send(currentContent)
})

// ROTA PUT -> alterar dados
router.put('/:id', function(req,res){
    const {id} = req.params
    const {nome, endereco, cep, data, fone} = req.body
    const currentContent = readFile()

    const selectedItem = currentContent.findIndex((item) => item.id === id)

    const {id: cId, nome: cNome, endereco: cEndereco, cep: cCep, data: cData, fone: cFone} = currentContent[selectedItem]

    const newObject = {
        id:         cId,
        nome:       nome ? nome: cNome,
        endereco:   endereco ? endereco: cEndereco,
        cep:        cep ? cep: cCep,
        data:       data ? data: cData,
        fone:       fone ? fone: cFone
    }

    currentContent[selectedItem] = newObject
    writeFile(currentContent)
    res.send(newObject)
})

// ROTA DELETE -> deletar dados
router.delete('/:id', function(req,res){
    const {id} = req.params
    const currentContent = readFile()

    const selectedItem = currentContent.findIndex((item) => item.id === id)

    currentContent.splice(selectedItem, 1)
    writeFile(currentContent)
    res.send('Deletado com sucesso!')
})

// Configura porta de escuta do servidor (3000)
server.use(router)
server.listen(3000, function(){
    console.log('Conectado com sucesso na porta 3000!')
})