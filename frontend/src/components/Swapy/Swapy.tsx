import React, { useEffect, useState } from "react";
import "@/styles/globals.css";
import { createSwapy } from 'swapy'


const Swapy: React.FC = () => {
    const [swapyInstance, setSwapyInstance] = useState<any>(null);
    useEffect(() => {
    // Only run this code in the browser
    if (typeof window !== 'undefined') {
        const container = document.querySelector('.container1') as HTMLElement;
        
        const swapy = createSwapy(container, {
        animation: 'dynamic'
        // swapMode: 'drop',
        // autoScrollOnDrag: <true,
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
    return(
        <main>
        <h1>Página de inicio</h1>
        <p>Bienvenido a nuestra página de inicio.</p>
        
        <div className="container1">
          <div className="middle" data-swapy-slot="a">
            <div className="item item-a" data-swapy-item="a">
              <div>A</div>
            </div>
          </div>
          <div className="middle" data-swapy-slot="b">
            <div className="item item-b" data-swapy-item="b">
              <div>B</div>
            </div>
          </div>
          <div className="middle" data-swapy-slot="c">
            <div className="item item-c" data-swapy-item="c">
              <div>C</div>
            </div>
          </div>
          <div className="middle" data-swapy-slot="d">
            <div className="item item-d" data-swapy-item="d">
              <div>D</div>
            </div>
          </div>
        </div>
        <div className="container2">
          <div className="middle" data-swapy-slot="e">
            <div className="item item-e" data-swapy-item="e">
              <div>E</div>
            </div>
          </div>
          <div className="middle" data-swapy-slot="f">
            <div className="item item-f" data-swapy-item="f">
              <div>F</div>
            </div>
          </div>
          <div className="middle" data-swapy-slot="g">
            <div className="item item-g" data-swapy-item="g">
              <div>G</div>
            </div>
          </div>
          <div className="middle" data-swapy-slot="h">
            <div className="item item-h" data-swapy-item="h">
              <div>H</div>
            </div>
          </div>
        </div>
      </main>
    )
};

export default Swapy;