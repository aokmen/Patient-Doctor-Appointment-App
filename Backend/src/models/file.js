"use strict"


const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- *

/* ------------------------------------------------------- */
// File Model:

const FileSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        index: true,
    },
    userType: {

    },
    
    filename: {
        type: String,
        trim: true
    },
    path: {
        type: String,
        trim: true
    },
    extention: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    mimetype: {
        type: String,
        trim: true
    }
    
}, { collection: 'files', timestamps: true })


// FOR REACT PROJECT:
FileSchema.pre('init', function (data) {

    data.id = data._id
    data.createds = data.createdAt.toLocaleDateString('de-de')
})
/* ------------------------------------------------------- */
module.exports = mongoose.model('File', FileSchema)