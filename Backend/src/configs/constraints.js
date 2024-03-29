'use strict'

module.exports = {
  userTypes: ["admin", "doctor", "patient"],
  genders: ["Male", "Female", "Others"],
  insurance: ["Private", "Compulsory"],
  dayNames: [
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag",
    "Sonntag",
  ],
  notificationTypes: [
    "incomingAppointment",
    "byDoctorCancelledAppointment",
    "byPatientCancelledAppointment",
    "tomorrowAppoNumber",
  ],
};