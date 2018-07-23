/*
*
* CONTROLLER
*
* */
const Task = require('../models/task_model');

module.exports = {
    // GET root/index RETURN: RENDER
    index: function (request, response) {
        Task.find({}, function (error, tasks) {
            let title = "Modular Task Dashboard";
            response.render('index', {title: title, tasks: tasks});
            // response.json({message: "success", data: tasks})
        })

    },

    // FIND ALL RETURN: JSON
    find_all: function(request, response) {
        Task.find({}, (error, tasks) => {
            response.json({message: 'success', data: tasks})
        })
    },
    // CREATE GET
    create_get: function (request, response) {
        response.render('new', {title: 'Add a Task'})
    },
    // CREATE POST
    create_post: function (request, response) {
        var task = new Task(request.body);
        task.title = request.body.title;
        task.description = request.body.description;
        task.completed = request.body.completed;
        task.save(function (error) {
            if (error) {
                console.log('we have errors', error);
                for (var key in error.errors) {
                    request.flash('adding_task', error.errors[key].message)
                }
                let title = "Task Dashboard Errors";
                response.render('error', {title: title, task: task});
            }
            else {
                response.json({message: 'success', data: task});
            }

        });
    },
    // READ POST
    read: function (request, response) {
        Task.findOne({_id: request.params.id}, function (error, task) {
            let title = "View Task";
            let intro = "Task";

            // response.render('view', {title: title, intro: intro, task: task});
            response.json({message: 'success', data: task})
        });

    },
    // UPDATE GET
    update_get: function (request, response) {
        Task.findOne({_id: request.params.id}, function (error, task) {
            let title = 'Edit a Task';
            let intro = 'Edit: ';
            response.render('edit', {title: title, intro: intro, task: task});
        });

    },
    // UPDATE POST
    update_post: function (request, response) {
        Task.findById(request.params.id, function (error, task) {
            task.title = request.body.title;
            task.description = request.body.description;
            task.completed = request.body.completed;
            let title = "Edit a Task";
            task.save();
            response.json(task);
            // (function (error) {
            //     if (error) {
            //         console.log('we have errors', error);
            //         for (var key in error.errors) {
            //             request.flash('editing_task', error.errors[key].message)
            //         }
            //         response.render('edit', {title: title, task: task});
            //     }
            //     else {
            //         response.json({message: 'success', data: task});
            //     }
            // })
        })

    },
        // Task.findOne({_id: request.params.id}, function (error, task) {
        //     task.name = request.body.name;
        //     task.age = request.body.age;
        //     task.weight = request.body.weight;
        //     let title = "Edit a Task";
        //     task.save(function (error) {
        //         if (error) {
        //             console.log('we have errors', error);
        //             for (var key in error.errors) {
        //                 request.flash('editing_task', error.errors[key].message)
        //             }
        //             response.render('edit', {title: title, task: task});
        //         }
        //         else {
        //             response.json({message: 'success', data: task});
        //         }
        //     })
        // })

    // },
    // DESTROY
    destroy: function (request, response) {
        Task.remove({_id: request.params.id}, function (error) {
            response.json({message: 'success task deleted'})
        })

    },

};
