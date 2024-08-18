const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const routes = require('./routes/routes');

const credentials = require('./credentials');

// Set up the database connection
const dbUrl = `mongodb+srv://${credentials.username}:${credentials.password}@${credentials.host}/${credentials.database}`;
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database connected');
}).catch(err => {
    console.error('Database connection error:', err);
});

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.use((req, res, next) => {
    res.status(404).render('404View', { title: 'Page Not Found' });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('500View', { title: 'Server Error' });
});

app.listen(3000, function(){
    console.log('http://localhost:3000');
  });