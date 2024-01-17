"use strict"

const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/doctor:

//const permissions = require('../middlewares/permissions')
const doctor = require('../controllers/doctor')

// URL: /doctors

router.route('/')
    .get(doctor.list)
    .post(doctor.create)

router.route('/:id')
    .get(doctor.read)
    .put(doctor.update)
    .patch(doctor.update)
    .delete(doctor.delete)

/* ------------------------------------------------------- */
module.exports = router