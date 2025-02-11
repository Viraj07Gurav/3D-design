import React, { useState } from 'react';

const FruitScroller = () => {
  // Array of fruit emojis (9 options)
  const fruits = ["🍇", "🍏", "🍊", "🍒", "🍋", "🍉", "🍍", "🍓", "🍈"];

  // Initial state for the 9 slots (3x3 grid)
  const [slots, setSlots] = useState(Array(9).fill(fruits[0])); // Starting with first fruit in all slots
  const [isSpinning, setIsSpinning] = useState(false);
  const [message, setMessage] = useState('');

  // Function to start the slot machine spin
  const startSpin = () => {
    if (isSpinning) return; // Prevent new spin if already spinning

    setIsSpinning(true); // Set spinning to true
    setMessage(''); // Clear any previous message

    // Start the scroll effect (bottom-to-top)
    const interval = setInterval(() => {
      setSlots((prevSlots) => {
        return prevSlots.map(() => fruits[Math.floor(Math.random() * fruits.length)]);
      });
    }, 100); // Change every 100ms

    setTimeout(() => {
      clearInterval(interval);
      setIsSpinning(false); // Stop the spin after 3 seconds
      checkPatterns(); // Check if any patterns match after the spin
    }, 3000); // Spin for 3 seconds
  };

  // Function to check for multiple matching patterns
  const checkPatterns = () => {
    // Check for horizontal patterns (3 rows)
    const rowPatterns = [
      slots.slice(0, 3), // Row 1
      slots.slice(3, 6), // Row 2
      slots.slice(6, 9), // Row 3
    ];

    // Check for vertical patterns (3 columns)
    const columnPatterns = [
      [slots[0], slots[3], slots[6]], // Column 1
      [slots[1], slots[4], slots[7]], // Column 2
      [slots[2], slots[5], slots[8]], // Column 3
    ];

    // Check for diagonal patterns
    const diagonalPatterns = [
      [slots[0], slots[4], slots[8]], // Diagonal top-left to bottom-right
      [slots[2], slots[4], slots[6]], // Diagonal top-right to bottom-left
    ];

    // Function to check if all items in an array are the same
    const checkIfSame = (pattern) => pattern[0] === pattern[1] && pattern[1] === pattern[2];

    // Checking for patterns and setting the message accordingly
    let winMessage = '';
    
    // Check horizontal patterns
    rowPatterns.forEach((row, index) => {
      if (checkIfSame(row)) {
        winMessage = `You won! Pattern matched in Row ${index + 1}. Your prize is 100 points!`;
      }
    });

    // Check vertical patterns
    columnPatterns.forEach((col, index) => {
      if (checkIfSame(col)) {
        winMessage = `You won! Pattern matched in Column ${index + 1}. Your prize is 50 points!`;
      }
    });

    // Check diagonal patterns
    diagonalPatterns.forEach((diag, index) => {
      if (checkIfSame(diag)) {
        winMessage = `You won! Pattern matched in Diagonal ${index + 1}. Your prize is 200 points!`;
      }
    });

    // If no pattern was matched
    if (!winMessage) {
      winMessage = 'Try again!';
    }

    setMessage(winMessage); // Set the result message
  };

  return (
    <div className="flex flex-col items-center">
      {/* Slot machine grid */}
      <div className="grid grid-cols-3 gap-2 overflow-hidden">
        {slots.map((fruit, index) => (
          <div 
            key={index} 
            className="w-18 h-18 flex justify-center items-center text-5xl border-2 border-gray-300 rounded"
            style={{ transition: 'transform 0.1s ease' }}
          >
            {fruit}
          </div>
        ))}
      </div>

      {/* Spin Button */}
      <button 
        onClick={startSpin} 
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        disabled={isSpinning} // Disable button while spinning
      >
        {isSpinning ? 'Spinning...' : 'Start Spin'}
      </button>

      {/* Display message after the spin */}
      <div className="mt-4 text-xl font-bold">
        {message}
      </div>
    </div>
  );
};

export default FruitScroller;
