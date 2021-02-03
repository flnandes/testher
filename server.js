const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Post');
//config
    // template engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');
    // BODY-PARSER
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())

//ROTAS
app.get('/', function(req, res){
    Post.findAll().then(function(posts){
        res.render('home', {posts: posts})
    })
})

app.get('/cad', (req, res)=>{
    res.render('form')
})
app.post('/cadO', (req, res)=>{
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(()=>{   
        res.redirect('/')
    }).catch((erro)=>{
        res.send('Houve um erro na POSTAGEM: ' + erro);
    })
})
app.get('/deletar/:id', (req, res)=>{
    Post.destroy({where: {'id': req.params.id}}).then((req, res)=>{
        res.redirect('/')
        res.send('Postagem DELETADA com sucesso!')
    }).catch((erro)=>{
        res.redirect('/')
        res.send('Esta POSTAGEM não exite!')
        console.log(erro)
    })
})
app.listen(3000);
console.log('servidor rodando na porta http://localhost:3000')