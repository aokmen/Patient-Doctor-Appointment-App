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

// contentCategories:
router.use('/contentCategories', require('./contentCategory'))
// contents:
router.use('/contents', require('./content'))


// branch:
router.use('/branches', require('./branch'))

// service:
router.use('/services', require('./service'))

// doctor:
router.use('/doctors', require('./doctor'))

// patient:
router.use('/patients', require('./patient'))

// appointment:
router.use('/appointments', require('./appointment'))

// city:
router.use('/cities', require('./city'))

// weekDay:
router.use('/weekdays', require('./weekDay'))

// task:
router.use('/tasks', require('./task'))

// note:
router.use('/notes', require('./note'))

// file:
router.use('/files', require('./file'))

// documents:

router.use('/documents', require('./document'))

//messages
router.use("/messages", require("./message"))

//events
router.use("/events", require("./event"))

//notifications
router.use("/notifications", require("./notification"))


/* ------------------------------------------------------- */
module.exports = router