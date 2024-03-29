"use strict"

const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/notification:

//const permissions = require('../middlewares/permissions')
const notification = require('../controllers/notification')

// URL: /cities

router.route('/')
    .get(notification.list)
    .post(notification.create)

router.route('/:id')
    .get(notification.read)
    .put(notification.update)
    .patch(notification.update)
    .delete(notification.delete)

/* ------------------------------------------------------- */
module.exports = router









