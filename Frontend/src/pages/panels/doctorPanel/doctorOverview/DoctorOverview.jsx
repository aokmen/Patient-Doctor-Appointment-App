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
    <div>
    {/* <div className='text-center border-2 mx-auto'>
      <h1 className=' mt-[-50px] z-100 w-[80vw] text-3xl font-bold text-main-dark-blue block absolute border-2 mx-auto'>Uberblick</h1> */}
      <Uberblick/>
      </div>
  )
}

export default DoctorOverview