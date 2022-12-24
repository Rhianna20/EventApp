const { default: mongoose } = require("mongoose");

const eventSchema = new mongoose.Schema({
    event_name: { 
        type: String,
        // required: [true, 'Please insert event name'],
    },
    location: {
        type: String,
        // required: [true, 'Please insert location'],
    },
    date: {
        type: Date,
        // required: [true, 'Please select a date']
    },
    created_by:{ 
        type: String,
       // required: [true, 'Please insert event creator']
    },
    price: { 
        type: Number,
        // required: [true, 'Please insert event price']
    },
    genre: { 
        type: String,
        // required: [true, 'Please insert genre']
    },

})

const Event = mongoose.model('eventTable', eventSchema)


module.exports = Event;