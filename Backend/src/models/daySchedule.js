"use strict"


const { mongoose } = require('../configs/dbConnection')

const { dayNames } = require('../configs/constraints')
// DaySchedule Model:

const DayScheduleSchema = new mongoose.Schema({

    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true
    },
    day: {
        type: String,
        trim: true,
        required: true
    },
    dayName: {
        type: String,
        enum: dayNames
    },
    hours: {
        type: Array,
        default: []
    },
    appointmentsOfTheDay:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appointment'
    }],
    appCount: {
        type: Number,
        default: 0
    }
    
}, { collection: 'daySchedules', timestamps: true })


// FOR REACT PROJECT:
DayScheduleSchema.pre('init', function (data) {

    data.id = data._id
    data.createds = data.createdAt.toLocaleDateString('de-de')
})
/* ------------------------------------------------------- */
module.exports = mongoose.model('DaySchedule', DayScheduleSchema)