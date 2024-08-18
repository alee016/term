const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const handlebars = require('handlebars');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const routes = require('./routes/routes');

const credentials = require('../credentials');

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

// Initialize Express
const app = express();

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

// Set up view engine
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Register partials (if any)
hbs.registerPartials(path.join(__dirname, 'views/partials'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Use routes
app.use('/', routes);

// Error handling
app.use((req, res, next) => {
    res.status(404).render('404View', { title: 'Page Not Found' });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('500View', { title: 'Server Error' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
