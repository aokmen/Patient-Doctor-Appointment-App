import React from "react";
import logo_cal from "../../../assets/calendar.png";
import happy from "../../../assets/happy.png";
import security from "../../../assets/security.png";
import "./HomeSection.css";
const HomeSection = () => {
  return (
    <div className="bg-main-dark-blue w-full min-h-[350px] mt-[-40px]">
      <h1 className="text-main-light-blue text-[40px] text-center 2xl:text-left 2xl:ml-32 p-5">
        Warum Sie uns{" "}
        <span className="text-main-light-blue2 font-medium">wählen sollten?</span>
      </h1>
      <div className="flex flex-row justify-center items-center h-full flex-wrap ">
        <div className="w-[400px] sm:w-[500px] h-[220px] p-3">
          <div className=" flex gap-4 justify-center w-[350px] sm:w-[400px]">
            <img src={logo_cal} alt="" />
            <h2 className="text-2xl mt-2 font-bold text-main-light-blue ">
              Einfaches Terminsystem
            </h2>
          </div>
          <p className="text-white sm:px-10 w-[370px] sm:w-[470px] mt-5">
            Unser Online-Terminsystem ermöglicht es Patienten und Ärzten,
            schneller und einfacher miteinander in Kontakt zu treten. Durch
            ein einfaches Terminsystem erleichtern wir eine effiziente
            Verbindung zwischen Patienten und Ärzten.
          </p>
        </div>
        <div className=" w-[400px] sm:w-[500px] h-[220px] p-3">
          <div className=" flex gap-4 justify-center w-[350px] sm:w-[400px]">
            <img src={happy} alt="" />
            <h2 className="text-2xl mt-2 font-bold text-main-light-blue ">
            Kundenzufriedenheit
            </h2>
          </div>
          <p className="text-white sm:px-10 w-[370px] sm:w-[470px] mt-2">
              Wir konzentrieren uns auf hohe Qualität und Kundenzufriedenheit.
              Wir entwickeln uns ständig weiter und legen großen Wert auf die
              Benutzererfahrung, um erstklassige Gesundheitsdienstleistungen zu
              bieten.
          </p>
        </div>
        <div className="w-[400px] sm:w-[500px] h-[220px] p-3">
          <div className=" flex gap-4 justify-center w-[350px] sm:w-[400px]">
            <img src={security} alt="" />
            <h2 className="text-2xl mt-2 font-bold text-main-light-blue ">
            Sicherheit
            </h2>
          </div>
          <p className="text-white sm:px-10 w-[370px] sm:w-[470px] mt-3">
            Ihre persönlichen Informationen werden sicher aufbewahrt, und wir
            setzen moderne Sicherheitsstandards konsequent um. Sie können
            sicher sein, dass Ihre Gesundheit in guten Händen ist.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;