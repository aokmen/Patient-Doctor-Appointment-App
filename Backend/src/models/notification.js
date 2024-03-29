"use strict"


const { mongoose } = require('../configs/dbConnection')

const { notificationTypes } = require("../configs/constraints");
/* ------------------------------------------------------- *

/* ------------------------------------------------------- */
// Notification Model:

const NotificationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
    },
    notificationType: {
      type: String,
      enum: notificationTypes,
    },
    appo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Appointment",
    },

    isRead: {
      type: Boolean,
      default: false,
    },
  },
  { collection: "notifications", timestamps: true }
);


// FOR REACT PROJECT:
NotificationSchema.pre('init', function (data) {

    data.id = data._id
    data.createds = data.createdAt.toLocaleDateString('de-de')
})
/* ------------------------------------------------------- */
module.exports = mongoose.model('Notification', NotificationSchema)









