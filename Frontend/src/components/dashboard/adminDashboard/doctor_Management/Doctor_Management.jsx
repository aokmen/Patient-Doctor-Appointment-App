import React, { useEffect, useRef, useState } from 'react'
import "./doctor_Management.css"
import Doctor_Approval_Card from './Doctor_Approval_Card';
import { useSelector } from 'react-redux';
import Loading from '../../../../pages/loading/Loading';
import useDataCall from '../../../../hooks/useDataCall';




const Doctor_Management = () => {

    const { getData } = useDataCall()
    const { doctors } = useSelector((state) => state.data)
    let doctorInfo = []

    useEffect(() => {
        getData("doctors")
    }, [])


    if (doctors) {
        doctorInfo = doctors?.data?.filter((item, i) => item.files.length > 0)
    }
    else <Loading/>




    return (

        <>

            <div className="apanel-view">


                <div className="apanel-view-doctorInfo">
                    <img src="" alt="" />
                </div>
            </div>
            {doctorInfo?.map((item, i) => <Doctor_Approval_Card {...item} key={i} />)}

        </>

    )
}

export default Doctor_Management