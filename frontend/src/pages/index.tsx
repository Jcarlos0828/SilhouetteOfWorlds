import React from "react";
import "@/styles/globals.css";
import Layout from "@/components/Layout/Layout";

const Home: React.FC = () => {
  return (
    <Layout>
      <main>
        <h1>Página de inicio</h1>
        <p>Bienvenido a nuestra página de inicio.</p>
      </main>
    </Layout>
  );
};

export default Home;
