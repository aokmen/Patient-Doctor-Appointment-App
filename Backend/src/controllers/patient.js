"use strict"

// Patient Controller:

const Patient = require('../models/patient')

module.exports = {

    list: async (req, res) => {
        /*
            #swagger.tags = ["Patients"]
            #swagger.summary = "List Patients"
            #swagger.description = `
                You can send query with endpoint for search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */

        const data = await res.getModelList(Patient)

        // res.status(200).send({
        //     error: false,
        //     details: await res.getModelListDetails(Patient),
        //     data
        // })
        
        // FOR REACT PROJECT:
        res.status(200).send(data)
    },

    create: async (req, res) => {
        /*
            #swagger.tags = ["Patients"]
            #swagger.summary = "Create Patient"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: { $ref: '#/definitions/Patient' }
            }
        */

        const data = await Patient.create(req.body)

        res.status(201).send({
            error: false,
            data
        })
    },

    read: async (req, res) => {
        /*
            #swagger.tags = ["Patients"]
            #swagger.summary = "Get Single Patient"
        */

        const data = await Patient.findOne({ _id: req.params.id }).populate(["appointments", "events", "messages"])

        res.status(200).send({
            error: false,
            data
        })
    },

    update: async (req, res) => {
        /*
            #swagger.tags = ["Patients"]
            #swagger.summary = "Update Patient"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: { $ref: '#/definitions/Patient' }
            }
        */

        const data = await Patient.updateOne({ _id: req.params.id }, req.body, { runValidators: true })

        res.status(202).send({
            error: false,
            data,
            new: await Patient.findOne({ _id: req.params.id })
        })
    },

    delete: async (req, res) => {
        /*
            #swagger.tags = ["Patients"]
            #swagger.summary = "Delete Patient"
        */

        const data = await Patient.deleteOne({ _id: req.params.id })

        res.status(data.deletedCount ? 204 : 404).send({
            error: !data.deletedCount,
            data
        })
    },
}