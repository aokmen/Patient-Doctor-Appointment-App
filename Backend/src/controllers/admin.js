"use strict"


// User Controller:


const Admin = require('../models/admin')
const Token = require('../models/token')
const passwordEncrypt = require('../helpers/passwordEncrypt')
const sendMail = require('../helpers/sendMail')


module.exports={
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

        const data = await res.getModelList(Admin)   //find yerine bunu yapiyoruz cünkü pagination sayfasindaki search sort gibi seylerin aktif olabilmesi icin getModelList kullaniyoruz.

        res.status(200).send({
            error: false,
            detail: await res.getModelListDetails(Admin),
            data
        })
    },
    create: async (req, res) => {

        /*
            #swagger.tags = ["Admins"]
            #swagger.summary = "Create Admin"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: { }
            }
        */

        const data = await Admin.create(req.body)

        let tokenKey = passwordEncrypt(data._id + Date.now())
        let tokenData = await Token.create({ userId: data._id, token:tokenKey })

        //sendMail
        // sendMail(
        //     data.email,    //to
        //     'Welcome',     //subject
        //     `<h1>Welcome to our API</h1>
        //     <p>Your username: ${data.username}</p>
        //     `
        // )

        res.status(201).send({
            error: false,
            token: tokenData.token,
            data
        })
    },
    read: async (req, res) => {

        /*
            #swagger.tags = ["Admins"]
            #swagger.summary = "Get Single Admin"
        */

        // Filters:
        // let filters = {}
        // console.log(req)

        // if(!req?.admin.isAdmin) filters._id = req.admin._id


        const data = await Admin.findOne({_id: req.params.id, /* ...filters */})

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
                }
            }
        */

        // // Filters:
        // let filters = {}

        // if(!req?.admin?.isAdmin) {
        //     filters._id = req.admin._id
        //     req.body.isAdmin = false           // Kendisini admin yapamasin diye
        // }

        // const data = await Admin.updateOne({_id: req.params.id, ...filters}, req.body, {runValidators: true})
        const data = await Admin.updateOne({_id: req.params.id}, req.body, {runValidators: true})

        res.status(202).send({
            error: false,
            data,
            new: await Admin.findOne({_id: req.params.id})
        })
    },
    delete: async (req, res) => {
        const data = await Admin.deleteOne({_id: req.params.id})

        res.status(data.deletedCount ? 202 : 404).send({
            error: false,
            data
        })
    },
}