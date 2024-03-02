
"use strict";

const router = require('express').Router();
const messages = require('../controllers/messages');
const permissions = require('../middlewares/permissions');

// URL: /messages

router.route('/')
    .get(messages.list)
    .post( messages.create);
// 1.Yol
// query
// "/?patientId=34324234"

// 2.Yol
// router.route('/patient/:patientId')
//     .get(messages.list)
//req.params.patientId

router.route('/:id')
    .get(messages.read)
    .put( messages.update)
    .patch( messages.update)
    .delete( messages.delete);

module.exports = router;