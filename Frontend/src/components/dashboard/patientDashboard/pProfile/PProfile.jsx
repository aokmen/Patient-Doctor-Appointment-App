import React, { useEffect, useRef, useState } from 'react'
import useDataCall from '../../../../hooks/useDataCall';

import "./pProfile.css"
import profilImage from "../../../../assets/profil_image2.png"
import successImg from "../../../../assets/success.png"
import { useSelector } from 'react-redux';
import axios from 'axios';


const PProfile = (patientProfile) => {
    const { putData, getData, postData } = useDataCall()
    const { branches, files } = useSelector((state) => state.data)
    const { id, avatar, firstName, lastName, email, password, birthDate, gender, street, zipCode, cityName, title, phone, branch, languages, website, about, complaints } = patientProfile
    const [file, setFile] = useState(null)

    const URL = process.env.REACT_APP_BASE_URL

    useEffect(() => {


        getData("branches").then(() => getData("files"))
    }, [])

    const doctorProfileRef = useRef({

        avatar: avatar || "",
        firstName: firstName || "",
        lastName: lastName || "",
        birthDate: birthDate || "",
        street: street || "",
        zipCode: zipCode || "",
        cityName: cityName || "",
        title: title || "",
        phone: phone || "",
        branch: branch || "",
        languages: languages || "",
        website: website || "",
        about: about || "",
        complaints: complaints || "",

    })
     

    // const fileImage = patientProfile.files.length > 0 ? `${URL}/img/${patientProfile.files[0].fileName}` : profilImage;
    const fileImage =  profilImage;

    // const fileNameFind = files.length > 0 ? files.filter((item) => item.fileName && item.fileName.split("-")[0] === id) : [];
    // const fileImage = files.length > 0 ? `${URL}/img/${fileNameFind[fileNameFind.length - 2].fileName}` : profilImage;

    const handleInputChange = (field, value) => {
        doctorProfileRef.current = {
            ...doctorProfileRef.current,
            [field]: value
        }
    }
    const handleFileChange = (e) => {
        setFile(e.target.files[0])
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        putData("patients", id, doctorProfileRef.current);

        // İlk dosyanın FormData nesnesi oluşturuluyor
        const formData1 = new FormData();
        formData1.append('image', file);
        formData1.append('userId', id);

        // Her bir dosya için ayrı ayrı postData işlemi yapılıyor
        postData("files", formData1);
        
    }
    return (
        <div className="p-panel-person-main">

            <div className="processbar">
            
            </div>

            <div className="p-panel-main-right">
                <div className="p-panel-main-right--content">

                    <form action="" id="uploadForm" encType="multipart/form-data" className="p-panel-person" onSubmit={handleSubmit}>
                        <div className="p-panel-person-profile">
                            <div className="p-panel-person--left">
                                <div className="p-input p-panel-main--profil-image">
                                    <div className="p-input-image">
                                        <img src={fileImage} alt="profilImage" />

                                    </div>
                                    {/* <input  className="p-panel-p-input" type="text" name='p-input1' placeholder='Profilbild hochladen' /> */}
                                    <div className="p-panel-p-profil-img">
                                        <div className="p-panel-p-profil-img-right">

                                            <div className="p-panel-p-profil-img-right-label">
                                                <label htmlFor="file-avatar">Profilbild hochladen:</label>
                                            </div>
                                            <div className="p-panel-p-profil-img-right-input">
                                                <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" onChange={(e) => handleFileChange(e)} />
                                            </div>

                                        </div>
                                    </div>


                                </div>
                                <div className="p-input">
                                    <label className="p-panel-p-label" htmlFor="p-input2">Vorname</label> <input required className="p-panel-p-input" id="p-input2" type="text" placeholder='Max' defaultValue={firstName} onChange={(e) => handleInputChange("firstName", e.target.value)} />
                                </div>
                                <div className="p-input">
                                    <label className="p-panel-p-label" htmlFor="p-input3">Nachname</label> <input required className="p-panel-p-input" id="p-input3" type="text" placeholder='Doe' defaultValue={lastName} onChange={(e) => handleInputChange("lastName", e.target.value)} />
                                </div>
                                <div className="p-input">
                                    <label className="p-panel-p-label" htmlFor="p-input4">Email</label> <input className="p-panel-p-input" id="p-input4" type="email" placeholder={email} onChange={(e) => handleInputChange("email", e.target.value)} readOnly />
                                </div>
                                <div className="p-input">
                                    <label className="p-panel-p-label" htmlFor="p-input5">Password</label> <input className="p-panel-p-input" id="p-input5" type="password" placeholder='****************' onChange={(e) => handleInputChange("password", e.target.value)} readOnly />
                                </div>


                            </div>
                            <div className="p-panel-person--right">
                                <div className="p-input">
                                    <label className="p-panel-p-label" htmlFor="p-input1">Geburtstag</label> <input required className="p-panel-p-input p-panel-p-input-birthdate" id="p-input1" type="date" name='p-input1' defaultValue={birthDate} onChange={(e) => handleInputChange("birthDate", e.target.value)} />
                                </div>
                                <div className="p-input-radio">
                                    <label className="gender2" >Geschlecht</label>
                                    <div className="radio-gender">
                                        <div>
                                            <input required type="radio" id="männlich" name="drone" defaultValue="männlich" defaultChecked={gender === "Male" ? true : false} />
                                            <label htmlFor="männlich">Männlich</label>
                                        </div>

                                        <div>
                                            <input required type="radio" id="weiblich" name="drone" defaultValue="weiblich" defaultChecked={gender === "Female" ? true : false} />
                                            <label htmlFor="weiblich">Weiblich</label>
                                        </div>

                                        <div>
                                            <input required type="radio" id="divers" name="drone" defaultValue="divers" defaultChecked={gender === "Others" ? true : false} />
                                            <label htmlFor="divers">Divers</label>
                                        </div>

                                    </div>

                                </div>
                                <div className="p-input">
                                    <label className="p-panel-p-label" htmlFor="p-input6">Straße</label> <input required className="p-panel-p-input" id="p-input6" type="text" placeholder='Lange str' defaultValue={street} onChange={(e) => handleInputChange("street", e.target.value)} />
                                </div>
                                <div className="p-input">
                                    <label className="p-panel-p-label" htmlFor="p-input7">Postleizahl</label> <input required className="p-panel-p-input" id="p-input7" type="number" placeholder='43226' defaultValue={zipCode} onChange={(e) => handleInputChange("zipCode", e.target.value)} />
                                </div>
                                <div className="p-input">
                                    <label className="p-panel-p-label" htmlFor="p-input8">Ort</label> <input required className="p-panel-p-input" id="p-input8" type="text" placeholder='München' defaultValue={cityName} onChange={(e) => handleInputChange("cityName", e.target.value)} />
                                </div>
                                 <div className="p-input">
                                    <label className="p-panel-p-label" htmlFor="p-input10">Telefon</label> <input required className="p-panel-p-input" id="p-input10" type="text" placeholder='z.B. 1554212121' defaultValue={phone} onChange={(e) => handleInputChange("phone", e.target.value)} />
                                </div>

                            </div>
                            {/* style={{transform: "translateY(-70vh)"}} */}
                        </div>
                       
                                <button type="submit" className="p-panel-profile-save-btn" >Speichern</button>
                      
                    </form>
                </div>
            </div>



        </div>

    )
}

export default PProfile