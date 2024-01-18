"use strict"


const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- *

/* ------------------------------------------------------- */
// Admin Model:

const AdminSchema = new mongoose.Schema({

    username: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        index: true
    },
    firstName: {
        type: String,
        trim: true,
    },
    lastName: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        index: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isStaff: {
        type: Boolean,
        default: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },

}, { collection: 'admins', timestamps: true })

/* ------------------------------------------------------- */
// Schema Configs:

const validation = require('../helpers/validation')

AdminSchema.pre(['save', 'updateOne'], validation)
/* ------------------------------------------------------- */
// FOR REACT PROJECT:
AdminSchema.pre('init', function (data) {

    data.id = data._id
    data.createds = data.createdAt.toLocaleDateString('de-de')
})
/* ------------------------------------------------------- */
module.exports = mongoose.model('Admin', AdminSchema)