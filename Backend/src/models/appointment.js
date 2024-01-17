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
        enum: ["07.00", "07.15", "07.30", "07.45",
                "08.00", "08.15", "08.30", "08.45",
                "09.00", "09.15", "09.30", "09.45", 
                "10.00", "10.15", "10.30", "10.45", 
                "11.00", "11.15", "11.30", "11.45",
                "12.00", "12.15", "12.30", "12.45",
                "13.00", "13.15", "13.30", "13.45",
                "14.00", "14.15", "14.30", "14.45",
                "15.00", "15.15", "15.30", "15.45",
                "16.00", "16.15", "16.30", "16.45",
                "17.00", "17.15", "17.30", "17.45",
            ],
        required: true
    },
    timeEnd: {
        type: String,
        enum: [ "07.15", "07.30", "07.45",
                "08.00", "08.15", "08.30", "08.45",
                "09.00", "09.15", "09.30", "09.45", 
                "10.00", "10.15", "10.30", "10.45", 
                "11.00", "11.15", "11.30", "11.45",
                "12.00", "12.15", "12.30", "12.45",
                "13.00", "13.15", "13.30", "13.45",
                "14.00", "14.15", "14.30", "14.45",
                "15.00", "15.15", "15.30", "15.45",
                "16.00", "16.15", "16.30", "16.45",
                "17.00", "17.15", "17.30", "17.45",
                "18.00"
            ],
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
    documents: {
        type: Array,
    },
    comments: {
        type: Array,
    },
    isCancelled: {
        type: Boolean,
        default: false
    },
    cancelUserId:{
        type: String
    },
    cancelUserType:{
        type: String,
        enum: ["Admin", "Staff", "Doctor", "Patient"]
    }, 
    cancelDate: {
        type: Date,
    },
    isActive: {
        type: Boolean,
        default: true
    }
    
}, { collection: 'appointments', timestamps: true })


// FOR REACT PROJECT:
AppointmentSchema.pre('init', function (data) {

    data.id = data._id
    data.createds = data.createdAt.toLocaleDateString('tr-tr')
})
/* ------------------------------------------------------- */
module.exports = mongoose.model('Appointment', AppointmentSchema)