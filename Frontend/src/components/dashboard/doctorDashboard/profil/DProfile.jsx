import React, { useEffect, useRef, useState } from 'react'
import useDataCall from '../../../../hooks/useDataCall';

import "./dProfile.css"
import profilImage from "../../../../assets/profil_image2.png"



const DProfile = (doctorProfile) => {
    const { putData, postData } = useDataCall()
    const { id, avatar, firstName, lastName, email, birthDate, gender, street, zipCode, cityName, title, phone, branch, languages, website, about, complaints, doc } = doctorProfile
    const [file, setFile] = useState(null)
    const [secondFile, setSecondFile] = useState(null);
    const URL = process.env.REACT_APP_BASE_URL

    let fileImage = profilImage
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
        doc: doc || "",

    })

   if(avatar) {
    const avatarSplit = avatar.split('\\')
    const avatarFindName =avatarSplit[avatarSplit.length-1]
    fileImage = `${URL}/img/${id}-${avatarFindName}`
   }


    const handleInputChange = (field, value) => {
        doctorProfileRef.current = {
            ...doctorProfileRef.current,
            [field]: value
        }
    }

    
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        handleInputChange("avatar", e.target.value)
  
    }
    useEffect(() => {

    }, [file])

    const handleSecondFileChange = (e) => {
        setSecondFile(e.target.files[0]);
        handleInputChange("doc", e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        putData("doctors", id, doctorProfileRef.current);

        // İlk dosyanın FormData nesnesi oluşturuluyor
        const formData1 = new FormData();
        formData1.append('image', file);
        formData1.append('userId', id);

        // İkinci dosyanın FormData nesnesi oluşturuluyor
        const formData2 = new FormData();
        formData2.append('image', secondFile);
        formData2.append('userId', id);

        // Her bir dosya için ayrı ayrı postData işlemi yapılıyor
        postData("files", formData1);
        postData("files", formData2);

    }

    return (
        
        <div className="d-profile-panel-person-main mt-5">

            <div className="processbar">

            </div>

            <div className="d-profile-panel-main-right">
                <div className="d-profile-panel-main-right--content">

                    <form action="" id="dr-uploadForm" encType="multipart/form-data" className="d-profile-panel-person" onSubmit={handleSubmit}>
                        <div className="d-profile-panel-person-profile mt-10">
                            <div className="d-profile-panel-person--left">
                                <div className="d-p-input d-profile-panel-main--profil-image">
                                    <div className="d-p-input-image">
                                        <img src={fileImage} alt="profilImage" />

                                    </div>
                                    {/* <input  className="d-profile-panel-d-p-input" type="text" name='d-p-input1' placeholder='Profilbild hochladen' /> */}
                                    <div className="d-profile-panel-p-profil-img">
                                        <div className="d-profile-panel-p-profil-img-right">

                                            <div className="d-profile-panel-p-profil-img-right-label">
                                                <label htmlFor="file-avatar">Profilbild hochladen:</label>
                                            </div>
                                            <div className="d-profile-panel-p-profil-img-right-input">
                                                <input type="file" id="dr-avatar" name="dr-avatar" accept="image/png, image/jpeg"
                                                onChange={handleFileChange} 
                                                // onChange={(e) => handleInputChange("avatar", e.target.value)}
                                                />
                                            </div>

                                        </div>
                                    </div>


                                </div>
                                <div className="d-p-input">
                                    <label className="d-profile-panel-p-label" htmlFor="dr-p-input">Vorname</label> <input required className="d-profile-panel-d-p-input" id="dr-p-input" type="text" placeholder='Max' defaultValue={firstName} onChange={(e) => handleInputChange("firstName", e.target.value)} />
                                </div>
                                <div className="d-p-input">
                                    <label className="d-profile-panel-p-label" htmlFor="dr-p-input3">Nachname</label> <input required className="d-profile-panel-d-p-input" id="dr-p-input3" type="text" placeholder='Doe' defaultValue={lastName} onChange={(e) => handleInputChange("lastName", e.target.value)} />
                                </div>
                                <div className="d-p-input">
                                    <label className="d-profile-panel-p-label" htmlFor="dr-p-input4">Email</label> <input className="d-profile-panel-d-p-input" id="dr-p-input4" type="email" placeholder={email} onChange={(e) => handleInputChange("email", e.target.value)} readOnly />
                                </div>
                                <div className="d-p-input">
                                    <label className="d-profile-panel-p-label" htmlFor="dr-p-input5">Password</label> <input className="d-profile-panel-d-p-input" id="dr-p-input5" type="password" placeholder='****************' onChange={(e) => handleInputChange("password", e.target.value)} readOnly />
                                </div>


                            </div>
                            <div className="d-profile-panel-person--right">
                                <div className="d-p-input">
                                    <label className="d-profile-panel-p-label" htmlFor="dr-p-input1">Geburtstag</label> <input required className="d-profile-panel-d-p-input d-profile-panel-d-p-input-birthdate" id="dr-p-input2" type="date" name='d-p-input1' defaultValue={birthDate} onChange={(e) => handleInputChange("birthDate", e.target.value)} />
                                </div>
                                 <div className="d-p-input-radio">
                                    <label className="gender2" >Geschlecht</label>
                                    <div className="radio-gender">
                                        <div>
                                            <input required type="radio" id="dr-männlich" name="drone" defaultValue="dr-männlich" defaultChecked={gender === "Male"} />
                                            <label htmlFor="p-männlich">Männlich</label>
                                        </div>

                                        <div>
                                            <input required type="radio" id="dr-weiblich" name="drone" defaultValue="dr-weiblich" defaultChecked={gender === "Female"} />
                                            <label htmlFor="dr-weiblich">Weiblich</label>
                                        </div>

                                        <div>
                                            <input required type="radio" id="dr-divers" name="drone" defaultValue="dr-divers" defaultChecked={gender === "Others"} />
                                            <label htmlFor="dr-divers">Divers</label>
                                        </div>

                                    </div>

                                </div>

                                <div className="d-p-input">
                                    <label className="d-profile-panel-p-label" htmlFor="dr-p-input6">Straße</label> <input required className="d-profile-panel-d-p-input" id="dr-p-input6" type="text" placeholder='Lange str' defaultValue={street} onChange={(e) => handleInputChange("street", e.target.value)} />
                                </div>
                                <div className="d-p-input">
                                    <label className="d-profile-panel-p-label" htmlFor="dr-p-input7">Postleizahl</label> <input required className="d-profile-panel-d-p-input" id="dr-p-input7" type="number" placeholder='43226' defaultValue={zipCode} onChange={(e) => handleInputChange("zipCode", e.target.value)} />
                                </div>
                                <div className="d-p-input">
                                    <label className="d-profile-panel-p-label" htmlFor="dr-p-input8">Ort</label> <input required className="d-profile-panel-d-p-input" id="dr-p-input8" type="text" placeholder='München' defaultValue={cityName} onChange={(e) => handleInputChange("cityName", e.target.value)} />
                                </div>
                                <div className="d-p-input">
                                    <label className="d-profile-panel-p-label" htmlFor="dr-p-input10">Telefon</label> <input required className="d-profile-panel-d-p-input" id="dr-p-input10" type="text" placeholder='z.B. 1554212121' defaultValue={phone} onChange={(e) => handleInputChange("phone", e.target.value)} />
                                </div>

                            </div>
                            {/* style={{transform: "translateY(-70vh)"}} */}
                        </div>

                        <div className="d-profile-panel-person-profile2">
                            <div className="d-profile-panel-person--left">
                                <div className="p-input">
                                    <label className="d-profile-panel-p-label" htmlFor="dr-input9">Titel</label> <input required className="d-profile-panel-d-p-input" id="dr-input9" type="text" name='p-input1' placeholder='Dr.med' defaultValue={title} onChange={(e) => handleInputChange("title", e.target.value)}
                                    />
                                </div>
                                <div className="p-input">
                                    <label className="d-profile-panel-p-label" htmlFor="dr-input10">Telefon</label> <input required className="d-profile-panel-d-p-input" id="dr-input10" type="text" placeholder='z.B. 1554212121' defaultValue={phone} onChange={(e) => handleInputChange("phone", e.target.value)} />
                                </div>
                                <div className="p-input">
                                    <label className="d-profile-panel-p-label" htmlFor="dr-input11" >Fachgebiet</label>
                                    <input required className="d-profile-panel-d-p-input" id="dr-input11" type="text" placeholder='z.B. Augenarzt' defaultValue={branch} onChange={(e) => handleInputChange("branch", e.target.value)} />

                                    {/* <select className="d-profile-panel-d-p-input" name="branches" id="branches" onChange={(e) => handleInputChange("branches", e.target.value)} style={{marginRight:"15px"}}>
                                            <option value="">Bitte wähle eine Option</option>
                                            {branches && (branches?.map((item,i)=><option key={i} value={item.name}>{item.name}</option>))}
     
                                    </select> */}
                                </div>
                                <div className="p-input">
                                    <label className="d-profile-panel-p-label" htmlFor="dr-input12">Sprache</label> <input required className="d-profile-panel-d-p-input" id="dr-input12" type="text" placeholder='z.B. Deutsch, Englisch' defaultValue={languages} onChange={(e) => handleInputChange("languages", e.target.value)} />
                                </div>
                                <div className="p-input">
                                    <label className="d-profile-panel-p-label" htmlFor="dr-input13">Webseite</label> <input required className="d-profile-panel-d-p-input" id="dr-input13" type="text" placeholder='z.B. www.terminuns.com' defaultValue={website} onChange={(e) => handleInputChange("website", e.target.value)} />
                                </div>

                            </div>
                            <div className="d-profile-panel-person--right">
                                <div className="p-input-about">
                                    <p>Über mich</p> <textarea required name="" id="dr-textarea-about" cols="42" rows="10" placeholder=" z.B. Gesunde Augen sind das visuelle Tor zur Welt – und die Basis, um aktiv und selbstbestimmt das Leben zu genießen. Das gilt bereits für Kinder-Augen, besonders aber mit zunehmendem Alter sollte gesteigerter Wert auf eine gute Gesundheit der Augen gelegt werden..." defaultValue={about} onChange={(e) => handleInputChange("about", e.target.value)}>
                                    </textarea>
                                    {/* <button>Speichern</button> */}
                                    {/* <button type="submit" className="input-btn">Senden</button> */}
                                </div>


                            </div>
                        </div>


                        {/* <button type="submit" className="d-profile-panel-profile-save-btn" >Speichern</button> */}
                        <div className="d-profile-panel-person-profile3">
                            <div className="d-profile-panel-person--left person3">
                                <div className="p-input p-input3-1">
                                    <label className="d-profile-panel-p-label" htmlFor="p-input14">Symptome</label>
                                    <textarea required name="" id="dr-textarea-complaints" cols="50" rows="10" placeholder="z.B. Altersbedingte Makuladegeneration AMD, Augenschmerzen, Diabetische Retinopathie, Grüner Star / Glaukom, Kurzsichtigkeit / Myopie, Katarakt, Laser bei Nachsta" defaultValue={complaints} onChange={(e) => handleInputChange("complaints", e.target.value)}>
                                    </textarea>
                                </div>
                                <div className="p-input p-input3-2">
                                    <div className="dpanel-p-profil-data-upload-left">
                                        <label className="dpanel-p-label" htmlFor="p-input15">Dateien</label>
                                    </div>

                                    <div className="dpanel-p-profil-data-upload-right">
                                        <div className="dpanel-p-profil-data-upload-right-label">
                                            <label htmlFor="avatar">Laden Sie Ihre medizinischen Unterlagen hoch:</label>
                                        </div>
                                        <div className="dpanel-p-profil-data-upload-right-input">
                                            <input type="file" id="branchFile2" name="branchFile2" accept="image/png, image/jpeg" onChange={handleSecondFileChange}/>
                                        </div>
                                        
                                    </div>
                                </div>  
                                <button type="submit" className="d-profile-panel-profile-save-btn" >Speichern</button>

                            </div>

                            
                        </div>
                    </form>
                </div>
            </div>



        </div>

    )
}

export default DProfile