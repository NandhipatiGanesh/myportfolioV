'use client';
import { useState, useEffect } from 'react';

const useRotatingBg = (bgColors: string[], interval = 2000) => {

    const [currentColor, setCurrentColor] = useState(bgColors[0]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentColor((prev) => {
                const currentIndex = bgColors.indexOf(prev);
                const nextIndex = (currentIndex + 1) % bgColors.length;
                return bgColors[nextIndex];
            });
        }, interval);

        return () => clearInterval(intervalId);
    }, [interval]);

    return currentColor;
};

export default useRotatingBg;
