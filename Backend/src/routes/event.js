"use strict"

const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/event:

//const permissions = require('../middlewares/permissions')
const event = require('../controllers/event')

// URL: /cities

router.route('/')
    .get(event.list)
    .post(event.create)

router.route('/:id')
    .get(event.read)
    .put(event.update)
    .patch(event.update)
    .delete(event.delete)

/* ------------------------------------------------------- */
module.exports = router