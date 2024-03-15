import React, { useEffect, useState, useRef } from 'react';
import "./searchDoctor.css";
import CardDoctor from '../../components/cardDoctor/CardDoctor';
import useDataCall from '../../hooks/useDataCall';
import { useSelector } from 'react-redux';
import Loading from '../loading/Loading';
import Footer from '../../components/footer/Footer';
import searchIcon from "../../assets/ic_baseline-search.png";
import locationIcon from "../../assets/locationIcon.png";
import searchUser from "../../assets/searchUser.png";
import Header from '../../components/header/Header';
import { useLocation } from 'react-router-dom';

const SearchDoctor = () => {


  const {state} = useLocation()  //Other method: URLSearchParams

  const { getData } = useDataCall();
  const { doctors, loading } = useSelector((state) => state.data);

  const [filteredDoctors, setfilteredDoctors] = useState([])

  const searchParamsRef = useRef({
    name: state?.name || "",
    branch: "",
    city: state?.city || "",
    zipCodes: "",
  });
//  const {state} = useLocation()


  // const filteredDoctorsRef = useRef([]);

  useEffect(() => {
    getData("doctors");
    handleSearch()
  }, []);

 

  const handleInputChange = (field, value) => {
    searchParamsRef.current = {
      ...searchParamsRef.current,
      [field]: value,
    };
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch();
  }

  const handleSearch = (event) => {

    
    
    if (doctors && doctors.data) {
      const filteredResults = doctors.data.filter((doctor) => {
        // Önce doctor nesnesinin tanımlı olduğunu kontrol edin
        if (!doctor) return false;
        const paramsName = (searchParamsRef.current.name).toLowerCase()
        const paramsCity = (searchParamsRef.current.city).toLowerCase()
        // Şimdi diğer özellikleri kontrol edin
        const firstNameMatch = doctor.firstName.toLowerCase().includes(paramsName || "");
        const lastNameMatch = doctor.lastName.toLowerCase().includes(paramsName || "");
        const branchMatch = doctor.branchId && doctor.branchId.name.toLowerCase().includes(paramsName || "");
        const cityMatch = doctor.cityId && doctor.cityId.name.toLowerCase().includes(paramsCity || "");
        const zipCodeMatch = doctor.zipCode == paramsCity;
  
        return (firstNameMatch || lastNameMatch || branchMatch) && (cityMatch || zipCodeMatch);
      });
  
      //console.log("filteredResults:", filteredResults)
  
      setfilteredDoctors(filteredResults);
    }
  }
  
  return (
    <div className="main-container">
      <div className="nav">
        <Header />
      </div>
      <div className="search-doctor-form mt-5">
      <form onSubmit={handleSubmit}>
        <div className="input">
          <div className="input-left-box">
            <img src={searchIcon} alt="searchIcon" className='searchIcon' />
            <input
              type="text"
              className="input-left"
              placeholder='Name oder Fachgebiet'
              defaultValue={state?.name}
              // ref={searchParamsRef}
              onChange={(e) => handleInputChange('name', e.target.value)}
            />
          </div>
          <div className="input-middleLine"></div>
          <div className="input-right-box">
            <img src={locationIcon} alt="locationIcon" className='locationIcon' />
            <input
              type="text"
              className="input-right"
              placeholder='z.B. Berlin oder 12345'
              defaultValue={state?.city}
              // ref={searchParamsRef}
              onChange={(e) => handleInputChange('city', e.target.value)}
            />
          </div>
          <div className="input-right-box">
            <button type="submit" className="input-btn" >Suchen</button>
          </div>
        </div>
      </form>
      </div>
      <div className="input-fixed"></div>
      <div className="main-cardDoctor" >
        {loading ? (
          <Loading />
        ) : filteredDoctors?.length ? (
          filteredDoctors?.map((item, i) => <CardDoctor key={i} {...item} />)
        ) : (
          <div className="flex flex-col xl:flex-row lg:flex-row  items-center">
              <img className=" w-[70vw] xl:w-[50vw] lg:w-[60vw] " src={searchUser} alt="" />
              <p className='notInfo text-[35px] mt-10 text-sky-900'>Keine passenden Ärzte gefunden.</p>
          </div>
   
        )}
      </div>
      <div className="search-doctor-footer">
        <Footer />
      </div>
    </div>
  );
};

export default SearchDoctor;