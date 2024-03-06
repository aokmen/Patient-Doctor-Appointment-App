import React, { useEffect, useRef, useState } from 'react'
import useDataCall from '../../../../hooks/useDataCall';

import "./pProfile.css"
import profilImage from "../../../../assets/profil_image2.png"
import successImg from "../../../../assets/success.png"
import { useSelector } from 'react-redux';
import axios from 'axios';


const PProfile = (patientProfile) => {
    const { putData, postData } = useDataCall()

    const { id, firstName, lastName, email, birthDate, gender, street, zipCode, cityName, phone, profilePic } = patientProfile
    const [file, setFile] = useState(null)
    const URL = process.env.REACT_APP_BASE_URL
    let fileImage = profilImage
    const patientProfileRef = useRef({

        firstName: firstName,
        lastName: lastName,
        birthDate: birthDate,
        street: street,
        zipCode: zipCode,
        cityName: cityName,
        phone: phone,
        profilePic: profilePic,

    })

    if (profilePic) {
        fileImage = `${URL}/img/${id.slice(-15)}.jpg`
    }

    const handleInputChange = (field, value) => {
        patientProfileRef.current = {
            ...patientProfileRef.current,
            [field]: value
        }
    }
    // const handleFileChange = (e) => {
    //     setFile(e.target.files[0])
    //     console.log("file:",file);
    // }
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        handleInputChange("profilePic", e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        putData("patients", id, patientProfileRef.current);

        // İlk dosyanın FormData nesnesi oluşturuluyor
        const formData = new FormData();
        formData.append('image', file);
        formData.append('userId', id);
        // Her bir dosya için ayrı ayrı postData işlemi yapılıyor
        postData("files", formData);

        window.location.reload();
    }
    return (
        <div className="p-panel-person-main">

            <div className="processbar">

            </div>

            <div className="p-panel-main-right">
                <div className="p-panel-main-right--content">

                    <form action="" id="p-uploadForm" encType="multipart/form-data" className="p-panel-person" onSubmit={handleSubmit}>
                        <div className="p-panel-person-profile">
                            <div className="p-panel-person--left">
                                <div className="p-p-input p-panel-main--profil-image">
                                    <div className="p-p-input-image">
                                        <img src={fileImage} alt="profilImage" />
                                    </div>
                                    {/* <input  className="p-panel-p-p-input" type="text" name='p-p-input1' placeholder='Profilbild hochladen' /> */}
                                    <div className="p-panel-p-profil-img">
                                        <div className="p-panel-p-profil-img-right">

                                            <div className="p-panel-p-profil-img-right-label">
                                                <label htmlFor="file-avatar">Profilbild hochladen:</label>
                                            </div>
                                            <div className="p-panel-p-profil-img-right-input">
                                                <input type="file" id="p-avatar" name="p-avatar" accept="image/png, image/jpeg"
                                                    onChange={handleFileChange}
                                                />
                                            </div>

                                        </div>
                                    </div>


                                </div>
                                <div className="p-p-input">
                                    <label className="p-panel-p-label" htmlFor="p-p-input">Vorname</label> <input required className="p-panel-p-p-input" id="p-p-input" type="text" placeholder='Max' defaultValue={firstName} onChange={(e) => handleInputChange("firstName", e.target.value)} />
                                </div>
                                <div className="p-p-input">
                                    <label className="p-panel-p-label" htmlFor="p-p-input3">Nachname</label> <input required className="p-panel-p-p-input" id="p-p-input3" type="text" placeholder='Doe' defaultValue={lastName} onChange={(e) => handleInputChange("lastName", e.target.value)} />
                                </div>
                                <div className="p-p-input">
                                    <label className="p-panel-p-label" htmlFor="p-p-input4">Email</label> <input className="p-panel-p-p-input" id="p-p-input4" type="email" placeholder={email} onChange={(e) => handleInputChange("email", e.target.value)} readOnly />
                                </div>
                                <div className="p-p-input">
                                    <label className="p-panel-p-label" htmlFor="p-p-input5">Password</label> <input className="p-panel-p-p-input" id="p-p-input5" type="password" placeholder='****************' onChange={(e) => handleInputChange("password", e.target.value)} readOnly />
                                </div>


                            </div>
                            <div className="p-panel-person--right">
                                <div className="p-p-input">
                                    <label className="p-panel-p-label" htmlFor="p-p-input1">Geburtstag</label> <input required className="p-panel-p-p-input p-panel-p-p-input-birthdate" id="p-p-input2" type="date" name='p-p-input1' defaultValue={birthDate} onChange={(e) => handleInputChange("birthDate", e.target.value)} />
                                </div>
                                {gender ? <> <div className="p-p-input-radio">
                                    <label className="gender2" >Geschlecht</label>
                                    <div className="radio-gender">
                                        <div>
                                            <input required type="radio" id="p-männlich" name="drone" defaultValue="p-männlich" defaultChecked={gender === "Male"} />
                                            <label htmlFor="p-männlich">Männlich</label>
                                        </div>

                                        <div>
                                            <input required type="radio" id="p-weiblich" name="drone" defaultValue="p-weiblich" defaultChecked={gender === "Female"} />
                                            <label htmlFor="p-weiblich">Weiblich</label>
                                        </div>

                                        <div>
                                            <input required type="radio" id="p-divers" name="drone" defaultValue="p-divers" defaultChecked={gender === "Others"} />
                                            <label htmlFor="p-divers">Divers</label>
                                        </div>

                                    </div>

                                </div> </> : null}

                                <div className="p-p-input">
                                    <label className="p-panel-p-label" htmlFor="p-p-input6">Straße</label> <input required className="p-panel-p-p-input" id="p-p-input6" type="text" placeholder='Lange str' defaultValue={street} onChange={(e) => handleInputChange("street", e.target.value)} />
                                </div>
                                <div className="p-p-input">
                                    <label className="p-panel-p-label" htmlFor="p-p-input7">Postleizahl</label> <input required className="p-panel-p-p-input" id="p-p-input7" type="number" placeholder='43226' defaultValue={zipCode} onChange={(e) => handleInputChange("zipCode", e.target.value)} />
                                </div>
                                <div className="p-p-input">
                                    <label className="p-panel-p-label" htmlFor="p-p-input8">Ort</label> <input required className="p-panel-p-p-input" id="p-p-input8" type="text" placeholder='München' defaultValue={cityName} onChange={(e) => handleInputChange("cityName", e.target.value)} />
                                </div>
                                <div className="p-p-input">
                                    <label className="p-panel-p-label" htmlFor="p-p-input10">Telefon</label> <input required className="p-panel-p-p-input" id="p-p-input10" type="text" placeholder='z.B. 1554212121' defaultValue={phone} onChange={(e) => handleInputChange("phone", e.target.value)} />
                                </div>

                            </div>
                            {/* style={{transform: "translateY(-70vh)"}} */}
                        </div>
                        <div className="p-panel-profile-save-main-btn"><button type="submit" className="p-panel-profile-save-btn" >Speichern</button></div>
                        

                    </form>
                </div>
            </div>



        </div>

    )
}

export default PProfile