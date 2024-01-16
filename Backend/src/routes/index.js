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
/*

// category:
router.use('/categories', require('./category'))
// contribution:
router.use('/blogs', require('./contribution'))
// comment:
router.use('/comments', require('./comment'))
// likes:
router.use('/likes', require('./likes'))
// commentlikes:
router.use('/commentlikes', require('./commentLikes'))
// commentlikes:
router.use('/commentdislikes', require('./commentDislikes'))
// commentlikes:
router.use('/status', require('./status'))
//documnets */
router.use('/documents', require('./document'))



/* ------------------------------------------------------- */
module.exports = router