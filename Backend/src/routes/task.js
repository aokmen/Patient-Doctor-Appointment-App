"use strict"

const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/task:

//const permissions = require('../middlewares/permissions')
const task = require('../controllers/task')

// URL: /cities

router.route('/')
    .get(task.list)
    .post(task.create)

router.route('/:id')
    .get(task.read)
    .put(task.update)
    .patch(task.update)
    .delete(task.delete)

/* ------------------------------------------------------- */
module.exports = router