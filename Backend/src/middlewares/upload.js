"use strict"


// Middleware: upload
// npm i multer

// Multer: UploadFile:
// https://expressjs.com/en/resources/middleware/multer.html
const multer = require('multer')

module.exports = multer({
    storage: multer.diskStorage({
        destination: './upload',          // Bunu yapinca solda upload isminde bir klasör olustu
        filename: (req, file, returnCallback) => {
                //returnCallback(error, this.filename)
                // returnCallback(null, req.admin ? req.admin._id + '-' + file.originalname : (req.doctor ? req.doctor._id + '-' + file.originalname : req.patient?._id + '-' + file.originalname))     // Orijinal ismiyle kaydetmek icin
                // returnCallback(null, req?.user.id + '-' + file.originalname) 
                returnCallback(null, (req?.user.id).slice(-15) + '.jpg') 

            }
    })
})