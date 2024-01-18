"use strict"


const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- *

/* ------------------------------------------------------- */
// Paper Model:

const PaperSchema = new mongoose.Schema({

    description: {
        type: String,
        trim: true,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        index: true,
    },
    
}, { collection: 'papers', timestamps: true })


// FOR REACT PROJECT:
PaperSchema.pre('init', function (data) {

    data.id = data._id
    data.createds = data.createdAt.toLocaleDateString('de-de')
})
/* ------------------------------------------------------- */
module.exports = mongoose.model('Paper', PaperSchema)