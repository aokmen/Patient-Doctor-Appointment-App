import React, { useEffect } from 'react'
import useDataCall from '../../hooks/useDataCall';
import { useSelector } from 'react-redux';



const Home = () => {
//   const {getData} = useDataCall()
// const {myData} = useSelector((state)=>state.data)

// console.log("data",myData);

// useEffect(() => {
//   getData("doctors")
// }, [])


  return (
    <div className="flex flex-col items-start">
        <h1>Home</h1>
    </div>
  );

}

export default Home