"use strict";

const Content = require('../models/content');

module.exports = {

    list: async (req, res) => {
        /*
            #swagger.tags = ["Contents"]
            #swagger.summary = "List Contents"
            #swagger.description = `
                You can send query with endpoint for search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */

            const data = await Content.find({}).populate('contentCategoryId')

        // FOR REACT PROJECT:
        res.status(200).send(data);
    },

    create: async (req, res) => {
        /*
            #swagger.tags = ["Contents"]
            #swagger.summary = "Create Content"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "contentCategoryId": "Category ID",
                    "title": "Content Title",
                    "content": "Content Body"
                }
            }
        */

        const data = await Content.create(req.body);

        // FOR REACT PROJECT:
        res.status(201).send({
            error: false,
            ...data._doc
        });
    },

    read: async (req, res) => {
        /*
            #swagger.tags = ["Contents"]
            #swagger.summary = "Get Single Content"
        */

        const data = await Content.findOne({ _id: req.params.id });

        res.status(200).send({
            error: false,
            data
        });
    },

    update: async (req, res) => {
        /*
            #swagger.tags = ["Contents"]
            #swagger.summary = "Update Content"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "contentCategoryId": "Updated Category ID",
                    "title": "Updated Content Title",
                    "content": "Updated Content Body"
                }
            }
        */

        const data = await Content.updateOne({ _id: req.params.id }, req.body, { runValidators: true });

        res.status(202).send({
            error: false,
            data,
            new: await Content.findOne({ _id: req.params.id })
        });
    },

    delete: async (req, res) => {
        /*
            #swagger.tags = ["Contents"]
            #swagger.summary = "Delete Content"
        */

        const data = await Content.deleteOne({ _id: req.params.id });

        res.status(data.deletedCount ? 204 : 404).send({
            error: !data.deletedCount,
            data
        });
    },
};
