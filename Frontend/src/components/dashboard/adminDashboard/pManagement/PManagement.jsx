
import React, { useEffect, useRef, useState } from 'react'
import "./pManagement.css"
import { useSelector } from 'react-redux';
import Loading from '../../../../pages/loading/Loading';
import useDataCall from '../../../../hooks/useDataCall';
import PManagementCard from './PManagementCard';

const PManagement = () => {

  const { getData } = useDataCall()
  const { patients } = useSelector((state) => state.data)


  useEffect(() => {
      getData("patients")
  }, [])
console.log("patients:",patients);
  return (
    <>


            <div className="apanel-p-view">


                <div className="apanel-p-view-patientInfo">
                  
                    {patients ? patients?.map((item, i) => <PManagementCard {...item} key={i} />):<Loading/>}
                </div>
            </div>


        </>
  )
}

export default PManagement