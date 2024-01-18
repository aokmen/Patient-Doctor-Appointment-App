"use strict"


const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- *

/* ------------------------------------------------------- */
// Branch Model:

const BranchSchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        required: true
    },
    
}, { collection: 'branches', timestamps: true })


// FOR REACT PROJECT:
BranchSchema.pre('init', function (data) {

    data.id = data._id
    data.createds = data.createdAt.toLocaleDateString('de-de')
})
/* ------------------------------------------------------- */
module.exports = mongoose.model('Branch', BranchSchema)