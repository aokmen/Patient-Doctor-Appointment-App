"use strict"

const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/note:

//const permissions = require('../middlewares/permissions')
const note = require('../controllers/note')

// URL: /cities

router.route('/')
    .get(note.list)
    .post(note.create)

router.route('/:id')
    .get(note.read)
    .put(note.update)
    .patch(note.update)
    .delete(note.delete)

/* ------------------------------------------------------- */
module.exports = router