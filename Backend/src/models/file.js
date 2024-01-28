"use strict"


const { mongoose } = require('../configs/dbConnection')
const { userTypes } = require('../configs/constraints')
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
        type: String,
        enum: userTypes
    },
    fileName: {
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
    mimeType: {
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