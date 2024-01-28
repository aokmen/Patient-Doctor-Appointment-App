"use strict";

const router = require('express').Router();
const contentCategories = require('../controllers/contentCategory');
const permissions = require('../middlewares/permissions');

// URL: /contentCategories

router.route('/')
    .get(contentCategories.list)
    .post(permissions.isAdmin, contentCategories.create);

router.route('/:id')
    .get(contentCategories.read)
    .put(permissions.isAdmin, contentCategories.update)
    .patch(permissions.isAdmin, contentCategories.update)
    .delete(permissions.isAdmin, contentCategories.delete);

module.exports = router;
