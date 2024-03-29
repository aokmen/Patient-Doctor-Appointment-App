import React from 'react';
import "./lastMessageDoctor.css";
import avatar from "../../../../../assets/profil_image.png";
import { useSelector } from 'react-redux';
import useDataCall from '../../../../../hooks/useDataCall';

const LastMessageDoctor = ({ setDoctorInfo }) => {
    const { messages, doctors } = useSelector(state => state.data);
    const { userId } = useSelector(state => state.auth);
    const { putData } = useDataCall();
    const URL = process.env.REACT_APP_BASE_URL
    let messageArray= []
   
    const handleClick = (doctor) => {
        setDoctorInfo({
            id: doctor.id,
            title: doctor.title,
            firstName: doctor.firstName,
            lastName: doctor.lastName,
        });
     putData("doctors", doctor.id, { isChecked: true }) 
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
    <h1 className="p-last-message-title dark:text-white">
      Meine letzten Nachrichten
    </h1>
    <div className="p-last-message-doctor-container">
      {uniqueIdsArray.map((element, i) => {
        const findDoctor = doctors?.data?.find((item) => item.id === element);
        const doctorClassName = findDoctor?.isChecked
          ? "p-d-last-message dark:border-secondary-panel-backgrounds dark:hover:bg-main-blue duration-200"
          : "isChecked";
        const imgSrc =
          findDoctor?.avatar && `${URL}/img/${findDoctor?.id.slice(-15)}.jpg`;
        const messagesReverse = messages.slice().reverse();
        const lastDate = messagesReverse.find(
          (item) =>
            item.senderUserId === findDoctor?.id ||
            item.receiverUserId === findDoctor?.id
        );
        return (
          findDoctor && (
            <div
              onClick={() => handleClick(findDoctor)}
              key={i}
              className={doctorClassName}
            >
              <div className="p-d-last-message-img">
                <img className="h-[60px]" src={imgSrc || avatar} alt="" />
              </div>
              <div className="p-d-last-message-info">
                <h1 className="font-bold dark:text-white">
                  {findDoctor.title} {findDoctor.firstName}{" "}
                  {findDoctor.lastName}
                </h1>
                <p className="dark:text-white">
                  {lastDate.updatedAt.split("T")[0]} --{" "}
                  {lastDate.updatedAt.split("T")[1].substring(0, 8)}
                </p>
              </div>
            </div>
          )
        );
      })}
    </div>
  </>
);

    
};

export default LastMessageDoctor;
