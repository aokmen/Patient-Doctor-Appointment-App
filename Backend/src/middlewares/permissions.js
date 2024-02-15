"use strict"

// Middleware: permissions

module.exports = {

    isPatient: (req, res, next) => {

        if (req.user && req.user?.isActive && req.user?.userType==="patient") {

            next()

        } else {

            res.errorStatusCode = 403
            throw new Error('NoPermission: You must login.')
        }
    },

    isStaff: (req, res, next) => {

        if (req.user && req.user?.isActive && req.user?.isStaff) {

            next()

        } else {

            res.errorStatusCode = 403
            throw new Error('NoPermission: You must log in and be staff.')
        }
    },
    isAdmin: (req, res, next) => {

        if (req.user && req.user?.isActive && req.user?.userType==="admin") {

            next()

        } else {

            res.errorStatusCode = 403
            throw new Error('NoPermission: You must login and be admin.')
        }
    },
    isDoctor: (req, res, next) => {
        
        if (req.user && req.user?.isActive && req.user?.userType==="doctor") {
            console.log("req.user:",req.user);
            next()

        } else {

            res.errorStatusCode = 403
            throw new Error('NoPermission: You must login and be doctor.')
        }
    },
    isAdminOrDoctor: (req, res, next) => {

        if (req.user && req.user.isActive && (req.user.userType === "admin" || req.user.userType === "doctor")) {

            next();

        } else {

            res.errorStatusCode = 403;
            throw new Error('NoPermission: You must login and be either admin or doctor.');
        }
    }
}