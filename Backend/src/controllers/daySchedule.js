"use strict";

const DaySchedule = require('../models/daySchedule');
const WeekDay = require('../models/weekDay');


module.exports = {

    list: async (req, res) => {
        /*
            #swagger.tags = ["DaySchedules"]
            #swagger.summary = "List DaySchedules"
            #swagger.description = `
                You can send query with endpoint for search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */

        const data = await res.getModelList(DaySchedule);

        // FOR REACT PROJECT:
        res.status(200).send(data);
    },

    create: async (req, res) => {
        /*
            #swagger.tags = ["DaySchedules"]
            #swagger.summary = "Create DaySchedule"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "senderUserId": "Sender's User ID",
                    "senderUserType": "user/admin",
                    "receiverUserId": "Receiver's User ID",
                    "receiverUserType": "user/admin",
                    "subject": "DaySchedule Subject",
                    "DaySchedule": "DaySchedule Content"
                }
            }
        */

        const data = await DaySchedule.create(req.body);

        
        // FOR REACT PROJECT:
        res.status(201).send({
            error: false,
            ...data._doc
        });
    },

    read: async (req, res) => {
        /*
            #swagger.tags = ["DaySchedules"]
            #swagger.summary = "Get Single DaySchedule"
        */

        const data = await DaySchedule.findOne({ _id: req.params.id }).populate("appointmentsOfTheDay");
        


        res.status(200).send({
            error: false,
            data
        });
    },

    update: async (req, res) => {
        /*
            #swagger.tags = ["DaySchedules"]
            #swagger.summary = "Update DaySchedule"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "senderUserId": "Updated Sender's User ID",
                    "senderUserType": "user/admin",
                    "receiverUserId": "Updated Receiver's User ID",
                    "receiverUserType": "user/admin",
                    "subject": "Updated DaySchedule Subject",
                    "DaySchedule": "Updated DaySchedule Content"
                }
            }
        */

        const data = await DaySchedule.updateOne({ _id: req.params.id }, req.body, { runValidators: true });

        res.status(202).send({
            error: false,
            data,
            new: await DaySchedule.findOne({ _id: req.params.id })
        });
    },

    delete: async (req, res) => {
        /*
            #swagger.tags = ["DaySchedules"]
            #swagger.summary = "Delete DaySchedule"
        */


        const DaySchedule = await DaySchedule.findOne({ _id: req.params.id })
        

        const data = await DaySchedule.deleteOne({ _id: req.params.id });

        res.status(data.deletedCount ? 204 : 404).send({
            error: !data.deletedCount,
            data
        });
    },
};
