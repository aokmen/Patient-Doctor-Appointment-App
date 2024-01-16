"use strict"


const Admin = require('../models/admin')
const Token = require('../models/token')
const passwordEncrypt = require('../helpers/passwordEncrypt')

module.exports = {

    list: async (req, res) => {
        /*
            #swagger.tags = ["Admins"]
            #swagger.summary = "List Admins"
            #swagger.description = `
                You can send query with endpoint for search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */

        //const filters = (req.admin?.isAdmin) ? {} : { _id: req.admin._id }

        const data = await res.getModelList(Admin, /* filters */)

        // res.status(200).send({
        //     error: false,
        //     details: await res.getModelListDetails(Admin),
        //     data
        // })

        // FOR REACT PROJECT:
        res.status(200).send(data)
    },

    create: async (req, res) => {
        /*
            #swagger.tags = ["Admins"]
            #swagger.summary = "Create Admin"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "username": "test",
                    "password": "1234",
                    "email": "test@site.com",
                    "first_name": "test",
                    "last_name": "test",
                }
            }
        */

        // Disallow setting himself admin/staff:
    
        req.body.isAdmin = false

        const data = await Admin.create(req.body)

        // Create token for auto-login:
        const tokenData = await Token.findOne({
            userId: data._id,
            token: passwordEncrypt(data._id + Date.now())
        })

        // res.status(201).send({
        //     error: false,
        //     token: tokenData.token,
        //     data
        // })

        // FOR REACT PROJECT:
        res.status(201).send({
            error: false,
            token: tokenData.token,
            ...data._doc
        })
    },

    read: async (req, res) => {
        /*
            #swagger.tags = ["Admins"]
            #swagger.summary = "Get Single Admin"
        */

        const filters = (req.admin?.iAdmin) ? { _id: req.params.id } : { _id: req.admin._id }

        const data = await Admin.findOne(filters)

        res.status(200).send({
            error: false,
            data
        })
    },

    update: async (req, res) => {
        /*
            #swagger.tags = ["Admins"]
            #swagger.summary = "Update Admin"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "username": "test",
                    "password": "1234",
                    "email": "test@site.com",
                    "first_name": "test",
                    "last_name": "test",
                }
            }
        */

        const filters = (req.admin?.isAdmin) ? { _id: req.params.id } : { _id: req.admin._id }
        req.body.isAdmin = (req.admin?.isAdmin) ? req.body.isAdmin : false

        const data = await Admin.updateOne(filters, req.body, { runValidators: true })

        res.status(202).send({
            error: false,
            data,
            new: await Admin.findOne(filters)
        })
    },

    delete: async (req, res) => {
        /*
            #swagger.tags = ["Admins"]
            #swagger.summary = "Delete Admin"
        */

        const filters = (req.admin?.isAdmin) ? { _id: req.params.id } : { _id: req.admin._id }

        const data = await Admin.deleteOne(filters)

        res.status(data.deletedCount ? 204 : 404).send({
            error: !data.deletedCount,
            data
        })
    },
}