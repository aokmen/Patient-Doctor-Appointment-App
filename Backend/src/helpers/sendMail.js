"use strict"



// node i nodemailer
// sendMail(to:string, subject:string, message:string):

const nodemailer = require('nodemailer')

module.exports = function (from, to, subject, message) {

     return false;

    //? GoogleMail (gmail):
    // Google -> AccountHome -> Security -> Two-Step-Verify -> App-Passwords
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'hakkioglu19@gmail.com',
            pass: 'qmnb baty bfim xque' 
        }
    })

    transporter.sendMail({
        replyTo: from,
        from: from,
        to: to,
        subject: subject,
        // Message:
        text: message,
        html: message,
    }, (error, successInfo) => {
        error ? console.log('Error:', error) : console.log('Success:', successInfo)
    })

}