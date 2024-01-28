"use strict";

const ContentCategory = require('../models/contentCategory');

module.exports = {

    list: async (req, res) => {
        /*
            #swagger.tags = ["ContentCategories"]
            #swagger.summary = "List Content Categories"
            #swagger.description = `
                You can send query with endpoint for search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */

        const data = await res.getModelList(ContentCategory);

        // FOR REACT PROJECT:
        res.status(200).send(data);
    },

    create: async (req, res) => {
        /*
            #swagger.tags = ["ContentCategories"]
            #swagger.summary = "Create Content Category"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "name": "Category Name"
                }
            }
        */

        const data = await ContentCategory.create(req.body);

        // FOR REACT PROJECT:
        res.status(201).send({
            error: false,
            ...data._doc
        });
    },

    read: async (req, res) => {
        /*
            #swagger.tags = ["ContentCategories"]
            #swagger.summary = "Get Single Content Category"
        */

        const data = await ContentCategory.findOne({ _id: req.params.id });

        res.status(200).send({
            error: false,
            data
        });
    },

    update: async (req, res) => {
        /*
            #swagger.tags = ["ContentCategories"]
            #swagger.summary = "Update Content Category"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "name": "Updated Category Name"
                }
            }
        */

        const data = await ContentCategory.updateOne({ _id: req.params.id }, req.body, { runValidators: true });

        res.status(202).send({
            error: false,
            data,
            new: await ContentCategory.findOne({ _id: req.params.id })
        });
    },

    delete: async (req, res) => {
        /*
            #swagger.tags = ["ContentCategories"]
            #swagger.summary = "Delete Content Category"
        */

        const data = await ContentCategory.deleteOne({ _id: req.params.id });

        res.status(data.deletedCount ? 204 : 404).send({
            error: !data.deletedCount,
            data
        });
    },
};
