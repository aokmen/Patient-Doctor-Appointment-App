"use strict"

const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/complaint:

//const permissions = require('../middlewares/permissions')
const complaint = require('../controllers/complaint')

// URL: /complaints

router.route('/')
    .get(complaint.list)
    .post(complaint.create)

router.route('/:id')
    .get(complaint.read)
    .put(complaint.update)
    .patch(complaint.update)
    .delete(complaint.delete)

/* ------------------------------------------------------- */
module.exports = router