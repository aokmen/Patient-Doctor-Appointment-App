import React from "react";
import logo_cal from "../../../assets/calendar.png";
import happy from "../../../assets/happy.png";
import security from "../../../assets/security.png";
import "./HomeSection.css";
const HomeSection = () => {
  return (
    <div className="bg-main-dark-blue w-full h-[350px]   ">
      <h1 className="mx-[100px] my-[10px] text-white font-normal text-[40px] tracking-widest  ">
        Warum Sie uns{" "}
        <span className="text-main-light-blue font-medium">wählen sollten?</span>
      </h1>
      <div>
        <div className="grid grid-cols-3">
          <div className="mx-20 my-10">
            <div className=" flex gap-4 mx-10">
              <img src={logo_cal} alt="" />
              <h2 className=" text-2xl mt-2 font-bold text-main-light-blue ">
                Einfaches Terminsystem
              </h2>
            </div>

            <p className="text-white px-20">
              Unser Online-Terminsystem ermöglicht es Patienten und Ärzten,
              schneller und einfacher miteinander in Kontakt zu treten. Durch
              ein einfaches Terminsystem erleichtern wir eine effiziente
              Verbindung zwischen Patienten und Ärzten.
            </p>
          </div>
          <div id="verticle"></div>
          <div className="mx-20 my-10 ">
            <div className="flex gap-4 mx-10 ">
              <img src={happy} alt="happy" />
              <h2 className=" text-2xl mt-2 font-bold text-main-light-blue ">
                Kundenzufriedenheit
              </h2>
            </div>

            <p className="text-white px-20 ">
              Wir konzentrieren uns auf hohe Qualität und Kundenzufriedenheit.
              Wir entwickeln uns ständig weiter und legen großen Wert auf die
              Benutzererfahrung, um erstklassige Gesundheitsdienstleistungen zu
              bieten.
            </p>
          </div>
          <div id="verticle2"></div>
          <div className="mx-20 my-10">
            <div className="flex gap-4 mx-10 ">
              <img src={security} alt="secruity" />
              <h2 className=" text-2xl mt-2 font-bold text-main-light-blue ">
                Sicherheit
              </h2>
            </div>

            <p className="text-white px-20">
              Ihre persönlichen Informationen werden sicher aufbewahrt, und wir
              setzen moderne Sicherheitsstandards konsequent um. Sie können
              sicher sein, dass Ihre Gesundheit in guten Händen ist.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
