
"use strict";

const router = require('express').Router();
const messages = require('../controllers/message');
const permissions = require('../middlewares/permissions');

// URL: /messages

router.route('/')
    .get(messages.list)
    .post( messages.create);

router.route('/:id')
    .get(messages.read)
    // .put( messages.update)
    // .patch( messages.update)
    .delete( messages.delete);

module.exports = router;