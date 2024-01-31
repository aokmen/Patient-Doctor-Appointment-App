"use strict"

const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/daySchedule:

//const permissions = require('../middlewares/permissions')
const daySchedule = require('../controllers/daySchedule')

// URL: /cities

router.route('/')
    .get(daySchedule.list)
    .post(daySchedule.create)

router.route('/:id')
    .get(daySchedule.read)
    .put(daySchedule.update)
    .patch(daySchedule.update)
    .delete(daySchedule.delete)

/* ------------------------------------------------------- */
module.exports = router