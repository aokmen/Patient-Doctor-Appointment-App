"use strict"

// SYCHRONIZATION:

module.exports = async function () {

    // return null;

    // REMOVE DATABASE 
    // const { mongoose } = require('../configs/dbConnection')
    // await mongoose.connection.dropDatabase()
    // console.log('- Database and all data DELETED!')
     

    /* Admin */
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
    

    /* Complaint */
    const Complaint = require('../models/complaint')
    await Complaint.deleteMany() // !!! Clear collection.
    await Complaint.create({
        "_id": "65343222b67e9681f937f201",
        "name": "Augenschmerzen",
    })
    await Complaint.create({
        "_id": "65343222b67e9681f937f202",
        "name": "Zahnschmerzen",
    })
    await Complaint.create({
        "_id": "65343222b67e9681f937f203",
        "name": "Beinschmerzen",
    })
    await Complaint.create({
        "_id": "65343222b67e9681f937f204",
        "name": "Ohrenschmerzen",
    })
    await Complaint.create({
        "_id": "65343222b67e9681f937f205",
        "name": "Rückenschmerzen",
    })
    await Complaint.create({
        "_id": "65343222b67e9681f937f206",
        "name": "Nierenschmerzen",
    })
    await Complaint.create({
        "_id": "65343222b67e9681f937f207",
        "name": "Husten",
    })
    await Complaint.create({
        "_id": "65343222b67e9681f937f208",
        "name": "Machtlosigkeit",
    })
    await Complaint.create({
        "_id": "65343222b67e9681f937f209",
        "name": "Schwitzen",
    })
    await Complaint.create({
        "_id": "65343222b67e9681f937f210",
        "name": "Kopfschmerzen",
    })
    await Complaint.create({
        "_id": "65343222b67e9681f937f211",
        "name": "Zittern",
    })
    await Complaint.create({
        "_id": "65343222b67e9681f937f212",
        "name": "Herzklopfen",
    })
    await Complaint.create({
        "_id": "65343222b67e9681f937f213",
        "name": "Erkältung",
    })
    await Complaint.create({
        "_id": "65343222b67e9681f937f214",
        "name": "Schnupfen",
    })
    await Complaint.create({
        "_id": "65343222b67e9681f937f215",
        "name": "Fieber",
    })
    await Complaint.create({
        "_id": "65343222b67e9681f937f216",
        "name": "Bluthochdruck",
    })
    await Complaint.create({
        "_id": "65343222b67e9681f937f217",
        "name": "Schwindelgefühl",
    })


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
    await City.create({
        "_id": "65343222b67e9685f937f204",
        "name": "Hamburg",
    })
    await City.create({
        "_id": "65343222b67e9685f937f205",
        "name": "Frankfurt",
    })
    await City.create({
        "_id": "65343222b67e9685f937f206",
        "name": "Düsseldorf",
    })
    await City.create({
        "_id": "65343222b67e9685f937f207",
        "name": "Kiel",
    })
    await City.create({
        "_id": "65343222b67e9685f937f208",
        "name": "Stuttgart",
    })
    await City.create({
        "_id": "65343222b67e9685f937f209",
        "name": "Dresden",
    })
    await City.create({
        "_id": "65343222b67e9685f937f210",
        "name": "Mainz",
    })
    await City.create({
        "_id": "65343222b67e9685f937f211",
        "name": "Bochum",
    })
    await City.create({
        "_id": "65343222b67e9685f937f212",
        "name": "Bremen",
    })
    await City.create({
        "_id": "65343222b67e9685f937f213",
        "name": "Rostock",
    })
    await City.create({
        "_id": "65343222b67e9685f937f214",
        "name": "Hannover",
    })
    await City.create({
        "_id": "65343222b67e9685f937f215",
        "name": "Ulm",
    })
    await City.create({
        "_id": "65343222b67e9685f937f216",
        "name": "Karlsruhe",
    })
    await City.create({
        "_id": "65343222b67e9685f937f216",
        "name": "Nürnberg",
    })
    await City.create({
        "_id": "65343222b67e9685f937f217",
        "name": "Freiburg",
    })
    await City.create({
        "_id": "65343222b67e9685f937f218",
        "name": "Trier",
    })
    await City.create({
        "_id": "65343222b67e9685f937f219",
        "name": "Erfurt",
    })


    /* Branch */
    const Branch = require('../models/branch')
    await Branch.deleteMany() // !!! Clear collection.
    await Branch.create({
        "_id": "65343222b67z9685f937f201",
        "name": "Zahnmedizin",
    })
    await Branch.create({
        "_id": "65343222b67z9685f937f202",
        "name": "Neurologie",
    })
    await Branch.create({
        "_id": "65343222b67z9685f937f203",
        "name": "Urologie",
    })
    await Branch.create({
        "_id": "65343222b67z9685f937f204",
        "name": "Allgemeinmedizin/Hausarzt",
    })
    await Branch.create({
        "_id": "65343222b67z9685f937f205",
        "name": "Radiologie",
    })
    await Branch.create({
        "_id": "65343222b67z9685f937f206",
        "name": "Innere Medizin und Kardiologie",
    })
    await Branch.create({
        "_id": "65343222b67z9685f937f207",
        "name": "Frauenheilkunde und Geburtshilfe",
    })
    await Branch.create({
        "_id": "65343222b67z9685f937f208",
        "name": "Physiotherapie",
    })
    await Branch.create({
        "_id": "65343222b67z9685f937f209",
        "name": "Augenheilkunde/Opthalmologie",
    })
    await Branch.create({
        "_id": "65343222b67z9685f937f210",
        "name": "Orthäpedie und Unfallchirurgie",
    })
    await Branch.create({
        "_id": "65343222b67z9685f937f211",
        "name": "Kinder und Jugendmedizin",
    })
    await Branch.create({
        "_id": "65343222b67z9685f937f212",
        "name": "Gastroenterologie",
    })
    await Branch.create({
        "_id": "65343222b67z9685f937f213",
        "name": "Osteopathie",
    })
    await Branch.create({
        "_id": "65343222b67z9685f937f214",
        "name": "Hals-Nasen-Ohrenheilkunde",
    })
    await Branch.create({
        "_id": "65343222b67z9685f937f215",
        "name": "Psychiatrie und Psychotherapie",
    })
    await Branch.create({
        "_id": "65343222b67z9685f937f216",
        "name": "Proktologie",
    })
    await Branch.create({
        "_id": "65343222b67z9685f937f216",
        "name": "Heilpraktiker",
    })
    await Branch.create({
        "_id": "65343222b67z9685f937f217",
        "name": "Haut- und Geschlechtskrankheiten",
    })
    await Branch.create({
        "_id": "65343222b67z9685f937f218",
        "name": "Schlafmedizin",
    })
    await Branch.create({
        "_id": "65343222b67z9685f937f219",
        "name": "Logopädie",
    })

    /* ContentCategory */
    const ContentCategory = require('../models/contentCategory')
    await ContentCategory.deleteMany() // !!! Clear collection.
    await ContentCategory.create({
        "_id": "65343122b67z9685f937f201",
        "name": "Contact",
    })
    await ContentCategory.create({
        "_id": "65343122b67z9685f937f202",
        "name": "About",
    })
    await ContentCategory.create({
        "_id": "65343122b67z9685f937f203",
        "name": "Comment",
    })
    await ContentCategory.create({
        "_id": "65343122b67z9685f937f204",
        "name": "Blog Posts",
    })


    /* Content */
    const Content = require('../models/content')
    await Content.deleteMany() // !!! Clear collection.
    await Content.create({
        "_id": "45343122b67z9685f937f201",
        "contentCategoryId": "65343122b67z9685f937f201",
        "title": "Contact",
        "content": "Erreichen Sie mir unter der Nummer: 0238827772",
    })
    await Content.create({
        "_id": "45343122b67z9685f937f202",
        "contentCategoryId": "65343122b67z9685f937f202",
        "title": "About me",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ",
    })
    await Content.create({
        "_id": "45343122b67z9685f937f203",
        "contentCategoryId": "65343122b67z9685f937f203",
        "title": "Nicht gut",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ",
    })
    await Content.create({
        "_id": "45343122b67z9685f937f204",
        "contentCategoryId": "65343122b67z9685f937f204",
        "title": "Healthy life",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ",
    })
    await Content.create({
        "_id": "45343122b67z9685f937f205",
        "contentCategoryId": "65343122b67z9685f937f204",
        "title": "Sports",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ",
    })
    

    /* Doctor */

    const cityIds = [
        "65343222b67e9685f937f201",
        "65343222b67e9685f937f202",
        "65343222b67e9685f937f203",
        "65343222b67e9685f937f204",
        "65343222b67e9685f937f205",
        "65343222b67e9685f937f206",
        "65343222b67e9685f937f207",
        "65343222b67e9685f937f208",
        "65343222b67e9685f937f209",
        "65343222b67e9685f937f210",
        "65343222b67e9685f937f211",
        "65343222b67e9685f937f212",
        "65343222b67e9685f937f213",
        "65343222b67e9685f937f214",
        "65343222b67e9685f937f215",
        "65343222b67e9685f937f216",
        "65343222b67e9685f937f217",
        "65343222b67e9685f937f218",
        "65343222b67e9685f937f219",
    ]
    const branchIds = [
        "65343222b67z9685f937f201",
        "65343222b67z9685f937f202",
        "65343222b67z9685f937f203",
        "65343222b67z9685f937f204",
        "65343222b67z9685f937f205",
        "65343222b67z9685f937f206",
        "65343222b67z9685f937f207",
        "65343222b67z9685f937f208",
        "65343222b67z9685f937f209",
        "65343222b67z9685f937f211",
        "65343222b67z9685f937f212",
        "65343222b67z9685f937f213",
        "65343222b67z9685f937f214",
        "65343222b67z9685f937f215",
        "65343222b67z9685f937f216",
        "65343222b67z9685f937f217",
        "65343222b67z9685f937f218",
        "65343222b67z9685f937f219",
    ]
    const complaintIds = [
        "65343222b67e9681f937f201",
        "65343222b67e9681f937f202",
        "65343222b67e9681f937f203",
        "65343222b67e9681f937f204",
        "65343222b67e9681f937f205",
        "65343222b67e9681f937f206",
        "65343222b67e9681f937f207",
        "65343222b67e9681f937f208",
        "65343222b67e9681f937f209",
        "65343222b67e9681f937f210",
        "65343222b67e9681f937f211",
        "65343222b67e9681f937f212",
        "65343222b67e9681f937f213",
        "65343222b67e9681f937f214",
        "65343222b67e9681f937f215",
        "65343222b67e9681f937f216",
        "65343222b67e9681f937f217"
    ]

    const Doctor = require('../models/doctor')
    await Doctor.deleteMany() // !!! Clear collection.

    const Patient = require('../models/patient')
    await Patient.deleteMany() // !!! Clear collection.

    const Appointment = require('../models/appointment')
    await Appointment.deleteMany() // !!! Clear collection.

    cityIds.forEach(value => {
        for(let i = 0; i <= branchIds.length; i++){
            
                Doctor.create({
                    id: branchIds[i] + i,
                    branchId: branchIds[i],
                    email: value[0]+i+"@site.com",
                    password: "123456Qwe+",
                    title: "Prof",
                    firstName: "doctor"+value[0]+i,
                    lastName: "doctor"+value[0]+i,
                    address: "adress"+value[0]+i,
                    zipCode: i + i * 9999,
                    cityId: value[0],
                    phone: "+099879777878",
                    birthDate: "1970-08-23",
                    gender: "female",
                    complaints: ["65343222b67e9681f937f201"]
                }).then((doctor) => {
                    Patient.create({
                        id: value[0] + i,
                        email: value[0]+i+"pat@site.com",
                        password: "123456Qwe+",
                        firstName: "patient"+value[0]+i,
                        lastName: "patient"+value[0]+i,
                        address: "adress"+value[0]+i,
                        zipCode: i * 10000 + 25,
                        cityId: value[0],
                        phone: "+099879123218",
                        birthDate: "1980-08-23",
                        gender: "male"
                    }).then((patient) => {
                        Appointment.create({
                            doctorId: doctor._id,
                            date: "2024-03-21",
                            timeStart: "13.55",
                            timeEnd: "14.15",
                            patientId: patient._id,
                            complaints: ["65343222b67e9681f937f208", "65343222b67e9681f937f217"],
                            insurance: "Compulsory"
                        })
                    })
            
        })
        
        console.log('- Appointments Added.')
    }
    


    /* Patient */
    /* const Patient = require('../models/patient')
    await Patient.deleteMany() // !!! Clear collection.
    
    cityIds.forEach(value => {
        for(let i in [...Array(5)]){
            Patient.create({
                id: value[0] + i,
                email: value[0]+i+"@site.com",
                password: "123456Qwe+",
                firstName: "patient"+value[0]+i,
                lastName: "patient"+value[0]+i,
                address: "adress"+value[0]+i,
                zipCode: i * 10000 + 25,
                cityId: value[0],
                phone: "+099879123218",
                birthDate: "1980-08-23",
                gender: "male"
            })
            
        } 
        
        console.log('- Patients Added.')*/
    })


    /* Token */
    







    

    /* Finished */
    console.log('* Synchronized.')
}