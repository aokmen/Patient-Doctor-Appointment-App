import React from "react";
import Header from "../../components/header/Header";
import Hero from "../../components/home/hero/Hero";
import HomeSection from "../../components/home/homeSection/HomeSection";
import Contact from "../contact/Contact";
import About from "../about/About";
import Services from "../services/Services";



const Home = () => {

  return (
    <div className="flex flex-col  items-start">
      <Header/>
      <Hero/>
      <HomeSection/>
      <Services/>
      <About/>
      <Contact/>
    </div>
  );
};

export default Home;