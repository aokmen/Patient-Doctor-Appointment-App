"use strict";

const Event = require('../models/event');
const Doctor = require('../models/doctor');
const Patient = require('../models/patient');



module.exports = {

    list: async (req, res) => {
        /*
            #swagger.tags = ["Events"]
            #swagger.summary = "List Events"
            #swagger.description = `
                You can send query with endpoint for search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */

        const data = await res.getModelList(Event);

        // FOR REACT PROJECT:
        res.status(200).send(data);
    },

    create: async (req, res) => {
        /*
            #swagger.tags = ["Events"]
            #swagger.summary = "Create Event"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "senderUserId": "Sender's User ID",
                    "senderUserType": "user/admin",
                    "receiverUserId": "Receiver's User ID",
                    "receiverUserType": "user/admin",
                    "subject": "Event Subject",
                    "Event": "Event Content"
                }
            }
        */

        const data = await Event.create(req.body);

        if (req.body.userType = "patient") {
          await Patient.updateOne(
            { _id: data.patientId },
            { $push: { events: data.id } }
          );
        } else {
          if (req.body.userType = "doctor") {
            await Doctor.updateOne(
              { _id: data.doctorId },
              { $push: { events: data.id } }
            );
          }
        }

        
        // FOR REACT PROJECT:
        res.status(201).send({
            error: false,
            ...data._doc
        });
    },

    read: async (req, res) => {
        /*
            #swagger.tags = ["Events"]
            #swagger.summary = "Get Single Event"
        */

        const data = await Event.find({
           userId: req.params.id
        });
        

        res.status(200).send({
            error: false,
            data
        });
    },

    update: async (req, res) => {
        /*
            #swagger.tags = ["Events"]
            #swagger.summary = "Update Event"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "senderUserId": "Updated Sender's User ID",
                    "senderUserType": "user/admin",
                    "receiverUserId": "Updated Receiver's User ID",
                    "receiverUserType": "user/admin",
                    "subject": "Updated Event Subject",
                    "Event": "Updated Event Content"
                }
            }
        */

        const data = await Event.updateOne({ _id: req.params.id }, req.body, { runValidators: true });

        res.status(202).send({
            error: false,
            data,
            new: await Event.findOne({ _id: req.params.id })
        });
    },

    delete: async (req, res) => {
        /*
            #swagger.tags = ["Events"]
            #swagger.summary = "Delete Event"
        */
        

        const data = await Event.deleteOne({ _id: req.params.id });

        res.status(data.deletedCount ? 204 : 404).send({
            error: !data.deletedCount,
            data
        });
    },
};