import React, { useEffect, useState } from "react";
import "@/styles/globals.css";
import Layout from "@/components/Layout/Layout";
import { createSwapy } from 'swapy'

const Home: React.FC = () => {
  const [swapyInstance, setSwapyInstance] = useState<any>(null);

  useEffect(() => {
    // Only run this code in the browser
    if (typeof window !== 'undefined') {
      const container = document.querySelector('.container') as HTMLElement;
      
      const swapy = createSwapy(container, {
        animation: 'dynamic'
        // swapMode: 'drop',
        // autoScrollOnDrag: true,
        // enabled: true,
        // dragAxis: 'x',
        // dragOnHold: true
      });

      swapy.onBeforeSwap((event) => {
        console.log('beforeSwap', event);
        // This is for dynamically enabling and disabling swapping.
        // Return true to allow swapping, and return false to prevent swapping.
        return true;
      });

      swapy.onSwapStart((event) => {
        console.log('start', event);
      });

      swapy.onSwap((event) => {
        console.log('swap', event);
      });

      swapy.onSwapEnd((event) => {
        console.log('swap end:', event);
      });

      setSwapyInstance(swapy);

      // Cleanup function
      return () => {
        if (swapy) {
          swapy.destroy();
        }
      };
    }
  }, []); // Empty dependency array means this runs once on mount

  return (
    <Layout>
      <main>
        <h1>Página de inicio</h1>
        <p>Bienvenido a nuestra página de inicio.</p>
        
        <div className="container">
          <div className="slot top" data-swapy-slot="a">
            <div className="item item-a" data-swapy-item="a">
              <div>A</div>
            </div>
          </div>
          <div className="middle">
            <div className="slot middle-left" data-swapy-slot="b">
              <div className="item item-b" data-swapy-item="b">
                <div className="handle" data-swapy-handle></div>
                <div>B</div>
              </div>
            </div>
            <div className="slot middle-right" data-swapy-slot="c"></div>
          </div>
          <div className="slot bottom" data-swapy-slot="d">
            <div className="item item-d" data-swapy-item="d">
              <div>D</div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
