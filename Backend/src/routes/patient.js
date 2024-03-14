"use strict"

const router = require('express').Router()
const fs = require("fs");
/* ------------------------------------------------------- */
// routes/patient:

const permissions = require('../middlewares/permissions')
const patient = require('../controllers/patient')

// URL: /patients

router.route('/')
    .get( patient.list)
    .post(patient.create)


router
  .route("/:id")
  .get(patient.read)
  .put(
    permissions.isAdminOrPatient,
    (req, res) => {
      if (!req.file) {
        return res.status(400).send("No file uploaded.");
      }

      const uploadFolder = "upload/";
      const existingFilePath = path.join(uploadFolder, req.file.originalname);

      if (fs.existsSync(existingFilePath)) {
        fs.unlinkSync(existingFilePath);
      }
      res.send("File uploaded successfully!");
    },

    patient.update
  )
  .patch(permissions.isAdminOrPatient, patient.update)
  .delete(permissions.isAdminOrPatient, patient.delete);


/* ------------------------------------------------------- */
module.exports = router