const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const env = require('dotenv');

// used to determine environment that it's running on
if (process.env.NODE_ENV) console.log('This is running from docker container.');
else {
    env.config();
    console.log(process.env.LOCAL_ENV);
}

const app = express()
const staticPath = path.join(__dirname, 'MVC', 'Views', 'static');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(staticPath, { etag: false }));

// Routes
const budgetRoutes = require('./routes/budget');
app.use(budgetRoutes);

// Views
app.set('views', 'MVC/views');
app.set('view engine', 'ejs');

app.listen(3000);