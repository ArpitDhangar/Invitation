import React, { useState, useEffect } from 'react';

const CountDown = () => {
    // Define the target date and time as a Date object
    const targetDate = new Date('July 7, 2024 11:00:00');

    // Initialize the state for the remaining time (in seconds)
    const [remainingTime, setRemainingTime] = useState(() => {
        const now = new Date();
        return Math.max(0, Math.floor((targetDate - now) / 1000));
    });

    // Update the remaining time every second
    useEffect(() => {
        const updateRemainingTime = () => {
            const now = new Date();
            const newRemainingTime = Math.max(0, Math.floor((targetDate - now) / 1000));
            setRemainingTime(newRemainingTime);
        };

        // Set up an interval timer to update the remaining time every second
        const intervalId = setInterval(updateRemainingTime, 1000);

        // Clean up the interval timer when the component unmounts
        return () => clearInterval(intervalId);
    }, [targetDate]);

    // Function to format the remaining time as days, hours, minutes, and seconds
    const formatTime = (timeInSeconds) => {
        const days = Math.floor(timeInSeconds / (60 * 60 * 24));
        const hours = Math.floor((timeInSeconds % (60 * 60 * 24)) / (60 * 60));
        const minutes = Math.floor((timeInSeconds % (60 * 60)) / 60);
        const seconds = timeInSeconds % 60;
        
        return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    };

    return (
        <div className="countdown-timer">
            <p>{formatTime(remainingTime)}</p>
        </div>
    );
};

export default CountDown;
