import React, { useEffect, useState } from 'react'
import "./searchDoctor.css"

import CardDoctor from '../../components/cardDoctor/CardDoctor'
import useDataCall from '../../hooks/useDataCall';
import { useSelector } from 'react-redux';
import Loading from '../loading/Loading';
import Footer from '../../components/footer/Footer';
import searchIcon from "../../assets/ic_baseline-search.png"
import locationIcon from "../../assets/locationIcon.png"
import Header from '../../components/header/Header';
const SearchDoctor = () => {

  const { getData } = useDataCall()
  const { doctors, loading } = useSelector((state) => state.data)


  const [searchParams, setSearchParams] = useState({
    name: "",
    branch: "",
    city: "",
    zipCodes: "",
  })
const [filteredDoctors, setfilteredDoctors] = useState([])
  useEffect(() => {
    getData("doctors")
  }, [])

  console.log("doctors", doctors);

  const handleInputChange = (field, value) => {
    setSearchParams((prevParams) => ({
      ...prevParams,
      [field]: value,
    }))
  }

  const handleSearch = (event) => {
    event.preventDefault()

    //Do not show doctor cards at startup if the search engine is empty >>>

    // if ( !searchParams.name.trim() && !searchParams.city.trim() ) { // If no search criteria are entered, set filteredDoctors to an empty array
    //   setfilteredDoctors([]);
    //   return;
    // }

    const filteredResults = doctors?.data?.filter((doctor) =>
    (doctor.firstName.toLowerCase().includes(searchParams.name.toLowerCase()) ||
      doctor.lastName.toLowerCase().includes(searchParams.name.toLowerCase()) ||
      doctor.branchId.name.toLowerCase().includes(searchParams.name.toLowerCase())) && 
      (doctor.cityId.name.toLowerCase().includes(searchParams.city.toLowerCase()) || 
      doctor.zipCode == searchParams.city))
      
      setfilteredDoctors(filteredResults)
  }

 


  return (
    <div className="main-container">
     
      <div className="nav">
        {/* <div className="header">Navbar</div> */}
        <Header/>
      </div>
      <form onSubmit={handleSearch}>
        <div className="input">
          <div className="input-left-box">
            <img src={searchIcon} alt="searchIcon" className='searchIcon' />
            <input type="text" className="input-left" placeholder='Name oder Fachgebiet'
              value={searchParams.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
            />
          </div>
          <div className="input-middleLine"></div>
          <div className="input-right-box">
            <img src={locationIcon} alt="locationIcon" className='locationIcon' />
            <input type="text" className="input-right" placeholder='z.B. Berlin oder 12345'
              value={searchParams.city}
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
}

export default SearchDoctor