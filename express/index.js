import Express from "express";
import { saudacao } from "./saudacaoMid.js"
import bodyParser from "body-parser"
import usuarioAPI from './API/usuario.js'
import produto from "./API/produto.js";

const app = Express()

produto(app, 'com param!')

app.post('/usuario', usuarioAPI.salvar)
app.get('/usuario', usuarioAPI.obter)

app.use(bodyParser.text())
app.use(bodyParser.json())

app.use(saudacao('Henrique'))

app.use('/',(req, res, next) => {
    console.log("Antes")
    next()
})

app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} foi selecionado!`)
})

app.post('/corpo', (req, res) => {
    res.send(req.body)
})

app.use('/', (req, res) => {
    // res.send('Estou <b>bem!<b>')

    // res.json({
    //     name: 'ipad 32gb',
    //     price: 1899.00,
    //     discount: 0.12
    // })

    res.json({
        data: 
        [
        {id: 4, name: "Ana", position:1},
        {id: 2, name: "Bia", position:2},
        {id: 9, name: "Carlos", position:3}
        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200,
    })
      
})

app.listen(3000, () => {
    console.log('Backend executando...')
})

