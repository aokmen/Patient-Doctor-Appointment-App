import React, { useEffect, useState, useRef } from 'react';
import "./searchDoctor.css";
import CardDoctor from '../../components/cardDoctor/CardDoctor';
import useDataCall from '../../hooks/useDataCall';
import { useSelector } from 'react-redux';
import Loading from '../loading/Loading';
import Footer from '../../components/footer/Footer';
import searchIcon from "../../assets/ic_baseline-search.png";
import locationIcon from "../../assets/locationIcon.png";
import Header from '../../components/header/Header';
import { useLocation } from 'react-router-dom';

const SearchDoctor = () => {
  const { getData } = useDataCall();
  const { doctors, loading } = useSelector((state) => state.data);

  const [filteredDoctors, setfilteredDoctors] = useState([])

  const searchParamsRef = useRef({
    name: "",
    branch: "",
    city: "",
    zipCodes: "",
  });
//  const {state} = useLocation()
//  console.log(state);

  // const filteredDoctorsRef = useRef([]);

  useEffect(() => {
    getData("doctors");
  }, []);


  const handleInputChange = (field, value) => {
    searchParamsRef.current = {
      ...searchParamsRef.current,
      [field]: value,
    };
  };
  //console.log("Render:");

  const handleSearch = (event) => {
    event.preventDefault();
  
    console.log("searchParamsRef:", searchParamsRef.current);
    
    if (doctors && doctors.data) {
      const filteredResults = doctors.data.filter((doctor) => {
        // Önce doctor nesnesinin tanımlı olduğunu kontrol edin
        if (!doctor) return false;
  
        // Şimdi diğer özellikleri kontrol edin
        const firstNameMatch = doctor.firstName.toLowerCase().includes(searchParamsRef.current.name?.toLowerCase() || "");
        const lastNameMatch = doctor.lastName.toLowerCase().includes(searchParamsRef.current.name?.toLowerCase() || "");
        const branchMatch = doctor.branchId && doctor.branchId.name.toLowerCase().includes(searchParamsRef.current.name?.toLowerCase() || "");
        const cityMatch = doctor.cityId && doctor.cityId.name.toLowerCase().includes(searchParamsRef.current.city?.toLowerCase() || "");
        const zipCodeMatch = doctor.zipCode == searchParamsRef.current?.city;
  
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
      <form onSubmit={handleSearch}>
        <div className="input">
          <div className="input-left-box">
            <img src={searchIcon} alt="searchIcon" className='searchIcon' />
            <input
              type="text"
              className="input-left"
              placeholder='Name oder Fachgebiet'
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
              // ref={searchParamsRef}
              onChange={(e) => handleInputChange('city', e.target.value)}
            />
          </div>
          <div className="input-right-box">
            <button type="submit" className="input-btn" >Suchen</button>
          </div>
        </div>
      </form>
      <div className="input-fixed"></div>
      <div className="main-cardDoctor" >
        {loading ? (
          <Loading />
        ) : filteredDoctors?.length ? (
          filteredDoctors?.map((item, i) => <CardDoctor key={i} {...item} />)
        ) : (
          <p className='h-full pt-[200px] text-sky-900'>No matching doctors found.</p>
        )}
      </div>
      <div className="search-doctor-footer">
        <Footer />
      </div>
    </div>
  );
};

export default SearchDoctor;


