"use strict"

// Doctor Controller:

const Doctor = require('../models/doctor')

module.exports = {

    list: async (req, res) => {
        /*
            #swagger.tags = ["Doctors"]
            #swagger.summary = "List Doctors"
            #swagger.description = `
                You can send query with endpoint for search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */

        const data = await res.getModelList(Doctor, {}, ["branchId", "cityId"])

        // res.status(200).send({
        //     error: false,
        //     details: await res.getModelListDetails(Doctor),
        //     data
        // })
        
        // FOR REACT PROJECT:
        res.status(200).json({
            number:data.length,
            data
        })
    },

    create: async (req, res) => {
        /*
            #swagger.tags = ["Doctors"]
            #swagger.summary = "Create Doctor"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: { $ref: '#/definitions/Doctor' }
            }
        */

        const data = await Doctor.create(req.body)

        res.status(201).send({
            error: false,
            data
        })
    },

    read: async (req, res) => {
        /*
            #swagger.tags = ["Doctors"]
            #swagger.summary = "Get Single Doctor"
        */

        const data = await Doctor.findOne({ _id: req.params.id }).populate(["branchId", "cityId", "complaints"])

        res.status(200).send({
            error: false,
            data
        })
    },

    update: async (req, res) => {
        /*
            #swagger.tags = ["Doctors"]
            #swagger.summary = "Update Doctor"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: { $ref: '#/definitions/Doctor' }
            }
        */

        const data = await Doctor.updateOne({ _id: req.params.id }, req.body, { runValidators: true })

        res.status(202).send({
            error: false,
            data,
            new: await Doctor.findOne({ _id: req.params.id })
        })
    },

    delete: async (req, res) => {
        /*
            #swagger.tags = ["Doctors"]
            #swagger.summary = "Delete Doctor"
        */

        const data = await Doctor.deleteOne({ _id: req.params.id })

        res.status(data.deletedCount ? 204 : 404).send({
            error: !data.deletedCount,
            data
        })
    },
}