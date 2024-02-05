"use strict";

const { mongoose } = require('../configs/dbConnection');

// Enum for user types
const { userTypes } = require('../configs/constraints')

// Messages Model:

const MessageSchema = new mongoose.Schema({
    senderUserId: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
    },
    senderUserType: {
        type: String,
        enum: userTypes,
    },
    receiverUserId: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
    },
    receiverUserType: {
        type: String,
        enum: userTypes,
    },
    subject: {
        type: String,
        required: true,
        trim: true,
    },
    content: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        trim: true,
    },
    from: {
        type: String,
        trim: true,
    },
}, { collection: 'messages', timestamps: true });

module.exports = mongoose.model('Message', MessageSchema);