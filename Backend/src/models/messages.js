"use strict";

const { mongoose } = require('../configs/dbConnection');

// Enum for user types
const UserType = ['doctor','patient',"admin"];

// Messages Model:

const MessageSchema = new mongoose.Schema({
    senderUserId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        index: true,
    },
    senderUserType: {
        type: String,
        required: true,
        enum: UserType,
    },
    receiverUserId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        index: true,
    },
    receiverUserType: {
        type: String,
        required: true,
        enum: UserType,
    },
    subject: {
        type: String,
        required: true,
        trim: true,
    },
    message: {
        type: String,
        required: true,
    },
}, { collection: 'messages', timestamps: true });

module.exports = mongoose.model('Message', MessageSchema);