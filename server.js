const express = require('express')
const app = express()

const hbs = require('hbs');
require('./hbs/helpers');

//variables para obtener el puerto de Heroku, si estamos en local usará el 3000
const port = process.env.PORT || 3000


app.use( express.static( __dirname + '/public' ) );

//Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', function (req, res) {

    res.render('home', {
        nombre: 'alberto'
    });

});

app.get('/about', function (req, res) {

    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});