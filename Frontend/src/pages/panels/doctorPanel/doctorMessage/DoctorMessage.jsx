import React, { useEffect } from 'react'
import useDataCall from '../../../../hooks/useDataCall'
import { useSelector } from 'react-redux'
import DMessage from '../../../../components/dashboard/doctorDashboard/dMessage/DMessage'

const DoctorMessage = () => {
  const { getData,getSingleData } = useDataCall()
  const { messages} = useSelector((state) => state.data)
  const { userId, user} = useSelector((state) => state.auth)

  
  useEffect(() => {
    getData("patients")
    // getData("messages"   
     getData("doctors")
    getSingleData("messages",userId)
    // getData("messages?patientId=23423423")
  }, [])

  return (
    <div><DMessage 
    doctorProfile={user}
     doctorMessage={messages}
     /></div>
  )
}

export default DoctorMessage