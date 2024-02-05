"use strict"


const { mongoose } = require('../configs/dbConnection')

const { genders } = require('../configs/constraints')

// Doctor Model:

const DoctorSchema = new mongoose.Schema({

    branchId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Branch'
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
    title: {
        type: String,
        trim: true,
    },
    firstName: {
        type: String,
        trim: true,
        required: true
    },
    lastName: {
        type: String,
        trim: true,
        required: true
    },
    street: {
        type: String,
        trim: true,
        required: true
    },
    zipCode: {
        type: Number,
        required: true
    },
    cityId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'City'
    },
    cityName: {
        type: String,
        trim: true
    },
    phone: {
        type: String,
        trim: true,
    },
    birthDate: {
        type: String,
        trim: true
    },
    gender: {
        type: String,
        enum: genders,
        trim: true
    },
    avatar: {
        type: String,
    },
    files: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'File'
    }],
    isActive: {
        type: Boolean,
        default: true
    },
    about: {
        type: String,
        trim: true
    },
    languages: [{
        type: String
    }],
    website: {
        type: String,
        trim: true
    },
    complaints: [{            
        type: mongoose.Schema.Types.ObjectId,
        ref:'Complaint'
    }],
    messages: [{            
        type: mongoose.Schema.Types.ObjectId,
        ref:'Message'
    }],
    messageCount: {
        type: Number,
        default: 0
    }
    
}, { collection: 'doctors', timestamps: true })


const validation = require('../helpers/validation')

DoctorSchema.pre(['save', 'updateOne'], validation)

// FOR REACT PROJECT:
DoctorSchema.pre('init', function (data) {

    data.id = data._id
    data.createds = data.createdAt.toLocaleDateString('de-de')
})
/* ------------------------------------------------------- */
module.exports = mongoose.model('Doctor', DoctorSchema)
