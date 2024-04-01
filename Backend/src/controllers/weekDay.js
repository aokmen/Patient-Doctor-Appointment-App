"use strict"

// WeekDay Controller:

const WeekDay = require('../models/weekDay')

const Appointment = require('../models/appointment')
const Doctor = require('../models/doctor')
const { get } = require('mongoose')

module.exports = {

    list: async (req, res) => {
        /*
            #swagger.tags = ["Cities"]
            #swagger.summary = "List Cities"
            #swagger.description = `
                You can send query with endpoint for search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */

        const data = await res.getModelList(WeekDay)

        // res.status(200).send({
        //     error: false,
        //     details: await res.getModelListDetails(WeekDay),
        //     data
        // })
        
        // FOR REACT PROJECT:
        res.status(200).send(data)
    },

    create: async (req, res) => {
        /*
            #swagger.tags = ["Cities"]
            #swagger.summary = "Create WeekDay"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: { $ref: '#/definitions/WeekDay' }
            }
        */


        const data = await WeekDay.create(req.body)

        // await Appointment.update({ _id: weekDay.doctorId }, { $push: { weekDays: weekDay._id } });

        let getDaysArray = function(start, end) {
            let arr = []
            for(let dt=new Date(start); dt<=new Date(end); dt.setDate(dt.getDate()+1)){
                arr.push(new Date(dt));
            }
            return arr;
        };   
        let daylist = getDaysArray(req.body.startingDate, req.body.endingDate);
        const dayArray = daylist.map((v)=>v.toISOString().slice(0,10)) 

        //console.log(dayArray)
        

        function getDayName(dateStr, locale){
            let date = new Date(dateStr);
            return date.toLocaleDateString(locale, { weekday: 'long' });        
        }

        let dateStr = '2024-01-31';
        let day = getDayName(dateStr, "de-DE");



        for(let i = 0; i < dayArray.length; i++){
            getDayName(dayArray[i], "de-DE")
            
        }

        function divideDay(dayStart, dayEnd, period, breakStart, breakEnd) {
            
            if (!dayStart || !dayEnd || !period || !breakStart || !breakEnd) {
                console.error('All parameters (dayStart, dayEnd, period, breakStart, breakEnd) are required.');
                return [];
            }
        
            const [startHour, startMinute] = dayStart.split('.').map(Number);
            const [endHour, endMinute] = dayEnd.split('.').map(Number);
            const [breakStartHour, breakStartMinute] = breakStart.split('.').map(Number);
            const [breakEndHour, breakEndMinute] = breakEnd.split('.').map(Number);
        
            const startTotalMinutes = startHour * 60 + startMinute;
            const endTotalMinutes = endHour * 60 + endMinute;
            const breakStartTotalMinutes = breakStartHour * 60 + breakStartMinute;
            const breakEndTotalMinutes = breakEndHour * 60 + breakEndMinute;
        
            const result = [];
        
            for (let currentMinutes = startTotalMinutes; currentMinutes < breakStartTotalMinutes; currentMinutes += period) {
                const currentHour = Math.floor(currentMinutes / 60);
                const currentMinute = currentMinutes % 60;
        
                const formattedTime = `${String(currentHour).padStart(2, '0')}.${String(currentMinute).padStart(2, '0')}`;
                result.push(formattedTime);
            }
        
            for (let currentMinutes = breakEndTotalMinutes; currentMinutes < endTotalMinutes; currentMinutes += period) {
                const currentHour = Math.floor(currentMinutes / 60);
                const currentMinute = currentMinutes % 60;
        
                const formattedTime = `${String(currentHour).padStart(2, '0')}.${String(currentMinute).padStart(2, '0')}`;
                result.push(formattedTime);
            }
        
            //req.body.hours = [...result]
        
            return result;
        }

        function divideTimePeriod(startTime, endTime, period) {
            
            if (!startTime || !endTime) {
                console.error('Both startTime and endTime are required.');
                return [];
            }
        
            const [startHour, startMinute] = startTime.split('.').map(Number);
            const [endHour, endMinute] = endTime.split('.').map(Number);
        
            const startTotalMinutes = startHour * 60 + startMinute;
            const endTotalMinutes = endHour * 60 + endMinute;
        
            const result = [startTime];
        
            for (let currentMinutes = startTotalMinutes + period; currentMinutes < endTotalMinutes; currentMinutes += period) {
                const currentHour = Math.floor(currentMinutes / 60);
                const currentMinute = currentMinutes % 60;
        
                const formattedTime = `${String(currentHour).padStart(2, '0')}.${String(currentMinute).padStart(2, '0')}`;
                result.push(formattedTime);
            }
            //req.body.hours = [...result]
        
            return result;
        }

        for(let i = 0; i < dayArray.length; i++){

            const tagName = getDayName(dayArray[i], "de-DE")

            if(!req.body.isHoliday){

                if(tagName === req.body.name){

                    const dayStart = req.body.startHour;
                    const dayEnd = req.body.finishHour;
                    const period = Number(req.body.appointmentDuration);
        
                    if(req.body.lunchStart){

                        const lunchBreakStart = req.body.lunchStart;
                        const lunchBreakEnd = req.body.lunchFinish;
    
                        const appoArray = divideDay(dayStart, dayEnd, period, lunchBreakStart, lunchBreakEnd)

                        const appointmentsOfTheDay = []

                        for(let j = 0; j < appoArray.length; j++){
                            const newApp = await Appointment.create({
                                doctorId: data.doctorId, 
                                date: dayArray[i],
                                timeStart: appoArray[j],
                                weekDays:data._id
                            })
                            appointmentsOfTheDay.push(newApp._id)
                            await Doctor.updateOne({_id: data.doctorId}, {$push: {appointments: newApp._id}})
                        }
                        
                    }
                    else{
                        const appoArray = divideTimePeriod(dayStart, dayEnd, period)

                        const appointmentsOfTheDay = []

                        for(let j = 0; j < appoArray.length; j++){
                            const newApp = await Appointment.create({
                                doctorId: data.doctorId, 
                                date: dayArray[i],
                                timeStart: appoArray[j],
                                weekDays:data._id
                            })
                            appointmentsOfTheDay.push(newApp._id)
                            await Doctor.updateOne({_id: data.doctorId}, {$push: {appointments: newApp._id}})
                        }
                        
                    }  
                }
            }
            
        }
        
        


        

        res.status(201).send({
            error: false,
            data
        })
    },

    read: async (req, res) => {
        /*
            #swagger.tags = ["Cities"]
            #swagger.summary = "Get Single WeekDay"
        */

        const data = await WeekDay.findOne({ _id: req.params.id })

        res.status(200).send({
            error: false,
            data
        })
    },

    update: async (req, res) => {
        /*
            #swagger.tags = ["Cities"]
            #swagger.summary = "Update WeekDay"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: { $ref: '#/definitions/WeekDay' }
            }
        */

        const data = await WeekDay.updateOne({ _id: req.params.id }, req.body, { runValidators: true })

        res.status(202).send({
            error: false,
            data,
            new: await WeekDay.findOne({ _id: req.params.id })
        })
    },

    delete: async (req, res) => {
        /*
            #swagger.tags = ["Cities"]
            #swagger.summary = "Delete WeekDay"
        */

        const data = await WeekDay.deleteOne({ _id: req.params.id })
        await Appointment.deleteMany({ weekDays: req.params.id });
        
        res.status(data.deletedCount ? 204 : 404).send({
            error: !data.deletedCount,
            data
        })
    },
}