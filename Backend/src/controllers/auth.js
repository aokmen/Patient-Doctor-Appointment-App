"use strict"


// Auth Controller:

const Admin = require('../models/admin')
const Token = require('../models/token')
const passwordEncrypt = require('../helpers/passwordEncrypt')

module.exports = {

    login: async (req, res) => {
        /*
            #swagger.tags = ["Authentication"]
            #swagger.summary = "Login"
            #swagger.description = 'Login with username (or email) and password for get simpleToken and JWT'
            #swagger.parameters["body"] = {
                in: "body",
                required: true,
                schema: {
                    "username": "test",
                    "password": "1234",
                }
            }
        */

        const { username, email, password } = req.body

        if ((username || email) && password) {

            const admin = await Admin.findOne({ $or: [{ username }, { email }] })

            if (admin && admin.password == passwordEncrypt(password)) {

                if (admin.isActive) {

                    // Use UUID:
                    // const { randomUUID } = require('crypto')
                    // let tokenData = await Token.findOne({ admin_id: admin._id })
                    // if (!tokenData) tokenData = await Token.create({
                    //     admin_id: admin._id,
                    //     token: randomUUID()
                    // })

                    // TOKEN:
                    let tokenData = await Token.findOne({ userId: admin._id })
                    if (!tokenData) tokenData = await Token.create({
                        userId: admin._id,
                        token: passwordEncrypt(admin._id + Date.now())
                    })

                    res.send({
                        error: false,
                        key: tokenData.token,
                        // token: tokenData.token,
                        admin,
                    })

                } else {

                    res.errorStatusCode = 401
                    throw new Error('This account is not active.')
                }
            } else {

                res.errorStatusCode = 401
                throw new Error('Wrong username/email or password.')
            }
        } else {

            res.errorStatusCode = 401
            throw new Error('Please enter username/email and password.')
        }
    },


    logout: async (req, res) => {
        /*
            #swagger.tags = ["Authentication"]
            #swagger.summary = "simpleToken: Logout"
            #swagger.description = 'Delete token key.'
        */

        const auth = req.headers?.authorization || null // Token ...tokenKey... 
        const tokenKey = auth ? auth.split(' ') : null // ['Token', '...tokenKey...'] 

        let message = null, result = {}

        if (tokenKey) {

            if (tokenKey[0] == 'Token') { // SimpleToken

                result = await Token.deleteOne({ token: tokenKey[1] })
                message = 'Token deleted. Logout was OK.'

            } 
        }

        res.send({
            error: false,
            message,
            result
        })
    },
}