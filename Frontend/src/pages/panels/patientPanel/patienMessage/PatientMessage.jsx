import React, { useEffect } from 'react'
import PMessage from '../../../../components/dashboard/patientDashboard/pMessage/PMessage'
import useDataCall from '../../../../hooks/useDataCall'
import { useSelector } from 'react-redux'

const PatientMessage = () => {
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
    <div><PMessage 
    patientProfile={user}
     patientMessage={messages}

     /></div>
  )
}

export default PatientMessage