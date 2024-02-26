import React, { useEffect } from 'react'
import AProfile from '../../../../components/dashboard/adminDashboard/aProfile/AProfile'
import useDataCall from '../../../../hooks/useDataCall'
import { useSelector } from 'react-redux'



const AdminProfile = () => {
  const { getData } = useDataCall()
  const { admins} = useSelector((state) => state.data)
  const { currentUser } = useSelector((state) => state.auth)

  
  useEffect(() => {
    getData("admins")
  }, [])

  const adminProfile = admins?.data?.filter((item) => (currentUser === item.email))
  return (
    
    <div><AProfile {...adminProfile[0]}/></div>
  )
}

export default AdminProfile