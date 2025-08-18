"use client";
import React from "react";
import Header from "@/app/Components/Header";
import { useSelector } from "react-redux";
import Home from "@/app/Components/pages/Home";
import Footer from "@/app/Components/Footer";
import ContectUS from "../Contect/page";
import AboutMe from "../AboutMe/page";
import ProjectSlider from "../Project/page";
import Experience from "../Expirence/Experience";
const page = () => {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <>
      <Header />
      <section
        className={`w-full h-auto md:h-screen  rounded-t-4xl    z-10 ${
          theme == "light" ? "light" : "dark"
        } `}
      >
        <div id="home">
          <Home />
        </div>
        <div id="AboutMe">
          <AboutMe />
        </div>
        <div id="Experience">
          <Experience />
        </div>
        <div id="ProjectSlider">
          <ProjectSlider />
        </div>
        <div id="ContectUS">
          <ContectUS />
        </div>
        <div id="Footer" >
                 <Footer />
        </div>
      </section>
    </>
  );
};

export default page;
