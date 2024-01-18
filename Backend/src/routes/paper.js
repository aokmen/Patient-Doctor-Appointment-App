"use strict"

const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/paper:

//const permissions = require('../middlewares/permissions')
const paper = require('../controllers/paper')

// URL: /paperes

router.route('/')
    .get(paper.list)
    .post(paper.create)

router.route('/:id')
    .get(paper.read)
    .put(paper.update)
    .patch(paper.update)
    .delete(paper.delete)

/* ------------------------------------------------------- */
module.exports = router