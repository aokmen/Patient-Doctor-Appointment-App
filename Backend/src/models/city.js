"use strict"


const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- *

/* ------------------------------------------------------- */
// City Model:

const CitySchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        required: true
    },
    
}, { collection: 'cities', timestamps: true })


// FOR REACT PROJECT:
CitySchema.pre('init', function (data) {

    data.id = data._id
    data.createds = data.createdAt.toLocaleDateString('de-de')
})
/* ------------------------------------------------------- */
module.exports = mongoose.model('City', CitySchema)