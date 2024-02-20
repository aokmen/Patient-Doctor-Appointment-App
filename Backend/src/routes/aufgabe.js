"use strict"

const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/aufgabe:

//const permissions = require('../middlewares/permissions')
const aufgabe = require('../controllers/aufgabe')

// URL: /cities

router.route('/')
    .get(aufgabe.list)
    .post(aufgabe.create)

router.route('/:id')
    .get(aufgabe.read)
    .put(aufgabe.update)
    .patch(aufgabe.update)
    .delete(aufgabe.delete)

/* ------------------------------------------------------- */
module.exports = router