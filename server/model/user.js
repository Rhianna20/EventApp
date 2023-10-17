const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    user_name: { 
        type: String,
        // required: [true, 'Please insert event name'],
    },
    email: {
        type: String,
        // required: [true, 'Please insert location'],
    },
    password: {
        type: Date,
        // required: [true, 'Please select a date']
    },
    tickets: { 
        type: Number,
        // required: [true, 'Please insert event price']
    }

})

const User = mongoose.model('userTable', userSchema)


module.exports = User;