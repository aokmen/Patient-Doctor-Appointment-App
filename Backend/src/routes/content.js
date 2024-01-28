"use strict";

const router = require('express').Router();
const contents = require('../controllers/content');
const permissions = require('../middlewares/permissions');

// URL: /contents

router.route('/')
    .get(contents.list)
    .post(permissions.isAdmin, contents.create);

router.route('/:id')
    .get(contents.read)
    .put(permissions.isAdmin, contents.update)
    .patch(permissions.isAdmin, contents.update)
    .delete(permissions.isAdmin, contents.delete);

module.exports = router;
