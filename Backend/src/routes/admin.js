"use strict"


const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/user:

//const { isLogin } = require('../middlewares/permissions')
const admin = require('../controllers/admin')
const permissions = require('../middlewares/permissions')

// URL: /admins

router.route('/')
    .get(admin.list)
    .post(admin.create)

router.route('/:id')
    .get(admin.read)
    .put(permissions.isLogin, admin.update)
    .patch(permissions.isLogin, admin.update)
    .delete(permissions.isAdmin, admin.delete)

/* ------------------------------------------------------- */
module.exports = router