"use strict"


const { mongoose } = require('../configs/dbConnection')
const { genders } = require('../configs/constraints')
// Patient Model:

const PatientSchema = new mongoose.Schema({

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
    // username: {
    //     type: String,
    //     trim: true,
    //     unique: true,
    //     index: true
    // },
    firstName: {
        type: String,
        trim: true,
    },
    lastName: {
        type: String,
        trim: true,
    },
    address: {
        type: String,
        trim: true,
        // required: true
    },
    zipCode: {
        type: Number,
        // required: true
    },
    profilePic: {
        type: String,
    },
    cityId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'City',
        // required: true
    },
    phone: {
        type: String,
        trim: true,
        // required: true
    },
    birthDate: {
        type: Date,
        trim: true,
        // required: true
    },
    gender: {
        type: String,
        enum: genders,
        trim: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    messages: [{            
        type: mongoose.Schema.Types.ObjectId,
        ref:'Message',
        // required: true,
    }],
    messageCount: {
        type: Number,
        default: 0
    }
    
}, { collection: 'patients', timestamps: true })


const validation = require('../helpers/validation')

PatientSchema.pre(['save', 'updateOne'], validation)

// FOR REACT PROJECT:
PatientSchema.pre('init', function (data) {

    data.id = data._id
    data.createds = data.createdAt.toLocaleDateString('de-de')
})
/* ------------------------------------------------------- */
module.exports = mongoose.model('Patient', PatientSchema)