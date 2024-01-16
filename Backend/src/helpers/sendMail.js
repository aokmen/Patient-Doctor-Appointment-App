"use strict"



// node i nodemailer
// sendMail(to:string, subject:string, message:string):

const nodemailer = require('nodemailer')

module.exports = function (to, subject, message) {

    return false;

    //? GoogleMail (gmail):
    // Google -> AccountHome -> Security -> Two-Step-Verify -> App-Passwords
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'qadiradamson@gmail.com',
            pass: '---' // special pass from appPasswords
        }
    })

    transporter.sendMail({
        from: 'qadiradamson@gmail.com',
        to: to,
        subject: subject,
        // Message:
        text: message,
        html: message,
    }, (error, successInfo) => {
        error ? console.log('Error:', error) : console.log('Success:', successInfo)
    })

}