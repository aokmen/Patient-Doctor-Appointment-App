"use strict";

const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- *

/* ------------------------------------------------------- */
// Task Model:

const { userTypes } = require("../configs/constraints");

const TaskSchema = new mongoose.Schema(
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
    task: {
      type: String,
      trim: true,
      required: true,
    },


    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  { collection: "tasks", timestamps: true }
);

// FOR REACT PROJECT:
TaskSchema.pre("init", function (data) {
  data.id = data._id;
  data.createds = data.createdAt.toLocaleDateString("de-de");
});
/* ------------------------------------------------------- */

module.exports = mongoose.model("Task", TaskSchema);
