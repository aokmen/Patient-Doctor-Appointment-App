import React from "react";
import { useSelector } from "react-redux";
import Header from "../../components/header/Header";
import Hero from "../../components/home/hero/Hero";
import HomeSection from "../../components/home/homeSection/HomeSection";
import Contact from "../contact/Contact";
import About from "../about/About";
import Services from "../services/Services";



const Home = () => {
  const { currentUser, token } = useSelector((state) => state.auth)
  //   const {getData} = useDataCall()
  // const {myData} = useSelector((state)=>state.data)

  // console.log("data",myData);

  // useEffect(() => {
  //   getData("doctors")
  // }, [])
  console.log("currentUser:",currentUser);
  console.log("token:",token);
  return (
    <div className="flex flex-col  items-start">
      <Header />
      <Hero/>
      <HomeSection/>
      <Services/>
      <About/>
      <Contact/>
    </div>
  );
};

export default Home;