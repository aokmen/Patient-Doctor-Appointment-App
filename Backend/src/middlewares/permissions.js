"use strict"

// Middleware: permissions

module.exports = {

    isLogin: (req, res, next) => {

        if (req.admin?.isActive ) {

            next()

        } else {

            res.errorStatusCode = 403
            throw new Error('NoPermission: You must login.')
        }
    },

    // isStaff: (req, res, next) => {

    //     if (req.admin && req.admin.isActive && req.admin.isStaff) {

    //         next()

    //     } else {

    //         res.errorStatusCode = 403
    //         throw new Error('NoPermission: You must log in and be staff.')
    //     }
    // },
    isAdmin: (req, res, next) => {

        if (req.admin && req.admin.isActive && req.admin.isAdmin) {

            next()

        } else {

            res.errorStatusCode = 403
            throw new Error('NoPermission: You must login and be admin.')
        }
    }
}