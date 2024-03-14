import React, { useEffect } from 'react'
import PProfile from '../../../../components/dashboard/patientDashboard/pProfile/PProfile'
import useDataCall from '../../../../hooks/useDataCall'
import { useSelector } from 'react-redux'
import Loading from '../../../loading/Loading'

const PatientProfile = () => {
  

  const { user } = useSelector((state) => state.auth)


  

  return (
        
        <div><PProfile {...user}/></div>

  )
}

export default PatientProfile