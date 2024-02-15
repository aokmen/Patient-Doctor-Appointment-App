import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateAdminRouter = () => {
  const { userType } = useSelector((state) => state.auth) 
  return userType === "admin" ? <Outlet/> : <Navigate to="/"/>
};

export const PrivateDoctorRouter = () => {
  const { userType } = useSelector((state) => state.auth) 
  return userType === "doctor" ? <Outlet/> : <Navigate to="/"/>
};

export const PrivatePatientRouter = () => {
  const { userType } = useSelector((state) => state.auth) 
  return userType === "patient" ? <Outlet/> : <Navigate to="/"/>
};

