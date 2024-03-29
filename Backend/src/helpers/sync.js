"use strict"

// SYCHRONIZATION:

module.exports = async function () {

    // return null;

    // REMOVE DATABASE 
    //  const { mongoose } = require('../configs/dbConnection')
    //  await mongoose.connection.dropDatabase()
    //  console.log('- Database and all data DELETED!')
     
    const WeekDay = require('../models/weekDay')
    await WeekDay.deleteMany()
    const Appointment = require('../models/appointment')
    await Appointment.deleteMany()

    // const Notification = require('../models/notification')
    // await Notification.deleteMany()
    
    /* Admin */
    const Token = require('../models/token')
    await Token.deleteMany() // !!! Clear collection.
    const Admin = require('../models/admin')
    await Admin.deleteMany() // !!! Clear collection.
    await Admin.create({
        "_id": "65343222b67e9681f937f001",
        "username": "admin",
        "email": "admin@site.com",
        "password": "123456Qwe+",
        "isAdmin": true,
        "isStaff": false,
        "firstName": "admin",
        "lastName": "adminnn"
    })
    await Admin.create({
        "_id": "65343222b67e9681f937f002",
        "username": "staff",
        "email": "staff@site.com",
        "password": "123456Qwe+",
        "isAdmin": false,
        "isStaff": true,
        "firstName": "Staff",
        "lastName": "Stafff"
    })
    await Admin.create({
        "_id": "65343222b67e9681f937f003",
        "username": "staff2",
        "email": "staff2@site.com",
        "password": "123456Qwe+",
        "isAdmin": false,
        "isStaff": true,
        "firstName": "Staff2",
        "lastName": "Stafff2"
    })
    

    /* Service */
    const Service = require('../models/service')
    await Service.deleteMany() // !!! Clear collection.
    await Service.create({
        "_id": "65343222b67e9681f937f201",
        "name": "Augenschmerzen",
    })
    await Service.create({
        "_id": "65343222b67e9681f937f202",
        "name": "Zahnschmerzen",
    })
    await Service.create({
        "_id": "65343222b67e9681f937f203",
        "name": "Beinschmerzen",
    })
    // await Service.create({
    //     "_id": "65343222b67e9681f937f204",
    //     "name": "Ohrenschmerzen",
    // })
    // await Service.create({
    //     "_id": "65343222b67e9681f937f205",
    //     "name": "Rückenschmerzen",
    // })
    // await Service.create({
    //     "_id": "65343222b67e9681f937f206",
    //     "name": "Nierenschmerzen",
    // })
    // await Service.create({
    //     "_id": "65343222b67e9681f937f207",
    //     "name": "Husten",
    // })
    // await Service.create({
    //     "_id": "65343222b67e9681f937f208",
    //     "name": "Machtlosigkeit",
    // })
    // await Service.create({
    //     "_id": "65343222b67e9681f937f209",
    //     "name": "Schwitzen",
    // })
    // await Service.create({
    //     "_id": "65343222b67e9681f937f210",
    //     "name": "Kopfschmerzen",
    // })
    // await Service.create({
    //     "_id": "65343222b67e9681f937f211",
    //     "name": "Zittern",
    // })
    // await Service.create({
    //     "_id": "65343222b67e9681f937f212",
    //     "name": "Herzklopfen",
    // })
    // await Service.create({
    //     "_id": "65343222b67e9681f937f213",
    //     "name": "Erkältung",
    // })
    // await Service.create({
    //     "_id": "65343222b67e9681f937f214",
    //     "name": "Schnupfen",
    // })
    // await Service.create({
    //     "_id": "65343222b67e9681f937f215",
    //     "name": "Fieber",
    // })
    // await Service.create({
    //     "_id": "65343222b67e9681f937f216",
    //     "name": "Bluthochdruck",
    // })
    // await Service.create({
    //     "_id": "65343222b67e9681f937f217",
    //     "name": "Schwindelgefühl",
    // })


    /* City */
    const City = require('../models/city')
    await City.deleteMany() // !!! Clear collection.
    await City.create({
        "_id": "65343222b67e9685f937f201",
        "name": "Berlin",
    })
    await City.create({
        "_id": "65343222b67e9685f937f202",
        "name": "München",
    })
    await City.create({
        "_id": "65343222b67e9685f937f203",
        "name": "Köln",
    })
    // await City.create({
    //     "_id": "65343222b67e9685f937f204",
    //     "name": "Hamburg",
    // })
    // await City.create({
    //     "_id": "65343222b67e9685f937f205",
    //     "name": "Frankfurt",
    // })
    // await City.create({
    //     "_id": "65343222b67e9685f937f206",
    //     "name": "Düsseldorf",
    // })
    // await City.create({
    //     "_id": "65343222b67e9685f937f207",
    //     "name": "Kiel",
    // })
    // await City.create({
    //     "_id": "65343222b67e9685f937f208",
    //     "name": "Stuttgart",
    // })
    // await City.create({
    //     "_id": "65343222b67e9685f937f209",
    //     "name": "Dresden",
    // })
    // await City.create({
    //     "_id": "65343222b67e9685f937f210",
    //     "name": "Mainz",
    // })
    // await City.create({
    //     "_id": "65343222b67e9685f937f211",
    //     "name": "Bochum",
    // })
    // await City.create({
    //     "_id": "65343222b67e9685f937f212",
    //     "name": "Bremen",
    // })
    // await City.create({
    //     "_id": "65343222b67e9685f937f213",
    //     "name": "Rostock",
    // })
    // await City.create({
    //     "_id": "65343222b67e9685f937f214",
    //     "name": "Hannover",
    // })
    // await City.create({
    //     "_id": "65343222b67e9685f937f215",
    //     "name": "Ulm",
    // })
    // await City.create({
    //     "_id": "65343222b67e9685f937f216",
    //     "name": "Karlsruhe",
    // })
    // await City.create({
    //     "_id": "65343222b67e9685f937f217",
    //     "name": "Nürnberg",
    // })
    // await City.create({
    //     "_id": "65343222b67e9685f937f218",
    //     "name": "Freiburg",
    // })
    // await City.create({
    //     "_id": "65343222b67e9685f937f219",
    //     "name": "Trier",
    // })
    // await City.create({
    //     "_id": "65343222b67e9685f937f220",
    //     "name": "Erfurt",
    // })


    /* Branch */
    const Branch = require('../models/branch')
    await Branch.deleteMany() // !!! Clear collection.
    await Branch.create({
        "_id": "b5343222b67e9685f937f201",
        "name": "Zahnmedizin",
    })
    await Branch.create({
        "_id": "b5343222b67e9685f937f202",
        "name": "Neurologie",
    })
    await Branch.create({
        "_id": "b5343222b67e9685f937f203",
        "name": "Urologie",
    })
    await Branch.create({
        "_id": "b5343222b67e9685f937f204",
        "name": "Allgemeinmedizin/Hausarzt",
    })
    // await Branch.create({
    //     "_id": "b5343222b67e9685f937f205",
    //     "name": "Radiologie",
    // })
    // await Branch.create({
    //     "_id": "b5343222b67e9685f937f206",
    //     "name": "Innere Medizin und Kardiologie",
    // })
    // await Branch.create({
    //     "_id": "b5343222b67e9685f937f207",
    //     "name": "Frauenheilkunde und Geburtshilfe",
    // })
    // await Branch.create({
    //     "_id": "b5343222b67e9685f937f208",
    //     "name": "Physiotherapie",
    // })
    // await Branch.create({
    //     "_id": "b5343222b67e9685f937f209",
    //     "name": "Augenheilkunde/Opthalmologie",
    // })
    // await Branch.create({
    //     "_id": "b5343222b67e9685f937f210",
    //     "name": "Orthäpedie und Unfallchirurgie",
    // })
    // await Branch.create({
    //     "_id": "b5343222b67e9685f937f211",
    //     "name": "Kinder und Jugendmedizin",
    // })
    // await Branch.create({
    //     "_id": "b5343222b67e9685f937f212",
    //     "name": "Gastroenterologie",
    // })
    // await Branch.create({
    //     "_id": "b5343222b67e9685f937f213",
    //     "name": "Osteopathie",
    // })
    // await Branch.create({
    //     "_id": "b5343222b67e9685f937f214",
    //     "name": "Hals-Nasen-Ohrenheilkunde",
    // })
    // await Branch.create({
    //     "_id": "b5343222b67e9685f937f215",
    //     "name": "Psychiatrie und Psychotherapie",
    // })
    // await Branch.create({
    //     "_id": "b5343222b67e9685f937f216",
    //     "name": "Proktologie",
    // })
    // await Branch.create({
    //     "_id": "b5343222b67e9685f937f217",
    //     "name": "Heilpraktiker",
    // })
    // await Branch.create({
    //     "_id": "b5343222b67e9685f937f218",
    //     "name": "Haut- und Geschlechtskrankheiten",
    // })
    // await Branch.create({
    //     "_id": "b5343222b67e9685f937f219",
    //     "name": "Schlafmedizin",
    // })
    // await Branch.create({
    //     "_id": "b5343222b67e9685f937f220",
    //     "name": "Logopädie",
    // })

    /* ContentCategory */
    const ContentCategory = require('../models/contentCategory')
    await ContentCategory.deleteMany() // !!! Clear collection.
    await ContentCategory.create({
        "_id": "c5343222b67e9685f937f201",
        "name": "Contact",
    })
    await ContentCategory.create({
        "_id": "c5343222b67e9685f937f202",
        "name": "About",
    })
    await ContentCategory.create({
        "_id": "c5343222b67e9685f937f203",
        "name": "Comment",
    })
    await ContentCategory.create({
        "_id": "c5343222b67e9685f937f204",
        "name": "Blog Posts",
    })


    /* Content */
    const Content = require('../models/content')
    await Content.deleteMany() // !!! Clear collection.
    await Content.create({
        "_id": "d5343222b67e9685f937f201",
        "contentCategoryId": "c5343222b67e9685f937f201",
        "title": "Contact",
        "content": "Erreichen Sie mir unter der Nummer: 0238827772",
    })
    await Content.create({
        "_id": "d5343222b67e9685f937f202",
        "contentCategoryId": "c5343222b67e9685f937f202",
        "title": "About me",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ",
    })
    await Content.create({
        "_id": "d5343222b67e9685f937f203",
        "contentCategoryId": "c5343222b67e9685f937f203",
        "title": "Nicht gut",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ",
    })
    await Content.create({
        "_id": "d5343222b67e9685f937f204",
        "contentCategoryId": "c5343222b67e9685f937f204",
        "title": "Healthy life",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ",
    })
    await Content.create({
        "_id": "d5343222b67e9685f937f205",
        "contentCategoryId": "c5343222b67e9685f937f203",
        "title": "Sports",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ",
    })
    

    // /* Doctor */

    const cityIds = [
        "65343222b67e9685f937f201",
        "65343222b67e9685f937f202",
        "65343222b67e9685f937f203",
    //     "65343222b67e9685f937f204",
    //     "65343222b67e9685f937f205",
    //     "65343222b67e9685f937f206",
    //     "65343222b67e9685f937f207",
    //     "65343222b67e9685f937f208",
    //     "65343222b67e9685f937f209",
    //     "65343222b67e9685f937f210",
    //     "65343222b67e9685f937f211",
    //     "65343222b67e9685f937f212",
    //     "65343222b67e9685f937f213",
    //     "65343222b67e9685f937f214",
    //     "65343222b67e9685f937f215",
    //     "65343222b67e9685f937f216",
    //     "65343222b67e9685f937f217",
    //     "65343222b67e9685f937f218",
    //     "65343222b67e9685f937f219",
     ]
    const branchIds = [
        "b5343222b67e9685f937f201",
        "b5343222b67e9685f937f202",
        "b5343222b67e9685f937f203",
        "b5343222b67e9685f937f204",
    //     "b5343222b67e9685f937f205",
    //     "b5343222b67e9685f937f206",
    //     "b5343222b67e9685f937f207",
    //     "b5343222b67e9685f937f208",
    //     "b5343222b67e9685f937f209",
    //     "b5343222b67e9685f937f210",
    //     "b5343222b67e9685f937f211",
    //     "b5343222b67e9685f937f212",
    //     "b5343222b67e9685f937f213",
    //     "b5343222b67e9685f937f214",
    //     "b5343222b67e9685f937f215",
    //     "b5343222b67e9685f937f216",
    //     "b5343222b67e9685f937f217",
    //     "b5343222b67e9685f937f218",
    //     "b5343222b67e9685f937f219",
    //     "b5343222b67e9685f937f220"
     ]
    const serviceIds = [
        "65343222b67e9681f937f201",
        "65343222b67e9681f937f202",
        "65343222b67e9681f937f203",
    //     "65343222b67e9681f937f204",
    //     "65343222b67e9681f937f205",
    //     "65343222b67e9681f937f206",
    //     "65343222b67e9681f937f207",
    //     "65343222b67e9681f937f208",
    //     "65343222b67e9681f937f209",
    //     "65343222b67e9681f937f210",
    //     "65343222b67e9681f937f211",
    //     "65343222b67e9681f937f212",
    //     "65343222b67e9681f937f213",
    //     "65343222b67e9681f937f214",
    //     "65343222b67e9681f937f215",
    //     "65343222b67e9681f937f216",
    //     "65343222b67e9681f937f217"
     ]
    const personName = ["Mike", "Hans", "Johnny", "Sam", "Albert", "Susanna", "Yvonne", "Hildegard", "Ingrid", "Carol", "Jessica", "Jason", "Aaron", "Marie", "Ernst", "Fabian", "Diana", "Sybille", "Lia"]
    const addresses = ["Mainzer Straße", "Winzer Straße", "Hund Straße", "Trauben Straße", "Tauben Straße", "Winsdorf Straße", "Blumen Straße", "Breiter Weg", "Roter Weg", "Südring", "Cinnamon Straße", "Kennedy Straße", "Rutherford Straße", "Weiner Straße"]
    const { genders } = require('../configs/constraints') 


    const Doctor = require('../models/doctor')
    await Doctor.deleteMany() // !!! Clear collection.

    const Patient = require('../models/patient')
    await Patient.deleteMany() // !!! Clear collection.

    // const Appointment = require('../models/appointment')
    // await Appointment.deleteMany() // !!! Clear collection.


    for(let k = 0; k < cityIds.length; k++) {
        for(let i = 0; i < branchIds.length; i++){
            for(let j = 0; j < serviceIds.length; j++){
                Doctor.create({
                    //id: branchIds[i] + i,
                    branchId: branchIds[i],
                    email: personName[((i+1) * j) + i + j + k] + "." + personName[((i+1) * j) + i + j + 1 + k] + i + j + k + "@site.com",
                    
                    password: "123456Qwe+",
                    title: "Prof",
                    languages: ["Deutsch", "Englisch", "Fransözisch"],
                    about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
                    firstName: personName[((i+1) * j) + i + j + k],
                    lastName: personName[((i+1) * j) + i + j + 1 + k],
                    street: addresses[(i+1) * j  + i + j + k] + " " + i * j  + i + j + k,
                    zipCode: 29017 + i * 10108 + j * 9355 ,
                    cityId: cityIds[k],
                    phone: "+099879777878",
                    birthDate: "1970-08-23",
                    gender: genders[j],
                    services: [serviceIds[j]]
                }).then((doctor) => {
                    Patient.create({
                        //id: value[0] + i,
                        email: personName[((i+1) * (j+2)) + i + j + 1 + k] + "." + personName[((i+1) * j) + i + j + 1 + k] + i + j + "pat@site.com",
                        
                        password: "123456Qwe+",
                        firstName: personName[((i+1) * (j+2)) + i + j + 1 + k],
                        lastName: personName[((i+1) * j) + i + j + 1 + k],
                        street: addresses[(i+1) * (j+1) + j] + " " + (i) * j  + i + j,
                        zipCode: 29018 + i * 10106 + j * 9352,
                        cityId: cityIds[k],
                        phone: "+099879123218",
                        birthDate: "1980-08-23",
                        gender: genders[j]
                    })
                    // .then((patient) => {
                    //     Appointment.create({
                    //         doctorId: doctor._id,
                    //         date: "2024-03-21",
                    //         timeStart: "13.55",
                    //         timeEnd: "14.15",
                    //         patientId: patient._id,
                    //         complaints: [complaintIds[j]],
                    //         insurance: "Compulsory"
                    //     })
                    // })
                })    
            }
        }
        
        console.log('- Appointments Added.')
    }
    


    /* Finished */
    console.log('* Synchronized.')
}