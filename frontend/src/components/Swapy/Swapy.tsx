import React, { useEffect, useState, useRef } from "react";
import "@/styles/globals.css";
import { createSwapy } from 'swapy'

interface SwapyProps {
  numberOfRows?: number;
}


const Swapy: React.FC<SwapyProps> = ({ numberOfRows = 4 }) => {
    const [swapyInstance, setSwapyInstance] = useState<any>(null);
    const container = useRef<HTMLDivElement | null>(null);
    const generateRows = () => {
        const rows = [];
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        
        for (let i = 0; i < numberOfRows; i++) {
            const rowItems = [];
            for (let j = 0; j < 4; j++) {
                const letterIndex = i * 4 + j;
                const letter = letters[letterIndex];
                const slotId = letter.toLowerCase();
                
                rowItems.push(
                    <div key={slotId} className="slot">
                        <div key={slotId} className="middle" data-swapy-slot={slotId}>
                            {/* <div className={`item item-${slotId}`} data-swapy-item={slotId}>
                                <div>{letter}</div>
                            </div> */}
                        </div>
                    </div>
                );
            }
            
            rows.push(
                <div key={i} className={`container${i + 1}`}>
                    {rowItems}
                </div>
            );
        }
        
        return rows;
    };

    useEffect(() => {
        // Only run this code in the browser
        if (typeof window !== 'undefined') {
            if (container.current) {
            const swapy = createSwapy(container.current, {
                animation: 'dynamic'
            });

            swapy.onBeforeSwap((event) => {
                console.log('beforeSwap', event);
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
        }
    }, []); // Empty dependency array means this runs once on mount

    return(
        <main>
            <h1>Página de inicio</h1>
            <p>Bienvenido a nuestra página de inicio.</p>
            <div ref={container}>
                {generateRows()}
            </div>
        </main>
    )
};

export default Swapy;