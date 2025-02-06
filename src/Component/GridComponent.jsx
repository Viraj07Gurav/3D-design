import React, { useState } from 'react';
import orange from '../assets/orange.png';
import oranges from '../assets/oranges.png';
import grape from '../assets/grape.png';
import grapes from '../assets/grapes.png';
import cherry from '../assets/cherries.png';
import watermelon from '../assets/watermel.png';
import mango from '../assets/mango.png';
import strawberry from '../assets/strawberry.png';
import Button from './BtnContainer';

const loopSequence = [1, 2, 3, 6, 9, 8, 7, 4, 1];

function GridComponent() {
    const [selectedAmount, setSelectedAmount] = useState(100);
    const [timer, setTimer] = useState(7); // Initial timer value is 7 seconds
    const [selectedIndex, setSelectedIndex] = useState(null); // Stores the currently selected index
    const [winningAmount, setWinningAmount] = useState(0); // Stores the winning amount
    const gridItems = [oranges, oranges, grapes, cherry, null, watermelon, watermelon, mango, strawberry]; // List of grid items

    const startSelection = () => {
        setTimer(7); // Reset the timer to 7 seconds
        setSelectedIndex(null); // Reset the selected index
        setWinningAmount(0); // Reset winning amount

        // Start the countdown timer
        const timerInterval = setInterval(() => {
            setTimer((prev) => {
                if (prev <= 1) {
                    clearInterval(timerInterval); // Stop the timer once it reaches 0
                    setWinningAmount(selectedIndex * 100); // Set the winning amount based on selected index
                    return 0;
                }
                return prev - 1; // Decrease timer
            });
        }, 1000); // Countdown every 1 second

        // Start the loop selection
        let loopInterval = setInterval(() => {
            setSelectedIndex(loopSequence[Math.floor(Math.random() * loopSequence.length)]); // Randomly select an index from the sequence
        }, 500); // Loop speed is set to 500ms

        // Stop the loop when the timer reaches 0
        setTimeout(() => {
            clearInterval(loopInterval); // Stop loop after 7 seconds (same duration as the timer)
        }, 7000); // Stop loop after 7 seconds (same duration as the timer)
    };

    return (
        <div>
            <div className='p-3 w-72 mx-auto bg-[#535344] rounded-t-xl'>
                {/* <div className='flex justify-between align-middle w-60 border p-2 mx-auto'>
                    <p>Lottery Time: {timer}s</p>
                </div> */}
                <div className='flex justify-between align-middle w-60 border p-2 mx-auto'>
                            <div className='h-4 w-4 rounded-full border bg-gradient(gray 40%, white 10%, gray 40%)' style={{ background: 'linear-gradient(gray 35%, white 50%, gray 35%)' }}>

                            </div>
                            <p>Lottery Time : {timer}s</p>
                            <div className='h-4 w-4 rounded-full border ' style={{ background: 'linear-gradient(gray 35%, white 50%, gray 35%)' }}>

                            </div>
                        </div>
                <div className='rounded-xl w-60 mx-auto p-2 bg-[#8a7353]'>
                    <div className='grid grid-cols-3 gap-1 justify-center items-center'>
                        {gridItems.map((item, index) => (
                            <div
                                key={index}
                                className={`border h-18 w-18 flex flex-col justify-center items-center bg-radial from-[#803202] from-40% to-[#160F06] ${selectedIndex === index + 1 ? 'border-yellow-500' : 'opacity-50 hover:opacity-100'}`}
                            >
                                {index === 4 ? (
                                    <p className='text-4xl font-bold text-amber-500'>{timer}</p>
                                ) : (
                                    item && <img src={item} alt='' className='h-8' />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className='w-60 mx-auto'>
                    <p className='text-xs mx-auto text-center'>Select the quantity of golds</p>
                </div>
                <div className='w-60 mx-auto'>
                    <div className='flex justify-between gap-2 w-60'>
                        {[100, 500, 1000, 10000].map((amount) => (
                            <button
                                key={amount}
                                className={`h-5 w-fit p-1 flex items-center gap-1 rounded-full font-semibold text-xs border shadow-lg transition-transform transform hover:scale-100 ${selectedAmount === amount ? 'bg-yellow-500' : 'bg-gray-700 text-white'}`}
                                onClick={() => {
                                    setSelectedAmount(amount); // Set the selected amount
                                    startSelection(); // Trigger selection logic when an amount button is clicked
                                }}
                            >
                                <span className='text-yellow-300'>💰</span>
                                {amount}
                            </button>
                        ))}
                    </div>
                </div>
                <div className='w-60 mx-auto mt-2 text-center'>
                    <p className='mt-2 text-white'>Winning Amount: {winningAmount}
                    </p>
                    
                    
                </div>
            </div>
            <Button
                setTimer={setTimer}
                setSelectedIndex={setSelectedIndex}
                setWinningAmount={setWinningAmount}
                startSelection={startSelection}
            />
        </div>
    );
}

export default GridComponent;
