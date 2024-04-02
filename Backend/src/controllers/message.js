"use strict";

const Message = require('../models/message');

const Doctor = require('../models/doctor')
const Patient = require('../models/patient')
const Admin = require('../models/admin')
const sendMail = require('../helpers/sendMail')

module.exports = {

    list: async (req, res) => {
        /*
            #swagger.tags = ["Messages"]
            #swagger.summary = "List Messages"
            #swagger.description = `
                You can send query with endpoint for search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */
//const patientID = req.query.patientID
        const data = await res.getModelList(Message);

        // FOR REACT PROJECT:
        res.status(200).send(data);
    },

    create: async (req, res) => {
        /*
            #swagger.tags = ["Messages"]
            #swagger.summary = "Create Message"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "senderUserId": "Sender's User ID",
                    "senderUserType": "user/admin",
                    "receiverUserId": "Receiver's User ID",
                    "receiverUserType": "user/admin",
                    "subject": "Message Subject",
                    "message": "Message Content"
                }
            }
        */

        const data = await Message.create(req.body);

        if(req.body.from){
            sendMail(
                req.body.from,    //from
                req.body.subject,     //subject
                req.body.content
            )
        }
        
        else{
           if(req.body.senderUserType === "admin"){
            await Admin.updateOne({_id: data.senderUserId}, {$push: {messages: data.id}})

            if(req.body.receiverUserType === "doctor"){
                await Doctor.updateOne({_id: data.receiverUserId}, {$push: {messages: data.id}})
                await Doctor.updateOne({_id: data.receiverUserId}, {$inc: {messageCount: +1}})
            }
            else if(req.body.receiverUserType === "patient"){
                await Patient.updateOne({_id: data.receiverUserId}, {$push: {messages: data.id}})
                await Patient.updateOne({_id: data.receiverUserId}, {$inc: {messageCount: +1}})
            }
            else if(req.body.receiverUserType === "admin"){
                await Admin.updateOne({_id: data.receiverUserId}, {$push: {messages: data.id}})
                await Admin.updateOne({_id: data.receiverUserId}, {$inc: {messageCount: +1}})
            }
        }
        else if(req.body.senderUserType === "doctor"){
            await Doctor.updateOne({_id: data.senderUserId}, {$push: {messages: data.id}})
            
            if(req.body.receiverUserType === "doctor"){
                await Doctor.updateOne({_id: data.receiverUserId}, {$push: {messages: data.id}})
                await Doctor.updateOne({_id: data.receiverUserId}, {$inc: {messageCount: +1}})
            }
            else if(req.body.receiverUserType === "patient"){
                await Patient.updateOne({_id: data.receiverUserId}, {$push: {messages: data.id}})
                await Patient.updateOne({_id: data.receiverUserId}, {$inc: {messageCount: +1}})
            }
            else if(req.body.receiverUserType === "admin"){
                await Admin.updateOne({_id: data.receiverUserId}, {$push: {messages: data.id}})
                await Admin.updateOne({_id: data.receiverUserId}, {$inc: {messageCount: +1}})
            }
        }
        else if(req.body.senderUserType === "patient"){
            await Patient.updateOne({_id: data.senderUserId}, {$push: {messages: data.id}})

            if(req.body.receiverUserType === "doctor"){
                await Doctor.updateOne({_id: data.receiverUserId}, {$push: {messages: data.id}})
                await Doctor.updateOne({_id: data.receiverUserId}, {$inc: {messageCount: +1}})
            }
            else if(req.body.receiverUserType === "patient"){
                await Patient.updateOne({_id: data.receiverUserId}, {$push: {messages: data.id}})
                await Patient.updateOne({_id: data.receiverUserId}, {$inc: {messageCount: +1}})
            }
            else if(req.body.receiverUserType === "admin"){
                await Admin.updateOne({_id: data.receiverUserId}, {$push: {messages: data.id}})
                await Admin.updateOne({_id: data.receiverUserId}, {$inc: {messageCount: +1}})
            }
        } 
        }
        

        // await Contribution.updateOne({_id: data.contribution_id}, {$push: {comments: data.id}})
        // await Contribution.updateOne({_id: data.contribution_id}, {$inc: {comment_count: +1}})

        // FOR REACT PROJECT:
        res.status(201).send({
            error: false,
            ...data._doc
        });
    },

    read: async (req, res) => {
        /*
            #swagger.tags = ["Messages"]
            #swagger.summary = "Get Single Message"
        */


        // const data = await Message.findOne({ _id: req.params.id });
        const data = await Message.find({ 
            $or: [{ senderUserId: req.params.id }, { receiverUserId: req.params.id }]
        }).sort({ createdAt: 1 });
        

        res.status(200).send({
            error: false,
            data
        });
    },

    // update: async (req, res) => {
    //     /*
    //         #swagger.tags = ["Messages"]
    //         #swagger.summary = "Update Message"
    //         #swagger.parameters['body'] = {
    //             in: 'body',
    //             required: true,
    //             schema: {
    //                 "senderUserId": "Updated Sender's User ID",
    //                 "senderUserType": "user/admin",
    //                 "receiverUserId": "Updated Receiver's User ID",
    //                 "receiverUserType": "user/admin",
    //                 "subject": "Updated Message Subject",
    //                 "message": "Updated Message Content"
    //             }
    //         }
    //     */

    //     const data = await Message.updateOne({ _id: req.params.id }, req.body, { runValidators: true });

    //     res.status(202).send({
    //         error: false,
    //         data,
    //         new: await Message.findOne({ _id: req.params.id })
    //     });
    // },

    delete: async (req, res) => {
        /*
            #swagger.tags = ["Messages"]
            #swagger.summary = "Delete Message"
        */


        const message = await Message.findOne({ _id: req.params.id })
        
        if(message.senderUserType === "admin"){
            await Admin.updateOne({_id: message.senderUserId}, {$pull: {messages: message.id}})

            if(message.receiverUserType === "doctor"){
                await Doctor.updateOne({_id: message.receiverUserId}, {$pull: {messages: message.id}})
                await Doctor.updateOne({_id: message.receiverUserId}, {$inc: {messageCount: -1}})
            }
            else if(message.receiverUserType === "patient"){
                await Patient.updateOne({_id: message.receiverUserId}, {$pull: {messages: message.id}})
                await Patient.updateOne({_id: message.receiverUserId}, {$inc: {messageCount: -1}})
            }
            else if(message.receiverUserType === "admin"){
                await Admin.updateOne({_id: message.receiverUserId}, {$pull: {messages: message.id}})
                await Admin.updateOne({_id: message.receiverUserId}, {$inc: {messageCount: -1}})
            }
        }
        else if(message.senderUserType === "doctor"){
            await Doctor.updateOne({_id: message.senderUserId}, {$pull: {messages: message.id}})

            if(message.receiverUserType === "doctor"){
                await Doctor.updateOne({_id: message.receiverUserId}, {$pull: {messages: message.id}})
                await Doctor.updateOne({_id: message.receiverUserId}, {$inc: {messageCount: -1}})
            }
            else if(message.receiverUserType === "patient"){
                await Patient.updateOne({_id: message.receiverUserId}, {$pull: {messages: message.id}})
                await Patient.updateOne({_id: message.receiverUserId}, {$inc: {messageCount: -1}})
            }
            else if(message.receiverUserType === "admin"){
                await Admin.updateOne({_id: message.receiverUserId}, {$pull: {messages: message.id}})
                await Admin.updateOne({_id: message.receiverUserId}, {$inc: {messageCount: -1}})
            }
        }
        if(message.senderUserType === "patient"){
            await Patient.updateOne({_id: message.senderUserId}, {$pull: {messages: message.id}})

            if(message.receiverUserType === "doctor"){
                await Doctor.updateOne({_id: message.receiverUserId}, {$pull: {messages: message.id}})
                await Doctor.updateOne({_id: message.receiverUserId}, {$inc: {messageCount: -1}})
            }
            else if(message.receiverUserType === "patient"){
                await Patient.updateOne({_id: message.receiverUserId}, {$pull: {messages: message.id}})
                await Patient.updateOne({_id: message.receiverUserId}, {$inc: {messageCount: -1}})
            }
            else if(message.receiverUserType === "admin"){
                await Admin.updateOne({_id: message.receiverUserId}, {$pull: {messages: message.id}})
                await Admin.updateOne({_id: message.receiverUserId}, {$inc: {messageCount: -1}})
            }
        }

        const data = await Message.deleteOne({ _id: req.params.id });

        res.status(data.deletedCount ? 204 : 404).send({
            error: !data.deletedCount,
            data
        });
    },
};
