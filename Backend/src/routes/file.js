"use strict"

const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/file:

//const permissions = require('../middlewares/permissions')
const file = require('../controllers/file')

// URL: /files

const upload = require('../middlewares/upload')

router.route('/')
    .get(file.list)
    .post(upload.single('image'), file.create)

router.route('/:id')
    .get(file.read)
    .put(upload.single('image'), file.update)
    .patch(upload.single('image'), file.update)
    .delete(file.delete)

/* ------------------------------------------------------- */
module.exports = router