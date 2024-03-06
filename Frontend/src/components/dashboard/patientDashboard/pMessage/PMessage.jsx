import React, { useRef, useEffect, useState } from 'react';
import "./pMessage.css";
import send from "../../../../assets/send.png";
import okIcon from "../../../../assets/ok3.png";
import searchIcon from "../../../../assets/ic_baseline-search.png";
import useDataCall from '../../../../hooks/useDataCall';
import { useSelector } from 'react-redux';
import avatar from "../../../../assets/profil_image.png"
import messageImg from "../../../../assets/service-img1.png"
import messageIcon from "../../../../assets/new-message.png"
import Loading from '../../../../pages/loading/Loading';
import MessageFindDoctor from './messageFindDoctor/MessageFindDoctor';
import LastMessageDoctor from './lastMessageDoctor/LastMessageDoctor';
const PMessage = ({ patientProfile }) => {
    const { loading, messages, doctors } = useSelector((state) => state.data);
    const { userId } = useSelector((state) => state.auth);
  
    const { postData,putData } = useDataCall();
    const URL = process.env.REACT_APP_BASE_URL
    const [filteredDoctors, setfilteredDoctors] = useState([])
    const [doctorInfo, setDoctorInfo] = useState({})
    let patientId = ""
   
    const messageAvatar = patientProfile.id && `${URL}/img/${(patientProfile?.id).slice(-15)}.jpg`
    const messageAvatar2 = doctorInfo.id && `${URL}/img/${doctorInfo?.id.slice(-15)}.jpg`;

    
    const messageRef = useRef({
        content: ""
    });
    const messageInputRef = useRef(null); // Defining a ref to access the input element
    /* ------------------------------ handleSearch ------------------------------ */

    const handleSearch = (e) => {
        e.preventDefault();
        const filteredResults = doctors.data.filter((doctor) => {
            // Önce doctor nesnesinin tanımlı olduğunu kontrol edin
            if (!doctor) return false;

            // Şimdi diğer özellikleri kontrol edin
            const NameMatch = doctor.firstName.toLowerCase().includes(searchDoctorRef.current.name?.toLowerCase()) || doctor.lastName.toLowerCase().includes(searchDoctorRef.current.name?.toLowerCase()) || ""

            return (NameMatch);
        });
        setfilteredDoctors(filteredResults)
    }

    /* ----------------------------- searchDoctorRef ---------------------------- */

    const searchDoctorRef = useRef({ name: "" });


    /* ---------------------------- handleInputChange --------------------------- */

    const handleInputChange = (value) => {
        if(doctorInfo){
        messageRef.current = {
            ...messageRef.current,
            senderUserId: patientProfile?.id,
            senderUserType: "patient",
            senderName: `${patientProfile?.firstName} ${patientProfile?.lastName}`,
            receiverUserId: doctorInfo?.id,
            receiverName: `${doctorInfo?.title} ${doctorInfo?.firstName} ${doctorInfo?.lastName}`,
            receiverUserType: "doctor",
            content: value
            }
        };
    };

    /* ---------------------------- handleInputChange2 --------------------------- */
    const handleInputChange2 = (field, value) => {
        searchDoctorRef.current = {
            ...searchDoctorRef.current,
            [field]: value,
        };
    };

    /* ------------------------------ handleSubmit ------------------------------ */

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!messageRef.current.content || !doctorInfo || Object.keys(doctorInfo).length === 0) {
        
            return;
        }
        await postData("messages", messageRef.current);
        // Scrolling the scrollbar to the bottom after sending data
        messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
        messageInputRef.current.value = "";
        messageRef.current.content = "";

        putData("patients", userId, { isChecked: false })     
    };

    const messageContainerRef = useRef(null);

    /* --------------------- Automatically scroll scrollbar --------------------- */

    useEffect(() => {
        //Automatically scroll scrollbar to the bottom every time a message is added
        if (messageContainerRef.current) {
            messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
        }
    }, [messages, doctorInfo]);

    return (

        <div className="p-message-main">
            <div className="p-message-main-left">
                <div className="p-message-main-left-title"><span>{patientProfile?.firstName} {patientProfile?.lastName}</span> <h1>Nachrichten</h1>
                    <span>{doctorInfo?.title} {doctorInfo?.firstName} {doctorInfo?.lastName}</span>
                </div>
                <div className="p-message-main-show" ref={messageContainerRef}>
                    {messages?.map((item, i) => (
                        <div key={i}>
                            {
                                item.senderUserId === userId && item.receiverUserId === doctorInfo.id ?
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
                            {item.senderUserId === doctorInfo.id && item.receiverUserId === userId ?
                                <>
                                    <div className="p-message-main-show-right-main">
                                        <div className="p-message-main-show-right">
                                            <p className="p-message-main-content-right">{item.content}</p>
                                            <div className="p-message-main-show-box-right">

                                                <div className="p-message-main-show-date-box-right">
                                                    <img src={okIcon} alt="okIcon-right" />
                                                    <p className="p-message-date-right">{item.createdAt.split('T')[0]}&nbsp; &nbsp; {item.createdAt.split('T')[1].substring(0, 8)}
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
                                placeholder={!doctorInfo || Object.keys(doctorInfo).length === 0 ? 'Bitte wählen Sie einen Arzt aus, dem Sie eine Nachricht senden möchten.' : 'Nachrichten...'}
                                ref={messageInputRef}
                                onChange={(e) => handleInputChange(e.target.value)}
                                onBlur={(e) => {
                                    if (!e.target.value.trim() && doctorInfo && Object.keys(doctorInfo).length !== 0) {
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
                    ) : filteredDoctors?.length ? (
                        <div className="p-message-findDoctor">
                            {filteredDoctors?.map((item, i) => <MessageFindDoctor setDoctorInfo={setDoctorInfo} key={i} {...item} />)}
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
                    <LastMessageDoctor setDoctorInfo={setDoctorInfo} messages={messages} doctors={doctors} patientId={patientId} />
                </div>
            </div>
        </div>
    );
};

export default PMessage;
