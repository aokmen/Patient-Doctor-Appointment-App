"use strict"

const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/doctor:

//const permissions = require('../middlewares/permissions')
const doctor = require('../controllers/doctor')

const upload = require('../middlewares/upload')

// URL: /doctors

router.route('/')
    .get(doctor.list)
    .post(upload.single('avatar'), doctor.create)

router.route('/:id')
    .get(doctor.read)
    .put(upload.single('avatar'), doctor.update)
    .patch(upload.single('avatar'), doctor.update)
    .delete(doctor.delete)

/* ------------------------------------------------------- */
module.exports = router