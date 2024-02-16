"use strict"


// app.use(authentication):

const Token = require('../models/token')

module.exports = async (req, res, next) => {
    
    const auth = req.headers?.authorization || null
    const tokenKey = auth ? auth.split(' ') : null
  
    if(tokenKey && tokenKey[0] == 'Token'){
        const tokenData = await Token.findOne({ token: tokenKey[1] })

        if (tokenData) {
            const userModel = require("../models/"+tokenData.userType)
            //console.log("userModel",userModel);

            req.user = await userModel.findOne({_id:tokenData.userId})
            if (req.user) req.user.userType = tokenData.userType
            // console.log("req.user.userType:",req.user.userType);
        }
        
    }
//     if(tokenKey && tokenKey[0] == 'Token'){
//     const tokenData = await Token.findOne({ token: tokenKey[1] }).populate('userId')
//     req.user = tokenData ? tokenData.userId : null
// }

    next()
}

// const auth = req.headers?.authorization || null
// const tokenKey = auth ? auth.split(' ') : null

// if(tokenKey && tokenKey[0] == 'Token'){
//     const tokenData = await Token.findOne({ token: tokenKey[1] }).populate('userId')
//     req.user = tokenData ? tokenData.userId : null
// }