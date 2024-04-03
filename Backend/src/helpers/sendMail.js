"use strict"
const EMAIL = process.env.EMAIL


// node i nodemailer
// sendMail(to:string, subject:string, message:string):

const nodemailer = require('nodemailer')

module.exports = function (from, subject, message) {

      // return false;

    //? GoogleMail (gmail):
    // Google -> AccountHome -> Security -> Two-Step-Verify -> App-Passwords
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: `${EMAIL}`,
        // pass: 'qmnb baty bfim xque'
        pass: "akyf iwfx gjks ghma",
      },
    });

    transporter.sendMail({
        replyTo: from,
        from: from,
        to: `${EMAIL}`,
        subject: subject,
        // Message:
        text: message,
        html: message,
    }, (error, successInfo) => {
        error ? console.log('Error:', error) : console.log('Success:')
    })

}