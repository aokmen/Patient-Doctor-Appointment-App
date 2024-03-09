import React, { useEffect } from 'react'
import Uberblick from '../../../../components/dashboard/doctorDashboard/uberblick/Uberblick'
import useDataCall from '../../../../hooks/useDataCall';
import { useSelector } from 'react-redux';

const DoctorOverview = () => {

  const { getData, getSingleData } = useDataCall();
  const { userId } = useSelector((state) => state.auth);

  useEffect(() => {
    getData("doctors");
    getSingleData("appointments", userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div><Uberblick/></div>
  )
}

export default DoctorOverview