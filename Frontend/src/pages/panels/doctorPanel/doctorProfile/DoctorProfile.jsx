import React, { useEffect } from 'react'
import DProfile from '../../../../components/dashboard/doctorDashboard/profil/DProfile'
import Loading from '../../../loading/Loading'
import useDataCall from '../../../../hooks/useDataCall'
import { useSelector } from 'react-redux'

const DoctorProfile = () => {

  const { user } = useSelector((state) => state.auth)

  
  return (
     <>

        <div>
          <DProfile {...user}/>
        </div>
        : <Loading />
    </>
  )
}

export default DoctorProfile