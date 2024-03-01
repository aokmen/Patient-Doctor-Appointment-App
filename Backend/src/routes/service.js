"use strict"

const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/service:

//const permissions = require('../middlewares/permissions')
const service = require('../controllers/service')

// URL: /services

router.route('/')
    .get(service.list)
    .post(service.create)

router.route('/:id')
    .get(service.read)
    .put(service.update)
    .patch(service.update)
    .delete(service.delete)

/* ------------------------------------------------------- */
module.exports = router