import React, { useEffect } from 'react'
import ManageAppo from '../../../../components/dashboard/doctorDashboard/manageAppointments/ManageAppo'
import { useSelector } from 'react-redux'
import useDataCall from '../../../../hooks/useDataCall'

const DoctorSetting = ({id}) => {

  const { getData } = useDataCall()
  const { doctors } = useSelector((state) => state.data)
  const { currentUser } = useSelector((state) => state.auth)

  useEffect(() => {
    getData("doctors")
  }, [])

   const doctorProfile = doctors?.data.filter((item) => (currentUser === item.email)) 

  return (
    <div><ManageAppo {...doctorProfile[0]}/></div>
  )
}

export default DoctorSetting