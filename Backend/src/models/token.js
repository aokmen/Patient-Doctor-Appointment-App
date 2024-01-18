"use strict"


const { mongoose } = require('../configs/dbConnection')
const { userTypes } = require('../configs/constraints')

// Token Model:

const TokenSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        index: true,
    }, 
    token: {
        type: String,
        trim: true,
        required: true,
        index: true,
    }, 
    userType:{
        type: String,
        enum: userTypes
    }, 

}, { collection: 'tokens', timestamps: true })

/* ------------------------------------------------------- */
// FOR REACT PROJECT:
TokenSchema.pre('init', function(data) {
    data.id = data._id
    data.createds = data.createdAt.toLocaleDateString('de-de')
})
/* ------------------------------------------------------- */
module.exports = mongoose.model('Token', TokenSchema)