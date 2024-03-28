import React, { useEffect } from 'react'
import useDataCall from "../../../../hooks/useDataCall";
import { useSelector } from "react-redux";
import PTask from "../../../../components/dashboard/patientDashboard/pTask/PTask";
import PNote from "../../../../components/dashboard/patientDashboard/pNote/PNote";

const AdminTask = () => {
  const { getSingleData} = useDataCall();
  const { userId } = useSelector((state) => state.auth)

  useEffect(() => {
    getSingleData("tasks",userId);
    getSingleData("notes",userId);

  }, []);
  
  return (
    <div className="panel-task flex justify-between mx-auto">
      <PTask/>
      <PNote/>
    </div>
  );
}

export default AdminTask