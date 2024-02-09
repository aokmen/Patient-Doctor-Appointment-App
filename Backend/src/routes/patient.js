"use strict"

const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/patient:

const permissions = require('../middlewares/permissions')
const patient = require('../controllers/patient')

// URL: /patients

router.route('/')
    .get( patient.list)
    .post(patient.create)

router.route('/:id')
    .get(permissions.isPatient, patient.read)
    .put(permissions.isPatient, patient.update)
    .patch(permissions.isPatient, patient.update)
    .delete(permissions.isPatient, patient.delete)

/* ------------------------------------------------------- */
module.exports = router