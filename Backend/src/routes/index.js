"use strict"

const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/:

// URL: /

// auth:
router.use('/auth', require('./auth'))
// call user.create for /account/register:
//const { create: userCreate } = require('../controllers/user')
//router.post('/account/register', userCreate)

// user:
router.use('/admins', require('./admin'))
// token:
router.use('/tokens', require('./token'))


// branch:
router.use('/branches', require('./branch'))

// complaint:
router.use('/complaints', require('./complaint'))

// doctor:
router.use('/doctors', require('./doctor'))

// patient:
router.use('/patients', require('./patient'))

// city:
router.use('/cities', require('./city'))

// documents:
router.use('/documents', require('./document'))



/* ------------------------------------------------------- */
module.exports = router