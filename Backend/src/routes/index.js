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

// appointment:
router.use('/appointments', require('./appointment'))

// city:
router.use('/cities', require('./city'))

// file:
router.use('/files', require('./file'))

// documents:
router.use('/documents', require('./document'))



/* ------------------------------------------------------- */
module.exports = router