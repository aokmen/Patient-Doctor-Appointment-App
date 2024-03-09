import React, { useEffect } from 'react'
import Statistics from '../../../../components/dashboard/doctorDashboard/statistics/Statistics'
import useDataCall from '../../../../hooks/useDataCall';
import { useSelector } from 'react-redux';

const DoctorStatistic = () => {

  const { getSingleData } = useDataCall();
  const { userId } = useSelector((state) => state.auth);

  useEffect(() => {
    getSingleData("appointments", userId);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div><Statistics/></div>
  )
}

export default DoctorStatistic