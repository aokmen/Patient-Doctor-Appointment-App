"use strict"

// Doctor Controller:
const sendMail = require('../helpers/sendMail')
const Doctor = require('../models/doctor')

module.exports = {

    list: async (req, res) => {
        /*
            #swagger.tags = ["Doctors"]
            #swagger.summary = "List Doctors"
            #swagger.description = `
                You can send query with endpoint for search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */

        // const data = await res.getModelList(Doctor, {}, ["branchId", "cityId", "services"])
        const data = await res.getModelList(Doctor)
    
        // res.status(200).send({
        //     error: false,
        //     details: await res.getModelListDetails(Doctor),
        //     data
        // })
        
        // FOR REACT PROJECT:
        res.status(200).json({
            number:data.length,
            data
        })
    },

    create: async (req, res) => {
        /*
            #swagger.tags = ["Doctors"]
            #swagger.summary = "Create Doctor"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: { $ref: '#/definitions/Doctor' }
            }
        */

        const data = await Doctor.create(req.body)
        

        res.status(201).send({
            error: false,
            data
        })
    },

    read: async (req, res) => {
        /*
            #swagger.tags = ["Doctors"]
            #swagger.summary = "Get Single Doctor"
        */



        const data = await Doctor.findOne({ _id: req.params.id }).populate(["files", "appointments", "events","messages"])
        // const data = await Doctor.findOne({ _id: req.params.id }).populate(["branchId", "cityId", "services","files", "appointments", "events","messages"])


        // .populate({
        //     path: 'files',
        //     select: 'fileName' // Sadece fileName alanını seçiyoruz
        // });


      


        res.status(200).send({
            error: false,
            data
            // data:{...data._doc, "files":[`${req.protocol}://${req.get("host")}/img/${data.files[0]}`,`${req.protocol}://${req.get("host")}/img/${data.files[1]}`]}
        
        })
    },

    update: async (req, res) => {
        /*
            #swagger.tags = ["Doctors"]
            #swagger.summary = "Update Doctor"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: { $ref: '#/definitions/Doctor' }
            }
        */

        
           const data = await Doctor.updateOne({ _id: req.params.id }, req.body, { runValidators: true })
           const dataNew = await Doctor.findOne({ _id: req.params.id }) 
 
           if(req.body.isApproved){
            sendMail(
                "hakkioglu19@gmail.com",    //from
                "Termin Bestätigung",     //subject
                `
                    <h2>Arzt/Ärztin:</h2> <p>${dataNew?.title}. ${dataNew?.firstName} ${dataNew?.lastName}</p>
                    <h2>Zeit:</h2> <p>${(dataNew?.updatedAt)}</p>
            
                    <hr/>
                    <h2>Mitteilung:</h2> <p>Ihre TerminUns-App Konto ist bestätigt worden. Sie können jetzt anfangen, TerminUns-App zu verwenden</p>
                `
            )
           }
           else if((!req.body.isApproved)) 
           sendMail(
            "hakkioglu19@gmail.com",    //from
            "Termin Bestätigung",     //subject
            `
                <h2>Arzt/Ärztin:</h2> <p>${dataNew?.title}. ${dataNew?.firstName} ${dataNew?.lastName}</p>
                <h2>Zeit:</h2> <p>${(dataNew?.updatedAt)}</p>
        
                <hr/>
                <h2>Mitteilung:</h2> <p>Ihre TerminUns-App Konto Genehmigung ist abgesagt worden. </p>
            `
        )
           res.status(202).send({
            error: false,
            data,
            new: await Doctor.findOne({ _id: req.params.id })
        })
        
    },

    delete: async (req, res) => {
        /*
            #swagger.tags = ["Doctors"]
            #swagger.summary = "Delete Doctor"
        */

        const data = await Doctor.deleteOne({ _id: req.params.id })

        res.status(data.deletedCount ? 204 : 404).send({
            error: !data.deletedCount,
            data
        })
    },
}