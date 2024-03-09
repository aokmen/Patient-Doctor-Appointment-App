"use strict"


const { mongoose } = require('../configs/dbConnection')
const { genders } = require('../configs/constraints')
// Patient Model:

const PatientSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      index: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
    },
    firstName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    street: {
      type: String,
      trim: true,
      required: true,
    },
    zipCode: {
      type: Number,
      required: true,
    },
    profilePic: {
      type: String,
    },
    cityId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "City",
    },
    cityName: {
      type: String,
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    birthDate: {
      type: String,
      trim: true,
    },
    gender: {
      type: String,
      enum: genders,
      trim: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
      },
    ],
    events: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
      },
    ],
    appointments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Appointment",
      },
    ],
    messageCount: {
        type: Number,
        default: 0
    },
    isChecked: {
        type: Boolean,
        default: true,
    },
    
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