"use strict";

const Message = require('../models/messages');

module.exports = {

    list: async (req, res) => {
        /*
            #swagger.tags = ["Messages"]
            #swagger.summary = "List Messages"
            #swagger.description = `
                You can send query with endpoint for search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */

        const data = await res.getModelList(Message);

        // FOR REACT PROJECT:
        res.status(200).send(data);
    },

    create: async (req, res) => {
        /*
            #swagger.tags = ["Messages"]
            #swagger.summary = "Create Message"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "senderUserId": "Sender's User ID",
                    "senderUserType": "user/admin",
                    "receiverUserId": "Receiver's User ID",
                    "receiverUserType": "user/admin",
                    "subject": "Message Subject",
                    "message": "Message Content"
                }
            }
        */

        const data = await Message.create(req.body);

        // FOR REACT PROJECT:
        res.status(201).send({
            error: false,
            ...data._doc
        });
    },

    read: async (req, res) => {
        /*
            #swagger.tags = ["Messages"]
            #swagger.summary = "Get Single Message"
        */

        const data = await Message.findOne({ _id: req.params.id });

        res.status(200).send({
            error: false,
            data
        });
    },

    update: async (req, res) => {
        /*
            #swagger.tags = ["Messages"]
            #swagger.summary = "Update Message"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "senderUserId": "Updated Sender's User ID",
                    "senderUserType": "user/admin",
                    "receiverUserId": "Updated Receiver's User ID",
                    "receiverUserType": "user/admin",
                    "subject": "Updated Message Subject",
                    "message": "Updated Message Content"
                }
            }
        */

        const data = await Message.updateOne({ _id: req.params.id }, req.body, { runValidators: true });

        res.status(202).send({
            error: false,
            data,
            new: await Message.findOne({ _id: req.params.id })
        });
    },

    delete: async (req, res) => {
        /*
            #swagger.tags = ["Messages"]
            #swagger.summary = "Delete Message"
        */

        const data = await Message.deleteOne({ _id: req.params.id });

        res.status(data.deletedCount ? 204 : 404).send({
            error: !data.deletedCount,
            data
        });
    },
};
