"use strict";

const { mongoose } = require('../configs/dbConnection');

// ContentCategory Model:

const ContentCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        index: true,
    },
}, { collection: 'contentCategories', timestamps: true });

/* ------------------------------------------------------- */
// FOR REACT PROJECT:
ContentCategorySchema.pre('init', function (data) {
    data.id = data._id;
    data.createds = data.createdAt.toLocaleDateString('de-DE'); //use de-DE for germany
});
/* ------------------------------------------------------- */

module.exports = mongoose.model('ContentCategory', ContentCategorySchema);
