"use strict"


const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- *

/* ------------------------------------------------------- */
// Appointment Model:

const AppointmentSchema = new mongoose.Schema({

    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true
    },
    date: {
        type: Date,
        trim: true,
        required: true
    },
    timeStart: {
        type: String,
        trim: true,
        required: true
    },
    timeEnd: {
        type: String,
        trim: true,
        required: true
    },
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    },
    complaints: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Complaint',
        required: true
    }],
    insurance: {
        type: String,
        enum: ["Private", "Compulsory"],
        trim: true
    },
    papers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Paper'
    }],
    doctorOpinion: [{
        type: String,
    }],
    isCancelled: {
        type: Boolean,
        default: false
    },
    cancelUserId:{
        type: mongoose.Schema.Types.ObjectId,
    },
    cancelUserType:{
        type: String,
        enum: ["Admin", "Staff", "Doctor", "Patient"]
    }, 
    cancelDate: {
        type: Date,
    },
    cancelReason: {
        type: String,
        trim: true
    }
    
}, { collection: 'appointments', timestamps: true })


// FOR REACT PROJECT:
AppointmentSchema.pre('init', function (data) {

    data.id = data._id
    data.createds = data.createdAt.toLocaleDateString('de-de')
})
/* ------------------------------------------------------- */
module.exports = mongoose.model('Appointment', AppointmentSchema)