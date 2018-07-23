const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');

// mongoose connnection to MongoDB
mongoose.connect('mongodb://localhost/tasks_db');

