"use strict"

// Task Controller:

const Task = require('../models/task')

module.exports = {

    list: async (req, res) => {
        /*
            #swagger.tags = ["Tasks"]
            #swagger.summary = "List Tasks"
            #swagger.description = `
                You can send query with endpoint for search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */

        const data = await res.getModelList(Task)

        // res.status(200).send({
        //     error: false,
        //     details: await res.getModelListDetails(Task),
        //     data
        // })
        
        // FOR REACT PROJECT:
        res.status(200).send(data)
    },

    create: async (req, res) => {
        /*
            #swagger.tags = ["Tasks"]
            #swagger.summary = "Create Task"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: { $ref: '#/definitions/Task' }
            }
        */

        const data = await Task.create(req.body)

        res.status(201).send({
            error: false,
            data
        })
    },

    read: async (req, res) => {
        /*
            #swagger.tags = ["Tasks"]
            #swagger.summary = "Get Single Task"
        */

        const data = await Task.find({ userId: req.params.id })

        res.status(200).send({
            error: false,
            data
        })
    },

    update: async (req, res) => {
        /*
            #swagger.tags = ["Tasks"]
            #swagger.summary = "Update Task"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: { $ref: '#/definitions/Task' }
            }
        */

        const data = await Task.updateOne({ _id: req.params.id }, req.body, { runValidators: true })

        res.status(202).send({
            error: false,
            data,
            new: await Task.findOne({ _id: req.params.id })
        })
    },

    delete: async (req, res) => {
        /*
            #swagger.tags = ["Tasks"]
            #swagger.summary = "Delete Task"
        */

        const data = await Task.deleteOne({ _id: req.params.id })

        res.status(data.deletedCount ? 204 : 404).send({
            error: !data.deletedCount,
            data
        })
    },
}