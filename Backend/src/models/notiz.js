"use strict"


const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- *

/* ------------------------------------------------------- */
// Notiz Model:

const { userTypes } = require('../configs/constraints')

const NotizSchema = new mongoose.Schema({

    userId:{
        type: String,
        trim: true,
        required: true
    },
    userType: {
        type: String,
        enum: userTypes
    },
    name: {
        type: String,
        trim: true,
        required: true
    },
    
}, { collection: 'notizs', timestamps: true })


// FOR REACT PROJECT:
NotizSchema.pre('init', function (data) {

    data.id = data._id
    data.createds = data.createdAt.toLocaleDateString('de-de')
})
/* ------------------------------------------------------- */
module.exports = mongoose.model('Notiz', NotizSchema)