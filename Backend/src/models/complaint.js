"use strict"


const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- *

/* ------------------------------------------------------- */
// Complaint Model:

const ComplaintSchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        required: true
    },
    
}, { collection: 'complaints', timestamps: true })


// FOR REACT PROJECT:
ComplaintSchema.pre('init', function (data) {

    data.id = data._id
    data.createds = data.createdAt.toLocaleDateString('tr-tr')
})
/* ------------------------------------------------------- */
module.exports = mongoose.model('Complaint', ComplaintSchema)