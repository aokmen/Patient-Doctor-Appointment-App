import React, { useEffect } from "react";

import useDataCall from "../../../../hooks/useDataCall";
import { useSelector } from "react-redux";
import PTask from "../../../../components/dashboard/patientDashboard/pTask/PTask";
import PNote from "../../../../components/dashboard/patientDashboard/pNote/PNote";

const PatientTask = () => {
  const { getData } = useDataCall();
  const { patients } = useSelector((state) => state.data);
  const { currentUser } = useSelector((state) => state.auth);

  useEffect(() => {
    getData("patients");
  }, []);

  const patientProfile = patients?.filter((item) => currentUser === item.email);
  return (
    <div className="flex justify-between mx-auto">
      <PTask {...patientProfile[0]} />
      <PNote {...patientProfile[0]} />
    </div>
  );
};

export default PatientTask;