import React, { useEffect } from "react";
import PKalender from "../../../../components/dashboard/patientDashboard/pKalender/PKalender";
import { useSelector } from "react-redux";
import useDataCall from "../../../../hooks/useDataCall";

const PatientCalender = () => {
  const { userId } = useSelector((state) => state.auth);

  const { getSingleData } = useDataCall();

  //console.log(userId);

  useEffect(() => {
    getSingleData("appointments", userId); //burasi sadece bu patientin terminlerini verir. Yani üstteki patients'in icine terminlerini doldurduk
    getSingleData("events", userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <PKalender />
    </div>
  );
};

export default PatientCalender;
