import React, { useEffect } from 'react'
import ManageAppo from '../../../../components/dashboard/doctorDashboard/manageAppointments/ManageAppo'
import { useSelector } from 'react-redux'
import useDataCall from '../../../../hooks/useDataCall'

const DoctorSetting = () => {

  const { user } = useSelector((state) => state.auth)

  return (
    <div><ManageAppo {...user}/></div>
  )
}

export default DoctorSetting