import React, { useEffect, useRef, useState } from 'react'
import "./dManagement.css"
import { useSelector } from 'react-redux';
import Loading from '../../../../pages/loading/Loading';
import useDataCall from '../../../../hooks/useDataCall';
import ApprovalCard from './ApprovalCard';




const DManagement = () => {

    const { getData } = useDataCall()
    const { doctors } = useSelector((state) => state.data)
    let doctorInfo = []

    useEffect(() => {
        getData("doctors")
    }, [])


    if (doctors) {
        doctorInfo = doctors?.data?.filter((item, i) => item.files.length >= 0)
    }
    else <Loading/>




    return (

        <>


            <div className="apanel-view">


                <div className="apanel-view-doctorInfo">
                    <img src="" alt="" />
                    {doctorInfo?.map((item, i) => <ApprovalCard {...item} key={i} />)}
                </div>
            </div>


        </>

    )
}

export default DManagement