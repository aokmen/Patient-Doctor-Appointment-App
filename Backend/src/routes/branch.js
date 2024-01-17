"use strict"

const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/branch:

//const permissions = require('../middlewares/permissions')
const branch = require('../controllers/branch')

// URL: /branches

router.route('/')
    .get(branch.list)
    .post(branch.create)

router.route('/:id')
    .get(branch.read)
    .put(branch.update)
    .patch(branch.update)
    .delete(branch.delete)

/* ------------------------------------------------------- */
module.exports = router