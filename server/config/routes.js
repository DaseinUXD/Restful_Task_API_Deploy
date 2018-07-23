const tasks_controller = require('../controllers/tasks_controller.js'),
    path = require('path');
// const mongoose = require('mongoose');
// const Mongoose = mongoose.model('Mongoose');


module.exports = function (app) {// packages this export as a function that is read by server.js
    // GET landing page
    app.get('/', function (request, response) {
        tasks_controller.index(request, response);

    });

    // GET FIND ALL
    app.get('/tasks', tasks_controller.find_all);

    // GET CREATE form
    app.get('/tasks/new', function (request, response) {
        tasks_controller.create_get(request, response);

    });

    // POST CREATE data
    app.post('/tasks', function (request, response) {
        tasks_controller.create_post(request, response);

    });

    // GET READ datum
    app.get('/tasks/:id', function (request, response) {
        tasks_controller.read(request, response);
    });

    // GET UPDATE form
    app.get('/tasks/edit/:id', function (request, response) {
        tasks_controller.update_get(request, response);
    });
    // POST UPDATE data
    app.put('/tasks/:id', function (request, response) {
        tasks_controller.update_post(request, response);

    });
    // POST DESTROY data
    app.delete('/tasks/destroy/:id', function (request, response) {
        tasks_controller.destroy(request, response);
    });

};