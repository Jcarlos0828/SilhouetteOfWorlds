import React, { useEffect, useState } from "react";
import "@/styles/globals.css";
import Layout from "@/components/Layout/Layout";
import Swapy from "@/components/Swapy/Swapy";

const Home: React.FC = () => {

  return (
    <Layout>
      <Swapy />
    </Layout>
  );
};

export default Home;
