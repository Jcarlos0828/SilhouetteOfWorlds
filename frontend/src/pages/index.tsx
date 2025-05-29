import React, { useEffect, useState } from "react";
import "@/styles/globals.css";
import Layout from "@/components/Layout/Layout";
import Swapy from "@/components/Swapy/Swapy";
import SideBar from "@/components/SideBar/SideBar";

const Home: React.FC = () => {
  const handleButtonClick = (buttonId: string) => {
    if (buttonId === 'newGame') {
      // Add your new game logic here
      console.log('Starting new game...');
    }
  };

  return (
    <Layout>
      <div style={{ display: 'flex' }}>
        <SideBar onButtonClick={handleButtonClick} />
        <div style={{ marginLeft: '200px', width: '100%' }}>
          <Swapy />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
