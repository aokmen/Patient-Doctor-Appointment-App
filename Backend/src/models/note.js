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
<<<<<<< HEAD
      type: Boolean,
      default: false,
    },
  },
  { collection: "notes", timestamps: true }
);
=======
        type: Boolean,
        default: false
    },
    
}, { collection: 'notes', timestamps: true })

>>>>>>> 99f84edbc2c3d45fad745189347163ed9f6d8543

// FOR REACT PROJECT:
NoteSchema.pre("init", function (data) {
  data.id = data._id;
  data.createds = data.createdAt.toLocaleDateString("de-de");
});
/* ------------------------------------------------------- */
<<<<<<< HEAD
module.exports = mongoose.model("Note", NoteSchema);
=======
module.exports = mongoose.model('Note', NoteSchema)
>>>>>>> 99f84edbc2c3d45fad745189347163ed9f6d8543
