import React, { useEffect, useRef, useState } from 'react'
import ProcessBar from '../processBar/ProcessBar';
import useDataCall from '../../../../hooks/useDataCall';
import "./approvalForm.css"
import profilImage from "../../../../assets/profil_image2.png"
import successImg from "../../../../assets/success.png"
import { useSelector } from 'react-redux';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ApprovalForm = (doctorProfile) => {
    const { putData, getData, postData } = useDataCall()
    const { id, avatar, doc, firstName, lastName, email, birthDate, gender, street, zipCode, cityName, title, phone, branch, languages, website, about, services } = doctorProfile
    const [count, setCount] = useState(0)
    const [file, setFile] = useState(null)
    const [secondFile, setSecondFile] = useState(null);
    const URL = process.env.REACT_APP_BASE_URL
   
    useEffect(() => {
        getData("branches")
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
        services: services || "",
        doc: doc || "",
    })
    const fileImage = `${URL}/img/${id.slice(-15)}.jpg`

    const handleInputChange = (field, value) => {
        doctorProfileRef.current = {
            ...doctorProfileRef.current,
            [field]: value
        }
    }
    const handleFileChange = (e) => {
        setFile(e.target.files[0])
        handleInputChange("avatar", e.target.value)
    }

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
        toast.success("Erfolgreiche Anmeldung. Vielen Dank für Ihre Registrierung. Wir werden Ihre Unterlagen so schnell wie möglich prüfen und Ihnen eine Rückmeldung geben.");
    }

    return (
        <div className="dpanel-person-main">

            <div className="processbar">
                <ProcessBar count={count} />
            </div>

            <div className="dpanel-main-right">
                <div className="dpanel-main-right--content">

                    <form action="" id="uploadForm" encType="multipart/form-data" className="dpanel-person" onSubmit={handleSubmit}>
                        <div className={count === 0 ? "dpanel-person-profile" : (count === 1 ? "dpanel-person-profile2" : (count >= 2 ? "dpanel-person-profile3" : null))}>
                            <div className="dpanel-person--left">
                                <div className="p-input dpanel-main--profil-image">
                                    <div className="p-input-image">
                                        <img src={fileImage || profilImage} alt="profilImage" />

                                    </div>
                                    {/* <input  className="dpanel-p-input" type="text" name='p-input1' placeholder='Profilbild hochladen' /> */}
                                    <div className="dpanel-p-profil-img">
                                        <div className="dpanel-p-profil-img-right">

                                            <div className="dpanel-p-profil-img-right-label">
                                                <label htmlFor="file-avatar">Profilbild hochladen:</label>
                                            </div>
                                            <div className="dpanel-p-profil-img-right-input">
                                                <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" onChange={(e) => handleFileChange(e)} />
                                            </div>

                                        </div>
                                    </div>


                                </div>
                                <div className="p-input">
                                    <label className="dpanel-p-label" htmlFor="p-input2">Vorname</label> <input required className="dpanel-p-input" id="p-input2" type="text" placeholder='Max' defaultValue={firstName} onChange={(e) => handleInputChange("firstName", e.target.value)} />
                                </div>
                                <div className="p-input">
                                    <label className="dpanel-p-label" htmlFor="p-input3">Nachname</label> <input required className="dpanel-p-input" id="p-input3" type="text" placeholder='Doe' defaultValue={lastName} onChange={(e) => handleInputChange("lastName", e.target.value)} />
                                </div>
                                <div className="p-input">
                                    <label className="dpanel-p-label" htmlFor="p-input4">Email</label> <input className="dpanel-p-input" id="p-input4" type="email" placeholder={email} onChange={(e) => handleInputChange("email", e.target.value)} readOnly />
                                </div>
                                <div className="p-input">
                                    <label className="dpanel-p-label" htmlFor="p-input5">Password</label> <input className="dpanel-p-input" id="p-input5" type="password" placeholder='****************' onChange={(e) => handleInputChange("password", e.target.value)} readOnly />
                                </div>


                            </div>
                            <div className="dpanel-person--right">
                                <div className="p-input">
                                    <label className="dpanel-p-label" htmlFor="p-input1">Geburtstag</label> <input required className="dpanel-p-input dpanel-p-input-birthdate" id="p-input1" type="date" name='p-input1' defaultValue={birthDate} onChange={(e) => handleInputChange("birthDate", e.target.value)} />
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
                                    <label className="dpanel-p-label" htmlFor="p-input6">Straße</label> <input required className="dpanel-p-input" id="p-input6" type="text" placeholder='Lange str' defaultValue={street} onChange={(e) => handleInputChange("street", e.target.value)} />
                                </div>
                                <div className="p-input">
                                    <label className="dpanel-p-label" htmlFor="p-input7">Postleizahl</label> <input required className="dpanel-p-input" id="p-input7" type="number" placeholder='43226' defaultValue={zipCode} onChange={(e) => handleInputChange("zipCode", e.target.value)} />
                                </div>
                                <div className="p-input">
                                    <label className="dpanel-p-label" htmlFor="p-input8">Ort</label> <input required className="dpanel-p-input" id="p-input8" type="text" placeholder='München' defaultValue={cityName} onChange={(e) => handleInputChange("cityName", e.target.value)} />
                                </div>

                            </div>
                            {/* style={{transform: "translateY(-70vh)"}} */}
                        </div>
                        <div className={count === 0 ? "dpanel-person-profile" : (count === 1 ? "dpanel-person-profile2" : (count >= 2 ? "dpanel-person-profile3" : null))}>
                            <div className="dpanel-person--left">
                                <div className="p-input">
                                    <label className="dpanel-p-label" htmlFor="p-input9">Titel</label> <input required className="dpanel-p-input" id="p-input9" type="text" name='p-input1' placeholder='Dr.med' defaultValue={title} onChange={(e) => handleInputChange("title", e.target.value)}
                                    />
                                </div>
                                <div className="p-input">
                                    <label className="dpanel-p-label" htmlFor="p-input10">Telefon</label> <input required className="dpanel-p-input" id="p-input10" type="text" placeholder='z.B. 1554212121' defaultValue={phone} onChange={(e) => handleInputChange("phone", e.target.value)} />
                                </div>
                                <div className="p-input">
                                    <label className="dpanel-p-label" htmlFor="p-input11" >Fachgebiet</label>
                                    <input required className="dpanel-p-input" id="p-input11" type="text" placeholder='z.B. Augenarzt' defaultValue={branch} onChange={(e) => handleInputChange("branch", e.target.value)} />

                                    {/* <select className="dpanel-p-input" name="branches" id="branches" onChange={(e) => handleInputChange("branches", e.target.value)} style={{marginRight:"15px"}}>
                                            <option value="">Bitte wähle eine Option</option>
                                            {branches && (branches?.map((item,i)=><option key={i} value={item.name}>{item.name}</option>))}
     
                                    </select> */}
                                </div>
                                <div className="p-input">
                                    <label className="dpanel-p-label" htmlFor="p-input12">Sprache</label> <input required className="dpanel-p-input" id="p-input12" type="text" placeholder='z.B. Deutsch, Englisch' defaultValue={languages} onChange={(e) => handleInputChange("languages", e.target.value)} />
                                </div>
                                <div className="p-input">
                                    <label className="dpanel-p-label" htmlFor="p-input13">Webseite</label> <input required className="dpanel-p-input" id="p-input13" type="text" placeholder='z.B. www.terminuns.com' defaultValue={website} onChange={(e) => handleInputChange("website", e.target.value)} />
                                </div>

                            </div>
                            <div className="dpanel-person--right">
                                <div className="p-input-about">
                                    <p>Über mich</p> <textarea required name="" id="d-textarea-about" cols="50" rows="10" placeholder=" z.B. Gesunde Augen sind das visuelle Tor zur Welt – und die Basis, um aktiv und selbstbestimmt das Leben zu genießen. Das gilt bereits für Kinder-Augen, besonders aber mit zunehmendem Alter sollte gesteigerter Wert auf eine gute Gesundheit der Augen gelegt werden..." defaultValue={about} onChange={(e) => handleInputChange("about", e.target.value)}>
                                    </textarea>

                                </div>

                            </div>
                        </div>
                        <div className={count === 0 ? "dpanel-person-profile" : (count === 1 ? "dpanel-person-profile2" : (count >= 2 ? "dpanel-person-profile3" : null))}>
                            <div className="dpanel-person--left person3">
                                <div className="p-input p-input3-1">
                                    <label className="dpanel-p-label" htmlFor="p-input14">Services</label>
                                    <textarea required name="" id="d-textarea-services" cols="50" rows="10" placeholder="z.B. Altersbedingte Makuladegeneration AMD, Augenschmerzen, Diabetische Retinopathie, Grüner Star / Glaukom, Kurzsichtigkeit / Myopie, Katarakt, Laser bei Nachsta" defaultValue={services} onChange={(e) => handleInputChange("services", e.target.value)}>
                                    </textarea>
                                </div>
                                <div className="p-input p-input3-2">
                                    <div className="dpanel-p-profil-data-upload-left">
                                        <label className="dpanel-p-label" htmlFor="p-input15">Dateien</label>
                                    </div>

                                    <div className="dpanel-p-profil-data-upload-right">
                                        <div className="dpanel-p-profil-data-upload-right-label">
                                            <label htmlFor="avatar">Bitte laden Sie medizinische Dateien nur im PDF-Format hoch:</label>
                                        </div>
                                        <div className="dpanel-p-profil-data-upload-right-input">

                                            <input type="file" id="branchFile" name="branchFile" multiple accept=".pdf" onChange={(e) => handleSecondFileChange(e)} />
                                        </div>

                                    </div>
                                </div>
                                <button type="submit" className="dpanel-profile-save-btn" >Speichern</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>


            <div className="dpanel-main-btn">
                {/* <button className= {count > 0 ? "dpanel-main-btn--left" : "dpanel-main-btn--left2"} onClick={()=>setCount(count-1)}>Vorherige Schritt</button>  */}
                {count === 3 ? (<button className="dpanel-main-btn--left" onClick={() => setCount(count - 3)}>Zurück</button>) :
                    <button className="dpanel-main-btn--left" style={{ visibility: (count > 0 || count === 2) ? "visible" : "hidden" }} onClick={() => setCount(count - 1)}>Vorherige Schritt</button>}
                {count < 2 ? <button className="dpanel-main-btn--right" onClick={() => setCount(count + 1)}>Nächster Schritt</button>
                    : <button className="dpanel-main-btn--right" onClick={() => setCount(count + 1)} style={{ visibility: count === 3 ? "hidden" : "hidden" }}>Senden</button>}
                
            </div>
            <ToastContainer />
        </div>

    )
}

export default ApprovalForm