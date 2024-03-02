import React from 'react';
import "./lastMessagePatient.css";
import avatar from "../../../../../assets/profil_image.png";
import { useSelector } from 'react-redux';

const LastMessagepatient = ({setPatientInfo }) => {
    const {messages, patients} = useSelector(state=>state.data)
    const { userId } = useSelector(state => state.auth);
    const URL = process.env.REACT_APP_BASE_URL
    let messageArray= []

    const handleClick = (doctor) => {
        setPatientInfo({
            id: doctor.id,
            firstName: doctor.firstName,
            lastName: doctor.lastName
        });

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

            if (findPatient) {
                const imgPatient = findPatient.doc && `${URL}/img/${findPatient?.id.slice(-15)}.jpg`
                return (
                    <div onClick={() => handleClick(findPatient)} key={i} className="p-d-last-message">
                        <div className="p-d-last-message-img">
                            <img className="h-[60px]" src={ imgPatient || avatar} alt="" />
                        </div>
                        <div className="p-d-last-message-info">
                            <h1 className='font-bold'>{findPatient.firstName} {findPatient.lastName}</h1>
                            <p>Letzte Nachricht 14.Februar 2024</p>
                        </div>
                    </div>
                );
            } else {
                return null;
            }
        })}
    </div>
        </>
    );    
};

export default LastMessagepatient;
