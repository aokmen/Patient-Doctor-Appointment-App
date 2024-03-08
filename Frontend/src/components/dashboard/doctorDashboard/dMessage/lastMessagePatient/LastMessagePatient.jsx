import React from 'react';
import "./lastMessagePatient.css";
import avatar from "../../../../../assets/profil_image.png";
import { useSelector } from 'react-redux';
import useDataCall from '../../../../../hooks/useDataCall';

const LastMessagePatient = ({ setPatientInfo }) => {
    const { messages, patients } = useSelector(state => state.data)
    const { userId } = useSelector(state => state.auth);
    const { putData } = useDataCall();
    const URL = process.env.REACT_APP_BASE_URL
    let messageArray = []
    let imgPatient = avatar
    const handleClick = (patient) => {
        setPatientInfo({
            id: patient.id,
            firstName: patient.firstName,
            lastName: patient.lastName
        });
        putData("patients", patient.id, { isChecked: true })
    };


    messages.forEach((item) => {
        messageArray.push(item.senderUserId)
        messageArray.push(item.receiverUserId)
    });


    const filteredIds = messageArray.filter(id => id !== undefined && id !== userId).reverse()

    // Set oluşturup, benzersiz kimlikleri içine alıyoruz
    const uniqueIds = new Set(filteredIds)
    const uniqueIdsArray = Array.from(uniqueIds);

    return (
        <>
            <h1 className="p-last-message-title">Meine letzten Nachrichten</h1>
            <div className="p-last-message-doctor-container">
                {uniqueIdsArray.map((element, i) => {
                    const findPatient = patients?.find(item => item.id === element);
                    const patientClassName = findPatient?.isChecked ? "p-d-last-message" : "isChecked";
                        const imgPatient = findPatient?.profilePic && `${URL}/img/${findPatient?.id.slice(-15)}.jpg`
                        const messagesReverse= messages.slice().reverse()
                        const lastDate = messagesReverse.find(item => item.senderUserId === findPatient?.id || item.receiverUserId === findPatient?.id)
                        return (
                            findPatient && (
                            <div onClick={() => handleClick(findPatient)} key={i} className={patientClassName}>
                                <div className="p-d-last-message-img">
                                    <img className="h-[60px]" src={imgPatient || avatar} alt="" />
                                </div>
                                <div className="p-d-last-message-info">
                                    <h1 className='font-bold'>{findPatient.firstName} {findPatient.lastName}</h1>
                                    <p>{lastDate.updatedAt.split('T')[0]} -- {lastDate.updatedAt.split('T')[1].substring(0, 8)}</p>
                                </div>
                            </div>
                            )
                        );
                })}
            </div>
        </>
    );
};

export default LastMessagePatient;
