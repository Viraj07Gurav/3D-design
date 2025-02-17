import React, { useState, useRef, useEffect } from 'react';

const fruits = ["🍇", "🍏"];

function GridComponent() {
    const [slots, setSlots] = useState(
        Array(3).fill().map(() => [fruits[0], fruits[1], fruits[2]])
    );
    const [isSpinning, setIsSpinning] = useState(false);
    const [message, setMessage] = useState('');
    const intervalRef = useRef(null);
    const timeoutRef = useRef(null);

    const startSpin = () => {
        setIsSpinning(true);
        setMessage('');

        intervalRef.current = setInterval(() => {
            setSlots(
                Array(3).fill().map(() => [
                    fruits[Math.floor(Math.random() * fruits.length)],
                    fruits[Math.floor(Math.random() * fruits.length)],
                    fruits[Math.floor(Math.random() * fruits.length)]
                ])
            );
        }, 100);

        timeoutRef.current = setTimeout(() => {
            stopSpin(); // Automatically stop after 10 seconds
            setMessage('Try again! ❌');
        }, 10000); // 10-second timer
    };

    const stopSpin = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current); // Stop the spinning immediately
        }
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current); // Clear the timeout if the user stops early
        }
        setIsSpinning(false); // Disable the spinning state
        checkWin(); // Check if the user wins
    };

    // useEffect to check the win condition after slots state updates
    useEffect(() => {
        if (!isSpinning) {
            checkWin();
        }
    }, [slots, isSpinning]);

    const checkWin = () => {
        // Check if all the middle fruits of the 3 columns are the same
        if (slots[0][1] === slots[1][1] && slots[1][1] === slots[2][1]) {
            setMessage('You won! 🎉');
        } else {
            setMessage('Try again! ❌');
        }
    };

    return (
        <div  className="p-5 w-65 text-center">
            <div className="flex justify-center gap-5 bg-gray-200 p-4 rounded-md">
                {slots.map((column, index) => (
                    <div key={index} className="flex flex-col items-center border p-2 w-16 h-32 text-2xl bg-white rounded-md">
                        <div>{column[0]}</div>
                        <div className="border-2 border-red-500 px-2">{column[1]}</div>
                        <div>{column[2]}</div>
                    </div>
                ))}
            </div>
            <button 
                onClick={isSpinning ? stopSpin : startSpin} 
                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
                {isSpinning ? 'Stop Spin' : 'Start Spin'}
            </button>
            <p className="mt-4 text-xl font-bold">{message}</p>
        </div>
    );
}

export default GridComponent;
