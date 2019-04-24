var express = require('express');

var PORT = process.env.PORT || 8880;

var app = express();

app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');

app.use(routes);

app.listen(PORT, () => {
    console.log('Server is on: http://localhost:' + PORT);
});