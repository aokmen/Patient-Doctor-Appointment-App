import React, { useRef, useState } from 'react'
import useDataCall from '../../../../../hooks/useDataCall';
import ProcessBar from '../processBar/ProcessBar';
import "./main.css"
import profilImage from "../../../../../assets/profil_image2.png"
import successImg from "../../../../../assets/success.png"


const Main = (doctorProfile) => {
    const { id, avatar,firstName, lastName, email, birthDate, gender, street, zipCode, cityName,title, phone, languages, website, about, complaints } = doctorProfile

    const [count, setCount] = useState(0)

    const { putData } = useDataCall()
    // const doctorProfileRef = useRef({
    //     firstName: "", 
    //     lastName: "", 
    //     email: "", 
    //     birthDate: "", 
    //     street: "", 
    //     zipCode: "", 
    //     cityName: "",
    //     phone: "",
    //     languages: "",
    //     website: "",
    //     about: ""
    // })
    const doctorProfileRef = useRef({

        phone: "",
        about: "",
        website: "",
   
    })


    const handleInputChange = (field, value) => {
        doctorProfileRef.current = {
            ...doctorProfileRef.current,
            [field]: value
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("doctorProfileRef:",doctorProfileRef);

        putData("doctors", id, doctorProfileRef.current)
        console.log("doctorProfileRef:",doctorProfileRef);
    }
    return (
        <div className="dpanel-person-main">

            <div className="processbar">
                <ProcessBar count={count} />
            </div>

            <div className="dpanel-main-right">
                <div className="dpanel-main-right--content">

                    <form action="" className="dpanel-person" onSubmit={handleSubmit}>
                        <div className={count === 0 ? "dpanel-person-profile" : (count === 1 ? "dpanel-person-profile2" : (count >= 2 ? "dpanel-person-profile3" : null))}>
                            <div className="dpanel-person--left">
                                <div className="p-input dpanel-main--profil-image">
                                    <div className="p-input-image">
                                        <img src={profilImage} alt="profilImage" />
                                    </div>
                                    {/* <input className="dpanel-p-input" type="text" name='p-input1' placeholder='Profilbild hochladen' /> */}
                                    <div className="dpanel-p-profil-img">
                                        <div className="dpanel-p-profil-img-right">

                                            <div className="dpanel-p-profil-img-right-label">
                                                <label htmlFor="file-avatar">Profilbild hochladen:</label>
                                            </div>
                                            <div className="dpanel-p-profil-img-right-input">
                                                <input type="file" id="file-avatar" name="avatar" accept="image/png, image/jpeg" />
                                            </div>

                                        </div>
                                    </div>


                                </div>
                                <div className="p-input">
                                    <label className="dpanel-p-label" htmlFor="p-input2">Vorname</label> <input className="dpanel-p-input" id="p-input2" type="text" placeholder='JMax' defaultValue={firstName} onChange={(e) => handleInputChange("firstName", e.target.value)} />
                                </div>
                                <div className="p-input">
                                    <label className="dpanel-p-label" htmlFor="p-input3">Nachname</label> <input className="dpanel-p-input" id="p-input3" type="text" placeholder='Doe' defaultValue={lastName} onChange={(e) => handleInputChange("lastName", e.target.value)} />
                                </div>
                                <div className="p-input">
                                    <label className="dpanel-p-label" htmlFor="p-input4">Email</label> <input className="dpanel-p-input" id="p-input4" type="email" placeholder='dr.doe@doctor.com' defaultValue={email} onChange={(e) => handleInputChange("email", e.target.value)} />
                                </div>
                                <div className="p-input">
                                    <label className="dpanel-p-label" htmlFor="p-input5">Password</label> <input className="dpanel-p-input" id="p-input5" type="password" placeholder='****************' 
                                    onChange={(e) => handleInputChange("password", e.target.value)} />
                                </div>


                            </div>
                            <div className="dpanel-person--right">
                                <div className="p-input">
                                    <label className="dpanel-p-label" htmlFor="p-input1">Geburtstag</label> <input className="dpanel-p-input dpanel-p-input-birthdate" id="p-input1" type="date" name='p-input1' defaultValue={birthDate} onChange={(e) => handleInputChange("birthDate", e.target.value)}/>
                                </div>
                                <div className="p-input-radio">
                                    <label className="gender2" >Geschlecht</label>
                                    <div className="radio-gender">
                                        <div>
                                            <input type="radio" id="männlich" name="drone" defaultValue="männlich" defaultChecked={gender === "Male" ? true : false} />
                                            <label htmlFor="männlich">Männlich</label>
                                        </div>

                                        <div>
                                            <input type="radio" id="weiblich" name="drone" defaultValue="weiblich" defaultChecked={gender === "Female" ? true : false} />
                                            <label htmlFor="weiblich">Weiblich</label>
                                        </div>

                                        <div>
                                            <input type="radio" id="divers" name="drone" defaultValue="divers" defaultChecked={gender === "Others" ? true : false} />
                                            <label htmlFor="divers">Divers</label>
                                        </div>

                                    </div>

                                </div>
                                <div className="p-input">
                                    <label className="dpanel-p-label" htmlFor="p-input6">Straße</label> <input className="dpanel-p-input" id="p-input6" type="text" placeholder='Lange str' defaultValue={street} onChange={(e) => handleInputChange("street", e.target.value)}/>
                                </div>
                                <div className="p-input">
                                    <label className="dpanel-p-label" htmlFor="p-input7">Postleizahl</label> <input className="dpanel-p-input" id="p-input7" type="number" placeholder='43226' defaultValue={zipCode} onChange={(e) => handleInputChange("zipCode", e.target.value)}/>
                                </div>
                                <div className="p-input">
                                    <label className="dpanel-p-label" htmlFor="p-input8">Ort</label> <input className="dpanel-p-input" id="p-input8" type="text" placeholder='München' defaultValue={cityName} onChange={(e) => handleInputChange("cityName", e.target.value)}/>
                                </div>

                            </div>
                            {/* style={{transform: "translateY(-70vh)"}} */}
                        </div>
                        <div className={count === 0 ? "dpanel-person-profile" : (count === 1 ? "dpanel-person-profile2" : (count >= 2 ? "dpanel-person-profile3" : null))}>
                            <div className="dpanel-person--left">
                                <div className="p-input">
                                    <label className="dpanel-p-label" htmlFor="p-input9">Titel</label> <input className="dpanel-p-input" id="p-input9" type="text" name='p-input1' placeholder='Dr.med' defaultValue={title} onChange={(e) => handleInputChange("title", e.target.value)}
                                    />
                                </div>
                                <div className="p-input">
                                    <label className="dpanel-p-label" htmlFor="p-input10">Telefon</label> <input className="dpanel-p-input" id="p-input10" type="text" placeholder='1554212121' defaultValue={phone} onChange={(e) => handleInputChange("phone", e.target.value)} />
                                </div>
                                <div className="p-input">
                                    <label className="dpanel-p-label" htmlFor="p-input11">Fachgebiet</label> <input className="dpanel-p-input" id="p-input11" type="text" placeholder='z.B. Augenarzt' />
                                </div>
                                <div className="p-input">
                                    <label className="dpanel-p-label" htmlFor="p-input12">Sprache</label> <input className="dpanel-p-input" id="p-input12" type="text" placeholder='Deutsch, Englisch' defaultValue={languages} onChange={(e) => handleInputChange("languages", e.target.value)} />
                                </div>
                                <div className="p-input">
                                    <label className="dpanel-p-label" htmlFor="p-input13">Webseite</label> <input className="dpanel-p-input" id="p-input13" type="text" placeholder='z.B. www.terminuns.com' defaultValue={website} onChange={(e) => handleInputChange("website", e.target.value)} />
                                </div>

                            </div>
                            <div className="dpanel-person--right">
                                <div className="p-input-about">
                                    <p>Über mich</p> <textarea name="" id="textarea-about" cols="50" rows="10" placeholder=" z.B. Gesunde Augen sind das visuelle Tor zur Welt – und die Basis, um aktiv und selbstbestimmt das Leben zu genießen. Das gilt bereits für Kinder-Augen, besonders aber mit zunehmendem Alter sollte gesteigerter Wert auf eine gute Gesundheit der Augen gelegt werden..." defaultValue={about} onChange={(e) => handleInputChange("about", e.target.value)}>
                                    </textarea>
                                    {/* <button>Speichern</button> */}
                                    {/* <button type="submit" className="input-btn" >Senden</button> */}
                                </div>

                            </div>
                        </div>
                        <div className={count === 0 ? "dpanel-person-profile" : (count === 1 ? "dpanel-person-profile2" : (count >= 2 ? "dpanel-person-profile3" : null))}>
                            <div className="dpanel-person--left person3">
                                <div className="p-input p-input3-1">
                                    <label className="dpanel-p-label" htmlFor="p-input14">Symptome</label>
                                    <textarea name="" id="textarea-complaints" cols="50" rows="10" placeholder="z.B. Altersbedingte Makuladegeneration AMD, Augenschmerzen, Diabetische Retinopathie, Grüner Star / Glaukom, Kurzsichtigkeit / Myopie, Katarakt, Laser bei Nachsta" onChange={(e) => handleInputChange("complaints", e.target.value)}>
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
                                            <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
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
                    : <button className="dpanel-main-btn--right" onClick={() => setCount(count + 1)} style={{ visibility: count === 3 ? "hidden" : "visible" }}>Senden</button>}
                   {count === 3 ?
                    <div className="main-content-success">

                        <div className="main-content-success-text">
                            <img src={successImg} alt="" />
                            <p>Erfolgreiche Anmeldung. Vielen Dank für Ihre Registrierung. Wir werden Ihre Unterlagen so schnell wie möglich prüfen und Ihnen eine Rückmeldung geben.</p>
                        </div>
                        <div className="main-content-success-text2"></div>
                    </div>
                    : null}
            </div>
            
        </div>

    )
}

export default Main