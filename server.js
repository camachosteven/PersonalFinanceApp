const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const env = require('dotenv');

// used to determine environment that it's running on
if (process.env.NODE_ENV === 'production') console.log('This is running from Heroku app.')
if (process.env.NODE_ENV === 'development') console.log('This is running from docker container.');
else {
    env.config();
    console.log('This is running locally.');
}

const app = express()
const staticPath = path.join(__dirname, 'MVC', 'Views', 'static');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(staticPath, { etag: false }));

// Routes
const budgetRoutes = require('./routes/budget');
app.use(budgetRoutes);

// Views
app.set('views', 'MVC/Views');
app.set('view engine', 'ejs');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '127.0.0.1';
app.listen(PORT, HOST);