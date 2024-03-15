import React, { useEffect, useState, useRef } from 'react';
import useDataCall from '../../../hooks/useDataCall';
import { useSelector } from 'react-redux';
import foto from "../../../assets/doctor-patient.png";
import searchIcon from "../../../assets/ic_baseline-search.png";
import locationIcon from "../../../assets/locationIcon.png";
import "./Hero.css";
import { useNavigate } from "react-router-dom";
import SearchDoctor from '../../../pages/searchDoctor/SearchDoctor';
import Loading from '../../../pages/loading/Loading';
import HomeSection from '../homeSection/HomeSection';

const Hero = () => {
  const navigate = useNavigate();
  const { getData } = useDataCall();
  const { doctors, loading } = useSelector((state) => state.data);


  const searchParamsRef = useRef({
    name: "",
    branch: "",
    city: "",
    zipCodes: "",
  });



  const handleInputChange = (field, value) => {
    searchParamsRef.current = {
      ...searchParamsRef.current,
      [field]: value,
    };

  };

  const handleSearch = (event) => {
    event.preventDefault();
    navigate("/search",{state:searchParamsRef.current});

  };

  return (
    <>
      <section className="bg-main-light-blue w-full">
        <div className=" container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg   ">
              <h1 className=" lg:text-4xl  text-3xl leading-[48px] font-sans font-extrabold tracking-[3px] text-main-dark-blue">
                Vereinbaren Sie ganz einfach{" "}
                <span className="text-main-blue">Ihren Termin</span>
              </h1>
            </div>
            <div className="w-full mt-8   rounded-md lg:max-w-sm   ">
              <form onSubmit={handleSearch} action="" className="flex flex-col lg:flex-row ">
                <div></div>
                <div className="hero-search">
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
                      onChange={(e) => handleInputChange('name', (e.target.value).toLowerCase())}
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
                      onChange={(e) => handleInputChange('city', (e.target.value).toLowerCase())}
                    />
                  </div>
                  <div className="input-right-box">
                    <button
                      type="submit"
                      className="input-btn"
                      
                    >
                      Suchen
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="flex w-full  items-center justify-center   lg:w-1/2">
            <img
              alt="foto"
              className=" object-cover w-full h-full mt-5 mx-auto xl:mr-[-100px]  xl:mb-[120px] lg:max-w-5xl md:max-w-3xl sm:max-w-xl"
              src={foto}
            />
          </div>
        </div>
        <div><HomeSection/></div>
      </section>
 
    </>
  );
};

export default Hero;