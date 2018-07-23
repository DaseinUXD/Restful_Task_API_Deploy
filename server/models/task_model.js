const mongoose = require('mongoose');

// create new schema
const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please enter a title'],
        minlength: [2, 'Title must be more than two characters']
    },
    description:  {type: String, required: [true, 'Please enter a description '], default: ''},
    completed: {type: Boolean, default: false}
}, {timestamps: true});

// create a model, give it a name and appply the schema to the model
const Task = mongoose.model('Task_model', TaskSchema);

module.exports = Task;