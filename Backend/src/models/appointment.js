"use strict"


const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- *

/* ------------------------------------------------------- */
// Appointment Model:

const { userTypes } = require('../configs/constraints')
const { insurance } = require('../configs/constraints')

const AppointmentSchema = new mongoose.Schema({

    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true
    },
    date: {
        type: String,
        trim: true,
        required: true
    },
    timeStart: {
        type: String,
        trim: true,
        required: true
    },
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient'
    },
    complaints: {
        type: String,
    },
    insurance: {
        type: String,
        enum: insurance,
    },
    files: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'File'
    }],
    doctorOpinion: [{
        type: String,
    }],
    isReadPat: {
        type: Boolean,
        default: false
    },
    isReadDr: {
        type: Boolean,
        default: false
    },
    isCancelledPat: {
        type: Boolean,
        default: false
    },
    isCancelledDr: {
        type: Boolean,
        default: false
    },
    isCancelled:{
        type: Boolean,
        default: false 
    },
    cancelUserId:{
        type: mongoose.Schema.Types.ObjectId,
    },
    cancelUserType:{
        type: String,
        enum: userTypes
    }, 
    cancelDate: {
        type: Date,
    },
    cancelReason: {
        type: String,
        trim: true
    },
    weekDays:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'WeekDay'
    },
    
}, { collection: 'appointments', timestamps: true })


// FOR REACT PROJECT:
AppointmentSchema.pre('init', function (data) {

    data.id = data._id
    data.createds = data.createdAt.toLocaleDateString('de-de')
})
/* ------------------------------------------------------- */
module.exports = mongoose.model('Appointment', AppointmentSchema)