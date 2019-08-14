require('./config/config');

const express = require('express');
const app = express();

var bodyParser = require('body-parser');
 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/usuario', function (req, res) {
  res.json('getUsuario')
});

app.post('/usuario', function (req, res) {

    let body = req.body;
    
    if(body.Nombre === undefined){
        res.status(400).json(
            {ok:false
            ,mensaje: 'Elnombre es necesario'}
        );
    }
    else{
        res.json({body})
    }        

});

app.put('/usuario/:id', function (req, res) {
    let id = req.params.id;
    res.json({
        id
    });
});  

app.delete('/usuario', function (req, res) {
    res.json('deletetUsuario')
});

app.listen(3000, ()=> {
    console.log('Escuchando', process.env.PORT);
})