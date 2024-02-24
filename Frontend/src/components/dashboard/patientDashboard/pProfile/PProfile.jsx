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
    const { id, firstName, lastName, email, birthDate, gender, street, zipCode, cityName, phone, profilePic} = patientProfile
    const [fileName, setFileName] = useState("")
    const [file, setFile] = useState(null)
    const URL = process.env.REACT_APP_BASE_URL

    // useEffect(() => {


    //     getData("branches").then(() => getData("files"))
    // }, [])

    const patientProfileRef = useRef({

        firstName: firstName,
        lastName: lastName,
        birthDate: birthDate,
        street: street ,
        zipCode: zipCode ,
        cityName: cityName,
        phone: phone,

    })
     

    // const fileImage = patientProfile.files.length > 0 ? `${URL}/img/${patientProfile.files[0].fileName}` : profilImage;
    const fileImage =  profilImage;

    // const fileNameFind = files.length > 0 ? files.filter((item) => item.fileName && item.fileName.split("-")[0] === id) : [];
    // const fileImage = files.length > 0 ? `${URL}/img/${fileNameFind[fileNameFind.length - 2].fileName}` : profilImage;

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
        
        const selectedFile = e.target.files[0]
        const name = selectedFile.name;
        setFileName(name);
         console.log("file:",name);
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        putData("patients", id, patientProfileRef.current);

        // İlk dosyanın FormData nesnesi oluşturuluyor
        // const formData1 = new FormData();
        // formData1.append('image', profilePic);


        // Her bir dosya için ayrı ayrı postData işlemi yapılıyor
        // putData("patients", formData1);
        const formData = new FormData();
        formData.append('image', file);
        formData.append('userId', id);
        // formData.append('fileName', e.target.files[0].name);
        postData("files", formData);
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
                                            <input required type="radio" id="p-männlich" name="drone" defaultValue="p-männlich"  defaultChecked={gender === "Male"} />
                                            <label htmlFor="p-männlich">Männlich</label>
                                        </div>

                                        <div>
                                            <input required type="radio" id="p-weiblich" name="drone" defaultValue="p-weiblich"  defaultChecked={gender === "Female"}  />
                                            <label htmlFor="p-weiblich">Weiblich</label>
                                        </div>

                                        <div>
                                            <input required type="radio" id="p-divers" name="drone"  defaultValue="p-divers" defaultChecked={gender === "Others"} />
                                            <label htmlFor="p-divers">Divers</label>
                                        </div>
                                            
                                    </div>

                                </div> </>: null}
  
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
                       
                                <button type="submit" className="p-panel-profile-save-btn" >Speichern</button>
                      
                    </form>
                </div>
            </div>



        </div>

    )
}

export default PProfile