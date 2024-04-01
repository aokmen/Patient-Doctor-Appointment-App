import React, { useEffect, useState } from 'react'
import "./pNavbar.css"
import setting from "../../../../assets/setting2.png"
import letter from "../../../../assets/letter.png"
import notification2 from "../../../../assets/notification2.png"
import help from "../../../../assets/help.png"
import logo from "../../../../assets/logo3.png"
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import useDataCall from "../../../../hooks/useDataCall";
import NotificationModal from "./NotificationModal";
import moment from "moment";

const PNavbar = () => {

  const { doctors, messages,appointments} = useSelector((state) => state.data);
    const { getSingleData, getData } = useDataCall();
    const { userId } = useSelector((state) => state.auth);
    const [showModal, setShowModal] = React.useState(false);
    
  
    useEffect(() => {
      getSingleData("appointments", userId);
      getData("notifications");
  
      // eslint-disable-next-line react-hooks/exhaustive-deps
      console.log("findAppo:",findAppo);
    }, []);
  
    // const todayDate = moment().format("YYYY-MM-DD")
    const tomorrow  = moment().add(1, 'days');
    const findAppo = appointments?.filter(item=>(item.date===tomorrow.format('YYYY-MM-DD') && item.isReadPat===false) || (item.isCancelledDr && item.isReadPat===false))
    const navigate = useNavigate();
    let findUser = [];
    let messageArray = [];
  
    messages.forEach((item) => {
      messageArray.push(item.senderUserId);
      messageArray.push(item.receiverUserId);
    });
    const uniqueIds = new Set(messageArray);
  
    const uniqueIdsArray = Array.from(uniqueIds); // Set nesnesini bir diziye dönüştür
  
    uniqueIdsArray.forEach((element) => {
      const users = doctors?.data?.filter(
        (item) => item.id === element && !item.isChecked
      );
      users && findUser.push(...users);
    });
  return (
    <div className="d-header">
       <img className="d-header-img" src={logo} alt="logo" />
      <div className="d-navbar-icons min-w-[200px]">
    
        <div onClick={() => navigate("message")} className=" relative h-[35px] w-[35px] cursor-pointer"><span className={` absolute bottom-4 left-[-12px] ${findUser?.length === 0 ? "hidden" : ""}`}>{findUser?.length}</span>
        <img src={letter} alt="letter" className="absolute top-[6.5px]"/>
        </div>
        <div  onClick={() => setShowModal(!showModal)} className=" relative cursor-pointer"><span className={` absolute bottom-4 left-[-12px] ${findAppo?.length === 0 ? "hidden" : ""}`}>{findAppo?.length}</span><img src={notification2} alt="notification2" /></div>
        <img src={help} alt="help" />
        <img src={setting} alt="setting" />

        </div>
        <NotificationModal
        showModal={showModal}
        setShowModal={setShowModal}
        notifications={findAppo}
      />
      </div>

  )
}

export default PNavbar