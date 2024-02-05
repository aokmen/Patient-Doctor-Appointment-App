import React, { useEffect } from "react";
import useDataCall from "../../hooks/useDataCall";
import { useSelector } from "react-redux";
import Header from "../../components/header/Header";
import Hero from "../../components/home/hero/Hero";
import HomeSection from "../../components/home/homeSection/HomeSection";
import Contact from "../../components/home/contact/Contact";


const Home = () => {
  const { currentUser, token } = useSelector((state) => state.auth)
  //   const {getData} = useDataCall()
  // const {myData} = useSelector((state)=>state.data)

  // console.log("data",myData);

  // useEffect(() => {
  //   getData("doctors")
  // }, [])
  //console.log("currentUser:",currentUser);
  //console.log("token:",token);
  return (
    <div className="flex flex-col  items-start">
      <Header />
      <Hero/>
      <HomeSection/>
      <Contact/>
    </div>
  );
};

export default Home;
