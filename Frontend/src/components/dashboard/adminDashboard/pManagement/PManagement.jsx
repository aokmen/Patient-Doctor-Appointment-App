
import React, { useEffect, useRef, useState } from 'react'
import "./dManagement.css"
import { useSelector } from 'react-redux';
import Loading from '../../../../pages/loading/Loading';
import useDataCall from '../../../../hooks/useDataCall';

const PManagement = () => {

  const { getData } = useDataCall()
  const { patient } = useSelector((state) => state.data)
  let doctorInfo = []

  useEffect(() => {
      getData("patient")
  }, [])

  return (
    <div>PManagement</div>
  )
}

export default PManagement