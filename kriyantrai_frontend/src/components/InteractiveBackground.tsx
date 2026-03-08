"use client";

import React, { useEffect, useState } from 'react';

export default function InteractiveBackground() {
    const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            {/* Base Gray Background */}
            <div className="fixed inset-0 bg-gray-200 pointer-events-none z-[-2]" />

            {/* Grainy pattern masked globally except around the mouse */}
            <div
                className="fixed inset-0 pointer-events-none z-[-1]"
                style={{
                    backgroundImage: "url('/bg-pattern.png')",
                    backgroundRepeat: "repeat",
                    backgroundSize: "600px 600px",  // Smaller repeating pattern
                    WebkitMaskImage: `radial-gradient(circle 350px at ${mousePos.x}px ${mousePos.y}px, transparent 0%, rgba(0,0,0,1) 100%)`,
                    maskImage: `radial-gradient(circle 350px at ${mousePos.x}px ${mousePos.y}px, transparent 0%, rgba(0,0,0,1) 100%)`,
                }}
            />
        </>
    );
}
