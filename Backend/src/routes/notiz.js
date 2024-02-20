"use strict"

const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/notiz:

//const permissions = require('../middlewares/permissions')
const notiz = require('../controllers/notiz')

// URL: /cities

router.route('/')
    .get(notiz.list)
    .post(notiz.create)

router.route('/:id')
    .get(notiz.read)
    .put(notiz.update)
    .patch(notiz.update)
    .delete(notiz.delete)

/* ------------------------------------------------------- */
module.exports = router