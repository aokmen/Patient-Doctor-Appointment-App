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
    .get(permissions.isAdminOrPatient, patient.read)
    .put(permissions.isAdminOrPatient, patient.update)
    .patch(permissions.isAdminOrPatient, patient.update)
    .delete(permissions.isAdminOrPatient, patient.delete)

/* ------------------------------------------------------- */
module.exports = router