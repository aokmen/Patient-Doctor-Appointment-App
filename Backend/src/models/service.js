"use strict"


const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- *

/* ------------------------------------------------------- */
// Service Model:

const ServiceSchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        required: true
    },
    
}, { collection: 'services', timestamps: true })


// FOR REACT PROJECT:
ServiceSchema.pre('init', function (data) {

    data.id = data._id
    data.createds = data.createdAt.toLocaleDateString('de-de')
})
/* ------------------------------------------------------- */
module.exports = mongoose.model('Service', ServiceSchema)