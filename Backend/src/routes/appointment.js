"use strict"

const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/appointment:

//const permissions = require('../middlewares/permissions')
const appointment = require('../controllers/appointment')

// URL: /appointments

router.route('/')
    .get(appointment.list)
    .post(appointment.create)

router.route('/:id')
    .get(appointment.read)
    .put(appointment.update)
    .patch(appointment.update)
    .delete(appointment.delete)

/* ------------------------------------------------------- */
module.exports = router