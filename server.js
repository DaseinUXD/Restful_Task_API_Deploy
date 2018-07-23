const port = 3000;
const express = require('express');
const moment = require('moment');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const shell = require('shelljs');
const flash = require('express-flash');
const session = require('express-session');

// mongoose connection to MongoDB 'tasks_db'
require('./server/config/mongoose');

// Session Setup
app.use(session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}

}));

// Flash Setup
app.use(flash());

// Views Engine setup
app.set('views', path.join(__dirname, './client/views')); // relocated views in the client directory
app.set('view engine', 'ejs');

// Static Files Location
app.use(express.static(path.join(__dirname, './public/dist/public')));  // relocated static files into the client directory

// Body Parser
app.use(bodyParser.urlencoded({extended: true}));

// JSON parser
app.use(bodyParser.json());

// Create an schema and apply it to a model
require('./server/models/task_model');

// Accessing routes.js
require('./server/config/routes.js')(app);  // relocated the routes to the routes.js file

// Listen on port
app.listen(port, function () {
    console.log('listening on port:', port)
});