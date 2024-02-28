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
    .put(permissions.isAdmin, admin.update)
    .patch(permissions.isAdmin, admin.update)
    .delete(admin.delete)

/* ------------------------------------------------------- */
module.exports = router