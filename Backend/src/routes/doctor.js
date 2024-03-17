"use strict"

const router = require('express').Router()
const fs = require("fs");
/* ------------------------------------------------------- */
// routes/doctor:

const permissions = require('../middlewares/permissions')
const doctor = require('../controllers/doctor')
const upload = require('../middlewares/upload')

   
router.route('/')
    .get(doctor.list)
    .post(doctor.create)

router.route('/:id')
    .get( doctor.read)
    .put( upload.single('avatar'), doctor.update)
    .patch(permissions.isAdminOrDoctor, upload.single('avatar'), doctor.update)
    .delete(permissions.isAdminOrDoctor,  doctor.delete)

/* ------------------------------------------------------- */
module.exports = router
