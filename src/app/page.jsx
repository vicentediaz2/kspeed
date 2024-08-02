import React from "react";
import App from "./App";
import Sidebar from "./components/common/Sidebar";
import Hero from "./components/common/Hero";
import Features from "./components/common/Features";
import Team from "./components/common/Team";
const Home = () => {
  return (
    <div className=" min-h-screen overflow-x-hidden bg-black dark:bg-white flex  items-center justify-center ">
      <Sidebar />
      <div className="flex flex-col relative items-center justify-center">
        <div className="w-screen absolute rotate-12 top-96  blur-3xl bg-white dark:bg-black h-10"></div>
      <Hero />

      <Features />
      </div>
    </div>
  );
};

export default Home;
