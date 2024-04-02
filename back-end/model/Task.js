const mongoose = require("mongoose");
const validator = require("validator");

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        validate: {
            validator: function (value) {

                return mongoose.model('Task').findOne({ title: value })
                    .then(task => !task)
            },
            message: 'Title Already Exist'
        }
    },
    description: String,
    status: {
        type: String,
        enum: ['pending', 'in-progress', 'completed'],
        default: 'pending'
    },
    priority: {
        type: String,
        enum: ['high', 'medium', 'low'],
        default: 'medium'
    },
    dueDate: {
        type: Date,
        default: Date.now
    },

});


module.exports = mongoose.model("Task", taskSchema);