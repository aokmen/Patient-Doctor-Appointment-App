"use strict"


const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- *

/* ------------------------------------------------------- */
// Aufgabe Model:

const { userTypes } = require('../configs/constraints')

const AufgabeSchema = new mongoose.Schema({

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
    
}, { collection: 'aufgabes', timestamps: true })


// FOR REACT PROJECT:
AufgabeSchema.pre('init', function (data) {

    data.id = data._id
    data.createds = data.createdAt.toLocaleDateString('de-de')
})
/* ------------------------------------------------------- */
module.exports = mongoose.model('Aufgabe', AufgabeSchema)