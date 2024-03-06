"use strict";

const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- *

/* ------------------------------------------------------- */
// Note Model:

const { userTypes } = require("../configs/constraints");

const NoteSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      trim: true,
      required: true,
    },
    userType: {
      type: String,
      enum: userTypes,
    },
    note: {
      type: String,
      trim: true,
      required: true,
    },
    isCompleted: {

        type: Boolean,
        default: false
    },
    
}, { collection: 'notes', timestamps: true })



// FOR REACT PROJECT:
NoteSchema.pre("init", function (data) {
  data.id = data._id;
  data.createds = data.createdAt.toLocaleDateString("de-de");
});
/* ------------------------------------------------------- */

module.exports = mongoose.model("Note", NoteSchema);
