import React from "react";
import aboutImage from "../../assets/about-img.png";
import patient from "../../assets/patient.png";
import arzt from "../../assets/doctor.png";
import "./about.css";
import BottomLine from "../../components/footer/BottomLine";
import Header from "../../components/header/Header";
const About = () => {
  return (
    <div className='bg-[#F1F7FE]  border-y-8 border-main-light-blue2 border-opacity-40 pt-24 pb-20'>
      <h1 className="text-main-dark-blue text-3xl font-semibold text-center pt-10 pb-10">Über uns</h1>
      <div className="flex justify-center flex-wrap">
        <div className="border-4 border-main-light-blue2 w-[700px] h-[100%] rounded-3xl my-4">
        <p className="mt-6 p-8 text-main-dark-blue">
                    <span>Online-Terminbuchung:</span> Unser Online
                    Terminvereinbarungstool bietet eine benutzerfreundliche
                    Oberfläche für eine schnelle und einfache Terminplanung
                    sowohl für Patienten als auch für Ärzte.{" "}
                    <span>Arzt Anmeldung und Arztprofilverwaltung:</span> Ärzte
                    haben die Möglichkeit, ihre Profile zu erstellen und zu
                    aktualisieren, wobei sie ihre Fachgebiete und Arbeitszeiten
                    festlegen können.{" "}
                    <span>Patientenanmeldung und Profilverwaltung:</span>
                    Wir bieten Dienstleistungen zur Erstellung und
                    Aktualisierung von Patientenakten, wobei
                    Gesundheitsgeschichte und persönliche Informationen sicher
                    im Patientenprofil aufbewahrt werden.{" "}
                    <span>Kommunikation zwischen Arzt und Patient:</span> Unsere
                    Plattform ermöglicht eine effektive Kommunikation zwischen
                    Arzt und Patient durch verschiedene Optionen wie
                    Nachrichtenaustausch oder Videoanrufe. Fragen können sowohl
                    vor als auch nach dem Termin geklärt werden.
                    <span>Benachrichtigungs- und Erinnerungsdienst:</span> Mit
                    unserem Dienst erhalten Sie Erinnerungsnachrichten am Tag
                    des Termins sowie sofortige Benachrichtigungen über
                    Terminänderungen oder -stornierungen.{" "}
                    <span>
                      Bewertung und Kommentare von Ärzten durch Patienten:
                    </span>{" "}
                    Patienten haben die Möglichkeit, ihre Ärzte zu bewerten und
                    Kommentare abzugeben. Zudem können sie Rückmeldungen anderer
                    Patienten einsehen.{" "}
                    <span>Datensicherheit und Datenschutz:</span> Die Sicherheit
                    und Vertraulichkeit Ihrer Patientendaten sind für uns von
                    höchster Priorität. Wir wenden Verschlüsselungs- und
                    Schutzprotokolle für alle Datenübertragungen an.
                  </p>
   
                  <p className="px-8 text-main-dark-blue">
                    Wir sind stolz darauf, Ihnen eine innovative und sichere
                    Plattform für die Gesundheitsversorgung zu bieten. Bei
                    Fragen stehen wir Ihnen jederzeit zur Verfügung.
                  </p>
                  <h1 className="p-8 font-bold text-main-dark-blue">Terminuns Team</h1>
        </div>
        <div>
  
        <img src={aboutImage} alt="" />
        </div>
      </div>
      {/* <div className="bg-main-light-blue pt-60 w-full h-full py-2 lg:mt-[-40px] sm:py-32 "  id="about">
        <div className="mx-auto m-2  px-0 grid grid-flow-col-dense ">
          <div className="mx-auto lg:flex lg:justify-between grid max-w-xl items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:ml-[-60px] lg:max-w-none lg:grid-cols-2">
            <div className="grid grid-col w-full h-full  border-2 border-main-light-blue2   overflow-hidden rounded-2xl  px-6 pb-9   sm:px-12  lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <div className="font-sans  text-main-dark-blue ">
                <div className="grid ">
                  {" "}
                  <div className="flex  justify-center ">
                    <h3 className=" p-2 border bg-main-light-blue2 rounded-xl">
                      Herzlich willkommen auf der Website der Patient Doctor
                      Appointment App!
                    </h3>
                  </div>
                
                </div>

                <div className="leading-[30px] font-medium	">
                  <p className="mt-6 p-4">
                    <span>Online-Terminbuchung:</span> Unser Online
                    Terminvereinbarungstool bietet eine benutzerfreundliche
                    Oberfläche für eine schnelle und einfache Terminplanung
                    sowohl für Patienten als auch für Ärzte.{" "}
                    <span>Arzt Anmeldung und Arztprofilverwaltung:</span> Ärzte
                    haben die Möglichkeit, ihre Profile zu erstellen und zu
                    aktualisieren, wobei sie ihre Fachgebiete und Arbeitszeiten
                    festlegen können.{" "}
                    <span>Patientenanmeldung und Profilverwaltung:</span>
                    Wir bieten Dienstleistungen zur Erstellung und
                    Aktualisierung von Patientenakten, wobei
                    Gesundheitsgeschichte und persönliche Informationen sicher
                    im Patientenprofil aufbewahrt werden.{" "}
                    <span>Kommunikation zwischen Arzt und Patient:</span> Unsere
                    Plattform ermöglicht eine effektive Kommunikation zwischen
                    Arzt und Patient durch verschiedene Optionen wie
                    Nachrichtenaustausch oder Videoanrufe. Fragen können sowohl
                    vor als auch nach dem Termin geklärt werden.
                    <span>Benachrichtigungs- und Erinnerungsdienst:</span> Mit
                    unserem Dienst erhalten Sie Erinnerungsnachrichten am Tag
                    des Termins sowie sofortige Benachrichtigungen über
                    Terminänderungen oder -stornierungen.{" "}
                    <span>
                      Bewertung und Kommentare von Ärzten durch Patienten:
                    </span>{" "}
                    Patienten haben die Möglichkeit, ihre Ärzte zu bewerten und
                    Kommentare abzugeben. Zudem können sie Rückmeldungen anderer
                    Patienten einsehen.{" "}
                    <span>Datensicherheit und Datenschutz:</span> Die Sicherheit
                    und Vertraulichkeit Ihrer Patientendaten sind für uns von
                    höchster Priorität. Wir wenden Verschlüsselungs- und
                    Schutzprotokolle für alle Datenübertragungen an.
                  </p>
                  <br />
                  <p>
                    Wir sind stolz darauf, Ihnen eine innovative und sichere
                    Plattform für die Gesundheitsversorgung zu bieten. Bei
                    Fragen stehen wir Ihnen jederzeit zur Verfügung.
                  </p>
                </div>

                <div className="grid">
                  
                  <div className="  flex  justify-end">
                    {" "}
                    <h3 className=" text-center mt-4 p-2 font-extrabold sm:text-xl   border bg-main-light-blue2 rounded-xl">
                      Terminuns Team
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:pr-8">
              <img
                src={aboutImage}
                alt="about"
                className="relative  top-[20px]  inset-0  overflow-hidden rounded-3xl bg-main-light-blue px-6  pb-9 pt-10  sm:px-12 lg:max-w-xl lg:px-2 lg:pb-4 xl:px-8 xl:pb-10"
              />
            </div>
          </div>
        </div>
      </div>
      <BottomLine/>
     */}
     </div>
  );
};

export default About;
