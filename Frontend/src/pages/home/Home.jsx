import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import Hero from "../../components/home/hero/Hero";
import HomeSection from "../../components/home/homeSection/HomeSection";
import Contact from "../contact/Contact";
import About from "../about/About";
import Services from "../services/Services";
import useDataCall from "../../hooks/useDataCall";



const Home = () => {
  const { getData } = useDataCall();
  useEffect(() => {
    getData("doctors");
  }, []);

  return (
    <div className="flex flex-col items-start">
      <Header />
      <div className="mt-[130px] w-full">
      <div><Hero/></div>
      <div><Services/></div>
      <div><About/></div>
      <div><Contact/></div>
      </div>

    </div>
  );
};

export default Home;