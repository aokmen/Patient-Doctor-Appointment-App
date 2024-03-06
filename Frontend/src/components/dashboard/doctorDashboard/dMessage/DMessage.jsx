import React, { useRef, useEffect, useState } from 'react';
import "./dMessage.css";
import send from "../../../../assets/send.png";
import okIcon from "../../../../assets/ok3.png";
import searchIcon from "../../../../assets/ic_baseline-search.png";
import useDataCall from '../../../../hooks/useDataCall';
import { useSelector } from 'react-redux';
import avatar from "../../../../assets/profil_image.png"
import Loading from '../../../../pages/loading/Loading';
import MessageFindPatient from './messageFindPatient/MessageFindPatient';
import LastMessagePatient from './lastMessagePatient/LastMessagePatient';
import messageImg from "../../../../assets/service-img1.png"
import messageIcon from "../../../../assets/new-message.png"
const DMessage = ({ doctorProfile}) => {
    const { loading, messages, patients } = useSelector((state) => state.data);
    const { userId } = useSelector((state) => state.auth);


    const { postData,putData } = useDataCall();
    const URL = process.env.REACT_APP_BASE_URL
    const [filteredPatients, setfilteredPatients] = useState([])
    const [patientInfo, setPatientInfo] = useState("")
    let doctorId = ""



    const messageAvatar = doctorProfile.id && `${URL}/img/${doctorProfile.id.slice(-15)}.jpg`; 
    const messageAvatar2 = patientInfo.id && `${URL}/img/${patientInfo.id.slice(-15)}.jpg`;
     


    const messageRef = useRef({
        content: ""
    });
    const messageInputRef = useRef(null); // Defining a ref to access the input element
    /* ------------------------------ handleSearch ------------------------------ */

    const handleSearch = (e) => {
        e.preventDefault();
        const filteredResults = patients.filter((patient) => {
            // Önce patient nesnesinin tanımlı olduğunu ve firstName özelliğinin var olduğunu kontrol edin
            if (!patient || !patient.firstName) return false;
    
            // Diğer özellikleri kontrol edin ve arama kriterlerine göre filtreleyin
            const nameMatch = patient.firstName.toLowerCase().includes(searchpatientRef.current.name?.toLowerCase()) || 
                              patient.lastName.toLowerCase().includes(searchpatientRef.current.name?.toLowerCase());
    
            return nameMatch;
        });
        setfilteredPatients(filteredResults);
    }

    /* ----------------------------- searchpatientRef ---------------------------- */

    const searchpatientRef = useRef({ name: "" });


    /* ---------------------------- handleInputChange --------------------------- */

    const handleInputChange = (value) => {
        messageRef.current = {
            ...messageRef.current,
            senderUserId: doctorProfile?.id,
            senderUserType:"doctor",
            senderName: `${doctorProfile?.title} ${doctorProfile?.firstName} ${doctorProfile?.lastName}`,
            receiverUserId:patientInfo?.id,
            receiverName: `${patientInfo?.firstName} ${patientInfo?.lastName}`,
            receiverUserType:"patient",
            content: value
        };
    };

    /* ---------------------------- handleInputChange2 --------------------------- */
    const handleInputChange2 = (field, value) => {
        searchpatientRef.current = {
            ...searchpatientRef.current,
            [field]: value,
        };
    };

    /* ------------------------------ handleSubmit ------------------------------ */

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!messageRef.current.content || !patientInfo || Object.keys(patientInfo).length === 0) {
        
            return;
        }
        await postData("messages", messageRef.current);
        // Scrolling the scrollbar to the bottom after sending data
        messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
        messageInputRef.current.value = "";
        putData("doctors", userId, { isChecked: false }) 
    };

    const messageContainerRef = useRef(null);

    /* --------------------- Automatically scroll scrollbar --------------------- */

    useEffect(() => {
        //Automatically scroll scrollbar to the bottom every time a message is added
        if (messageContainerRef.current) {
            messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
        }
    }, [messages,patientInfo]);

    return (

        <div className="p-message-main">
            <div className="p-message-main-left">
                <div className="p-message-main-left-title"><span>{doctorProfile?.firstName} {doctorProfile?.lastName}</span> <h1>Nachrichten</h1>
                    <span>{patientInfo?.title} {patientInfo?.firstName} {patientInfo?.lastName}</span>
                </div>
                <div className="p-message-main-show" ref={messageContainerRef}>
                    {messages?.map((item, i) => (
                        <div key={i}>
                            {
                                item.senderUserId === userId && item.receiverUserId === patientInfo.id ?
                                    <div className="p-message-main-show-left">
                                        <p className="p-message-main-content">{item.content}</p>
                                        <div className="p-message-main-show-box">
                                            <div className="p-message-main-show-img-box"><img src={messageAvatar || avatar} alt="" /></div>
                                            <div className="p-message-main-show-date-box">
                                                <p className="p-message-date">{item.createdAt.split('T')[0]}&nbsp; &nbsp; {item.createdAt.split('T')[1].substring(0, 8)}
                                                </p>
                                                <img src={okIcon} alt="okIcon" />
                                            </div>
                                        </div>
                                    </div>
                                    : null}
                            {item.senderUserId === patientInfo.id && item.receiverUserId === userId ?
                                <>
                                    <div className="p-message-main-show-right-main">
                                        <div className="p-message-main-show-right">
                                            <p className="p-message-main-content-right">{item.content}</p>
                                            <div className="p-message-main-show-box-right">

                                                <div className="p-message-main-show-date-box-right">
                                                    <img src={okIcon} alt="okIcon-right" />
                                                    <p className="p-message-date">{item.createdAt.split('T')[0]}&nbsp; &nbsp; {item.createdAt.split('T')[1].substring(0, 8)}
                                                    </p>

                                                </div>
                                                <div className="p-message-main-show-img-box-right"><img src={messageAvatar2 || avatar} alt="" /></div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                : null
                            }

                        </div>
                    ))}
                </div>
                <div className="p-message-main-write">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="p-message-main-write-box">
                            <div className="p-message-main-write-box-left">
                                <img src={messageIcon} alt="" />
                            </div>
                            {/* <input type="text" placeholder='Nachrichten...'
                                ref={messageInputRef}
                                onChange={(e) => handleInputChange(e.target.value)}
                            /> */}
                            <input
                                type="text"
                                placeholder={!patientInfo || Object.keys(patientInfo).length === 0 ? 'Bitte wählen Sie einen Arzt aus, dem Sie eine Nachricht senden möchten.' : 'Nachrichten...'}
                                ref={messageInputRef}
                                onChange={(e) => handleInputChange(e.target.value)}
                                onBlur={(e) => {
                                    if (!e.target.value.trim() && patientInfo && Object.keys(patientInfo).length !== 0) {
                                        e.target.placeholder = "Nachrichten...";
                                    }
                                }}
                            />

                            <div className="p-message-main-write-box-right">
                                <button type='submit'><img src={send} alt="" /></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="p-message-main-right">
                <form onSubmit={handleSearch}>
                    <div className="p-message-input">
                        <div className="p-message-input-box">
                            <div><img src={searchIcon} alt="searchIcon" />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    className="p-message-input-field"
                                    placeholder='Name'
                                    // ref={searchParamsRef}
                                    onChange={(e) => handleInputChange2('name', e.target.value)}
                                />
                            </div>
                            <div>
                                <button type="submit" className="p-message-input-btn" >Suchen</button>
                            </div>
                        </div>

                    </div>
                </form>

                <div className="p-message-findDoctor-main" >
                    {loading ? (
                        <Loading />
                    ) : filteredPatients?.length ? (
                        <div className="p-message-findDoctor">
                            {filteredPatients?.map((item, i) => <MessageFindPatient setPatientInfo={setPatientInfo} key={i} {...item} />)}
                        </div>

                    ) : (
                        <div className="p-message-findDoctor-info-main">
                            <div className="p-message-findDoctor-info-title">  <h1 >Nachrichten Service</h1></div>

                            <div className="p-message-findDoctor-info">

                                <div className="p-message-findDoctor-info-left">
                                    <img src={messageImg} alt="" />
                                </div>
                                <div className="p-message-findDoctor-info-right">
                                    <p className="p-message-findDoctor-info-text">

                                        Den Arzt, den Sie suchen, können Sie in der Suchmaschine finden.
                                    </p><p className="p-message-findDoctor-info-text">
                                        Unten können Sie auf Ihre neuesten Nachrichten zugreifen und schnell die Ärzte finden, von denen Sie Nachrichten gesendet und empfangen haben.
                                    </p>
                                </div>


                            </div>
                        </div>

                    )}
                </div>
                <div>
                    <LastMessagePatient setPatientInfo={setPatientInfo} messages={messages} patients={patients} doctorId={doctorId} />
                </div>
            </div>
        </div>
    );
};

export default DMessage;
