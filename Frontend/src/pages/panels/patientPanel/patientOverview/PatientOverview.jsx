import React, { useEffect } from 'react'
import Uberblick from '../../../../components/dashboard/patientDashboard/Uberblick/Uberblick'
import { useSelector } from 'react-redux';
import useDataCall from '../../../../hooks/useDataCall';

const PatientOverview = () => {

  const { userId } = useSelector((state) => state.auth);
  const { getSingleData } = useDataCall();

  useEffect(() => {
    getSingleData("appointments", userId);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div><Uberblick/></div>
  )
}

export default PatientOverview