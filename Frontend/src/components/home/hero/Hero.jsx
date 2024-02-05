import React from "react";
import foto from "../../../assets/doctor-patient.png";
import searchIcon from "../../../assets/ic_baseline-search.png";
import locationIcon from "../../../assets/locationIcon.png";
import "./Hero.css";
import { useNavigate } from "react-router-dom";


const Hero = () => {

  const navigate = useNavigate()

  const handleSearch = (event) => {
    event.preventDefault()
    navigate("/search")
  }

  return (
    <>
      <section className="bg-main-light-blue w-full h-[485.2px] ">
        <div className="flex ">
          <div className="grid items-center gap-[800px] grid-cols-2">
            <div className="mb-[200px] mt-[100px] mx-[120px] w-[580px] ">
              <h1 className="text-[40px] leading-[48px] font-sans font-extrabold tracking-[3px] text-main-dark-blue">
                Vereinbaren Sie ganz einfach{" "}
                <span className="text-main-blue">Ihren Termin</span>
              </h1>
              <form action="" className="mx-[-16px] ">
                <div className="input">
                  <div className="input-left-box">
                    <img
                      src={searchIcon}
                      alt="searchIcon"
                      className="searchIcon"
                    />
                    <input
                      type="text"
                      className="input-left"
                      placeholder="Name oder Fachgebiet"
                    />
                  </div>
                  <div className="input-middleLine"></div>
                  <div className="input-right-box">
                    <img
                      src={locationIcon}
                      alt="locationIcon"
                      className="locationIcon"
                    />
                    <input
                      type="text"
                      className="input-right"
                      placeholder="z.B. Berlin oder 12345"
                    />
                  </div>
                  <div className="input-right-box">
                  
                    <button type="submit" className="input-btn" onClick={(e)=>handleSearch(e)}> 
                      Suchen
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full relative">
            <img
              src={foto}
              alt="foto"
              className="rounded-lg w-[800px] mt-[-50px]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
