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

            {/* Kriyantrai Text pattern masked globally except around the mouse */}
            <div
                className="fixed inset-0 pointer-events-none z-[-1]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='60'%3E%3Ctext x='60' y='15' dominant-baseline='middle' text-anchor='middle' font-family='system-ui, sans-serif' font-size='11' font-weight='600' letter-spacing='0.5' fill='rgba(21,55,118,0.09)'%3Ekriyantrai%3C/text%3E%3Ctext x='0' y='45' dominant-baseline='middle' text-anchor='middle' font-family='system-ui, sans-serif' font-size='11' font-weight='600' letter-spacing='0.5' fill='rgba(21,55,118,0.09)'%3Ekriyantrai%3C/text%3E%3Ctext x='120' y='45' dominant-baseline='middle' text-anchor='middle' font-family='system-ui, sans-serif' font-size='11' font-weight='600' letter-spacing='0.5' fill='rgba(21,55,118,0.09)'%3Ekriyantrai%3C/text%3E%3C/svg%3E")`,
                    backgroundRepeat: "repeat",
                    backgroundSize: "120px 60px",
                    WebkitMaskImage: `radial-gradient(circle 350px at ${mousePos.x}px ${mousePos.y}px, transparent 0%, rgba(0,0,0,1) 100%)`,
                    maskImage: `radial-gradient(circle 350px at ${mousePos.x}px ${mousePos.y}px, transparent 0%, rgba(0,0,0,1) 100%)`,
                }}
            />
        </>
    );
}
