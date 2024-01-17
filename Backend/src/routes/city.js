"use strict"

const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/city:

//const permissions = require('../middlewares/permissions')
const city = require('../controllers/city')

// URL: /cities

router.route('/')
    .get(city.list)
    .post(city.create)

router.route('/:id')
    .get(city.read)
    .put(city.update)
    .patch(city.update)
    .delete(city.delete)

/* ------------------------------------------------------- */
module.exports = router