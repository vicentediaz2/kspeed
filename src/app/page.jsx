import React from 'react';
import App from './App';
import Sidebar from './components/common/Sidebar';
import Hero from './components/common/Hero';
const Home = () => {
  return (
    <div className="w-screen min-h-screen  bg-black dark:bg-white flex items-center justify-center ">
      <Sidebar />
      <Hero />
    </div>
  );
};

export default Home;
