import React, { useEffect, useRef, useState } from 'react'
import useDataCall from '../../../../hooks/useDataCall';

import "./aProfile.css"
import profilImage from "../../../../assets/profil_image2.png"


const AProfile = ({ id, firstName, lastName, email, avatar }) => {

    const { putData, postData } = useDataCall()
    const [file, setFile] = useState(null)
    const URL = process.env.REACT_APP_BASE_URL
    let fileImage = profilImage
    console.log("id:", id);
    const patientProfileRef = useRef({

        firstName: firstName,
        lastName: lastName,
        avatar: avatar,

    })


    if (avatar) {
        const avatarSplit = avatar.split('\\')
        const avatarFindName = avatarSplit[avatarSplit.length - 1]
        fileImage = `${URL}/img/${id}-${avatarFindName}`
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
        handleInputChange("avatar", e.target.value)
    }
    useEffect(() => {

    }, [file])

    const handleSubmit = async (e) => {
        e.preventDefault();

        putData("admins", id, patientProfileRef.current);

        // İlk dosyanın FormData nesnesi oluşturuluyor
        const formData = new FormData();
        formData.append('image', file);
        formData.append('userId', id);
        // Her bir dosya için ayrı ayrı postData işlemi yapılıyor
        postData("files", formData);
    }
    return (

        <div className="a-panel-person-main">

            <div className="processbar">

            </div>

            <div className="a-panel-main-right">
                <div className="a-panel-main-right--content">

                    <form action="" id="a-uploadForm" encType="multipart/form-data" className="a-panel-person" onSubmit={handleSubmit}>
                        <div className="a-panel-person-profile">
                            <div className="a-panel-person--left">
                                <div className="a-p-input a-panel-main--profil-image">
                                    <div className="a-p-input-image">
                                        <img src={fileImage} alt="profilImage" />
                                    </div>

                                    <div className="a-panel-p-profil-img">
                                        <div className="a-panel-p-profil-img-right">

                                            <div className="a-panel-p-profil-img-right-label">
                                                <label htmlFor="file-avatar">Profilbild hochladen:</label>
                                            </div>
                                            <div className="a-panel-p-profil-img-right-input">
                                                <input type="file" id="a-avatar" name="a-avatar" accept="image/png, image/jpeg"
                                                    onChange={handleFileChange}
                                                />
                                            </div>

                                        </div>
                                    </div>


                                </div>
                                <div className="a-p-input">
                                    <label className="a-panel-p-label" htmlFor="a-p-input">Vorname</label> <input required className="a-panel-a-p-input" id="a-p-input" type="text" placeholder='Max' defaultValue={firstName} onChange={(e) => handleInputChange("firstName", e.target.value)} />
                                </div>
                                <div className="a-p-input">
                                    <label className="a-panel-p-label" htmlFor="a-p-input3">Nachname</label> <input required className="a-panel-a-p-input" id="a-p-input3" type="text" placeholder='Doe' defaultValue={lastName} onChange={(e) => handleInputChange("lastName", e.target.value)} />
                                </div>
                                <div className="a-p-input">
                                    <label className="a-panel-p-label" htmlFor="a-p-input4">Email</label> <input className="a-panel-a-p-input" id="a-p-input4" type="email" placeholder={email} onChange={(e) => handleInputChange("email", e.target.value)} readOnly />
                                </div>
                                <div className="a-p-input">
                                    <label className="a-panel-p-label" htmlFor="a-p-input5">Password</label> <input className="a-panel-a-p-input" id="a-p-input50" type="password" placeholder='****************' onChange={(e) => handleInputChange("password", e.target.value)} readOnly />
                                </div>


                            </div>



                        </div>

                        <button type="submit" className="a-panel-profile-save-btn" >Speichern</button>

                    </form>
                </div>
            </div>



        </div>

    )
}

export default AProfile