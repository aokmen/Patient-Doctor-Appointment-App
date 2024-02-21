import React, { useEffect } from 'react'
import DProfile from '../../../../components/dashboard/doctorDashboard/profil/DProfile'
import Loading from '../../../loading/Loading'
import useDataCall from '../../../../hooks/useDataCall'
import { useSelector } from 'react-redux'

const DoctorProfile = () => {


  const { getData } = useDataCall()
  const { doctors } = useSelector((state) => state.data)
  const { currentUser } = useSelector((state) => state.auth)

  useEffect(() => {
    getData("doctors")
  }, [])

   const doctorProfile = doctors?.data.filter((item) => (currentUser === item.email)) 



  return (
     <>
      {doctorProfile ?
        <div>
          <DProfile {...doctorProfile[0]}/>
        </div>
        : <Loading />}
    </>
  )
}

export default DoctorProfile