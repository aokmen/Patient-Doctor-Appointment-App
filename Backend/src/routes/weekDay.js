"use strict"

const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/weekDay:

//const permissions = require('../middlewares/permissions')
const weekDay = require('../controllers/weekDay')

// URL: /cities

router.route('/')
    .get(weekDay.list)
    .post(weekDay.create)

router.route('/:id')
    .get(weekDay.read)
    .put(weekDay.update)
    .patch(weekDay.update)
    .delete(weekDay.delete)

/* ------------------------------------------------------- */
module.exports = router