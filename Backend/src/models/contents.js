"use strict";

const { mongoose } = require('../configs/dbConnection');

// Content Model:

const ContentSchema = new mongoose.Schema({
    contentCategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ContentCategory', // Reference to the ContentCategory model
        required: true,
        index: true,
    },
    title: {
        type: String,
        required: true,
        trim: true,
        index: true,
    },
    content: {
        type: String,
        required: true,
    },
}, { collection: 'contents', timestamps: true });

/* ------------------------------------------------------- */
// FOR REACT PROJECT:
ContentSchema.pre('init', function (data) {
    data.id = data._id;
    data.createds = data.createdAt.toLocaleDateString('de-DE');
});
/* ------------------------------------------------------- */

module.exports = mongoose.model('Content', ContentSchema);
