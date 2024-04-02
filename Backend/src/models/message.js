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
    senderName: {
        type: String,
        trim: true,
    },
    receiverUserId: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
    },
    receiverUserType: {
        type: String,
        enum: userTypes,
    },
    receiverName: {
        type: String,
        trim: true,
    },
    subject: {
        type: String,
        trim: true,
    },
    content: {
        type: String,
        required: true,
    },
    from: {
        type: String,
        trim: true,
    },

}, { collection: 'messages', timestamps: true });

module.exports = mongoose.model('Message', MessageSchema);