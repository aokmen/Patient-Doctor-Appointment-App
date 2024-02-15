import React, { useEffect, useRef, useState } from 'react'
import useDataCall from '../../../../../hooks/useDataCall';
import ProcessBar from '../../processBar/ProcessBar';
import "./main.css"
import DoctorOkCard from './DoctorOkCard2';
import { useSelector } from 'react-redux';
import Loading from '../../../../../pages/loading/Loading';



const Main = () => {

    const { getData } = useDataCall()
    const { doctors } = useSelector((state) => state.data)
    let doctorInfo = []

    useEffect(() => {
        getData("doctors")
    }, [])


    if (doctors) {
        doctorInfo = doctors?.data?.filter((item, i) => item.files.length > 0)
    }
    else <Loading />




    return (

        <>

            <div className="apanel-view">


                <div className="apanel-view-doctorInfo">
                    <img src="" alt="" />
                </div>
            </div>
            {doctorInfo?.map((item, i) => <DoctorOkCard {...item} key={i} />)}

        </>

    )
}

export default Main