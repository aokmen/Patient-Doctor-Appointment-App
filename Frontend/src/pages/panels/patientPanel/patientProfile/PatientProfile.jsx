import React, { useEffect } from 'react'
import PProfile from '../../../../components/dashboard/patientDashboard/pProfile/PProfile'
import useDataCall from '../../../../hooks/useDataCall'
import { useSelector } from 'react-redux'
import Loading from '../../../loading/Loading'

const PatientProfile = () => {
  
  const { getData } = useDataCall()
  const { patients } = useSelector((state) => state.data)
  const { currentUser } = useSelector((state) => state.auth)

  useEffect(() => {
    getData("patients")
  }, [])

  const patientProfile = patients?.filter((item) => (currentUser === item.email))

  return (
    <>
      {patientProfile ?
        <div><PProfile {...patientProfile[0]}/></div>
        : <Loading />}
    </>
  )
}

export default PatientProfile