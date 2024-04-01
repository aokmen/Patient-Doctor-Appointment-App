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
    const { state } = useLocation();
    const { getData } = useDataCall();
    const { doctors, loading } = useSelector((state) => state.data);
    const [filteredDoctors, setFilteredDoctors] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [limit] = useState(8); // Her sayfada gösterilecek kart sayısı

    const searchParamsRef = useRef({
        name: state?.name || "",
        branch: "",
        city: state?.city || "",
        zipCodes: "",
    });

    useEffect(() => {
        getData("doctors");
        handleSearch();
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

    const handleSearch = () => {
        const filteredDoctor = doctors?.data?.filter(item => item.isApproved);
    
        if (filteredDoctor && filteredDoctor.length > 0) {
            const filteredResults = filteredDoctor.filter((doctor) => {
                if (!doctor) return false;
                const paramsName = (searchParamsRef.current.name || "").toLowerCase();
                const paramsCity = (searchParamsRef.current.city || "").toLowerCase();
                const firstNameMatch = doctor.firstName && doctor.firstName.toLowerCase().includes(paramsName);
                const lastNameMatch = doctor.lastName && doctor.lastName.toLowerCase().includes(paramsName);
                const branchMatch = ((doctor.branchId && doctor.branchId.name) || doctor.branch || "").toLowerCase().includes(paramsName);
                const cityMatch = ((doctor.cityId && doctor.cityId.name) || doctor.cityName || "").toLowerCase().includes(paramsCity);
                const zipCodeMatch = doctor.zipCode == paramsCity;
    
                return (firstNameMatch || lastNameMatch || branchMatch) && (cityMatch || zipCodeMatch);
            });
    
            setFilteredDoctors(filteredResults);
            setTotalPages(Math.ceil(filteredResults.length / limit));
            setCurrentPage(1);
        }
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const indexOfLastDoctor = currentPage * limit;
    const indexOfFirstDoctor = indexOfLastDoctor - limit;
    const currentDoctors = filteredDoctors.slice(indexOfFirstDoctor, indexOfLastDoctor);

    return (
        <div className="main-container">
            <div className="nav">
                <Header />
            </div>
            <div className="search-doctor-form pt-5">
                <form onSubmit={handleSubmit}>
                    <div className="input">
                        <div className="input-left-box">
                            <img src={searchIcon} alt="searchIcon" className='searchIcon' />
                            <input
                                type="text"
                                className="input-left"
                                placeholder='Name oder Fachgebiet'
                                defaultValue={state?.name}
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
            <div className="main-cardDoctor">
                {loading ? (
                    <Loading />
                ) : currentDoctors.length ? (
                    currentDoctors.map((item, i) => <CardDoctor key={i} {...item} />)
                ) : (
                    <div className="flex flex-col xl:flex-row lg:flex-row  items-center">
                        <img className=" w-[70vw] xl:w-[50vw] lg:w-[60vw] " src={searchUser} alt="" />
                        <p className='notInfo text-[35px] mt-10 text-sky-900'>Keine passenden Ärzte gefunden.</p>
                    </div>
                )}
            </div>
            <div className="search-doctor-footer">
            <div className="pagination text-center">
                {Array.from({ length: totalPages }, (_, index) => index + 1).map(page => (
                    <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`text-2xl mr-2 mb-10 rounded-xl border-2 bg-main-light-blue text-main-dark-blue focus:bg-main-blue focus:text-white hover:bg-main-light-blue2 py-1 px-2 ${currentPage === page ? 'active' : ''}`}
                    >
                        {page}
                    </button>
                ))}
            </div>
                <Footer />
            </div>
            
        </div>
    );
};

export default SearchDoctor;
