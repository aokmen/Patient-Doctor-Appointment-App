"use strict"


const { mongoose } = require('../configs/dbConnection')

// event Model:

const EventSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
    },
    
    day: {
        type: String,
        trim: true,
        required: true
    },
    hour: {
        type: String,
        trim: true
    },
    note:{
        type: String,
        trim: true
    }
    
}, { collection: 'events', timestamps: true })


// FOR REACT PROJECT:
EventSchema.pre('init', function (data) {

    data.id = data._id
    data.createds = data.createdAt.toLocaleDateString('de-de')
})
/* ------------------------------------------------------- */
module.exports = mongoose.model('Event', EventSchema)