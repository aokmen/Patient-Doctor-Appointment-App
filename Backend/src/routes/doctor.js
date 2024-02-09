"use strict"

const router = require('express').Router()
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
    .put(permissions.isDoctor, upload.single('avatar'), doctor.update)
    .patch(permissions.isDoctor, upload.single('avatar'), doctor.update)
    .delete(permissions.isDoctor, doctor.delete)

/* ------------------------------------------------------- */
module.exports = router