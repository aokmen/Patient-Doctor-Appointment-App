


"use strict"


// Auth Controller:

const Admin = require('../models/admin')
const Doctor = require('../models/doctor')
const Patient = require('../models/patient')
const Token = require('../models/token')
const passwordEncrypt = require('../helpers/passwordEncrypt')

module.exports = {

    login: async (req, res) => {
        /*
            #swagger.tags = ["Authentication"]
            #swagger.summary = "Login"
            #swagger.description = 'Login with email and password for get simpleToken and JWT'
            #swagger.parameters["body"] = {
                in: "body",
                required: true,
                schema: {
                    "email": "test",
                    "password": "1234",
                }
            }
        */

        const { email, password } = req.body

        if (email && password) {

            let userType = 'admin'
            let user = await Admin.findOne({email})
            if (!user) {
                 userType = 'doctor'
                 user = await Doctor.findOne({email})
            }
            if (!user) {
                 userType = 'patient'
                 user = await Patient.findOne({email})
            }
         
            if (user && user.password == passwordEncrypt(password)) {

                if (user.isActive) {

                    // Use UUID:
                    // const { randomUUID } = require('crypto')
                    // let tokenData = await Token.findOne({ user_id: user._id })
                    // if (!tokenData) tokenData = await Token.create({
                    //     user_id: user._id,
                    //     token: randomUUID()
                    // })

                    // TOKEN:
                    let tokenData = await Token.findOne({ userId: user._id })
                    if (!tokenData) tokenData = await Token.create({
                        userId: user._id,
                        token: passwordEncrypt(user._id + Date.now()),
                        userType
                    })

                    res.send({
                        error: false,
                        key: tokenData.token,
                        user,
                        userType
                    })

                } else {

                    res.errorStatusCode = 401
                    throw new Error('This account is not active.')
                }
            } else {

                res.errorStatusCode = 401
                throw new Error('Wrong email or password.')
            }
        } else {

            res.errorStatusCode = 401
            throw new Error('Please enter email and password.')
        }
    },
    register: async (req, res) => {
        const {email} = req.body

        if(req.body.branch){
            await Doctor.create(req.body)
            req.body.userType="doctor"
            const doctor = await Doctor.findOne({email})

            let tokenData = await Token.findOne({ userId: doctor._id })
            if (!tokenData) tokenData = await Token.create({
                userId: doctor._id,
                token: passwordEncrypt(doctor._id + Date.now()),
                userType : 'doctor'
            })

            res.send({
                error: false,
                key: tokenData.token,
                doctor,
                userType : 'doctor'
            })
        }
        else if(req.body.username){
            await Admin.create(req.body)
            req.body.userType="admin"
            const admin = await Admin.findOne({email})
         
            let tokenData = await Token.findOne({ userId: admin._id })
            if (!tokenData) tokenData = await Token.create({
                userId: admin._id,
                token: passwordEncrypt(admin._id + Date.now()),
                userType : 'admin'
            })

            res.send({
                error: false,
                key: tokenData.token,
                admin,
                userType : 'admin'
            })
        }
        else{
            await Patient.create(req.body)
            req.body.userType="patient"
            const patient = await Patient.findOne({email})

            let tokenData = await Token.findOne({ userId: patient._id })
            if (!tokenData) tokenData = await Token.create({
                userId: patient._id,
                token: passwordEncrypt(patient._id + Date.now()),
                userType : 'patient'
            })

            res.send({
                error: false,
                key: tokenData.token,
                patient,
                userType : 'patient'
            })
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