"use strict"


const { mongoose } = require('../configs/dbConnection')

// Doctor Model:

const DoctorSchema = new mongoose.Schema({

    branchId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Branch',
        required: true
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
    },
    lastName: {
        type: String,
        trim: true,
    },
    address: {
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
        ref: 'City',
        required: true
    },
    phone: {
        type: String,
        trim: true,
        required: true
    },
    birthDate: {
        type: Date,
        trim: true,
        required: true
    },
    gender: {
        type: String,
        enum: ["male", "female", "others"],
        trim: true
    },
    avatar: {
        type: String,
        trim: true
    },
    papers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Paper'
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
        ref:'Complaint',
        required: true,
    }],
    
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