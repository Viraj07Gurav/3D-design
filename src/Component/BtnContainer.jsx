  import React, { useState } from 'react';
  import styled from 'styled-components';

  const Button = ({setTimer, setSelectedIndex, setWinningAmount, setLoopInterval }) => {
    const amounts = [100, 500, 1000, 10000]; // Define the amounts for each button
    const [selectedAmount, setSelectedAmount] = useState(100);
    // const [winningAmount, setWinningAmount] = useState(0); // Stores the winning amount

    const startSelection = () => {
      const gridItems = ["Oranges", "Oranges", "Grapes", "Cherry", "null", "Watermelon", "Watermelon", "Mango", "Strawberry"]; // List of grid items
      const loopSequence = [0, 1, 2, 3, 5, 6, 7, 8]; // Indices for grid items

      setTimer(7); // Reset the timer to 7 seconds
      setSelectedIndex(null); // Reset the selected index
      setWinningAmount(0); // Reset winning amount

      // Start the countdown timer
     
      // Start the loop selection
      let loopInterval = setInterval(() => {
        setSelectedIndex(loopSequence[Math.floor(Math.random() * loopSequence.length)]); // Randomly select an index from the sequence
      }, 500); // Loop speed is set to 500ms

      const timerInterval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(timerInterval); // Stop the timer once it reaches 0
            setWinningAmount(gridItems[setSelectedIndex]); // Set the winning amount based on the selected index
            return 0;
          }
          return prev - 1; // Decrease timer
        });
      }, 1000); // Countdown every 1 second


      // Stop the loop when the timer reaches 0
      setTimeout(() => {
        clearInterval(loopInterval); // Stop loop after 7 seconds (same duration as the timer)
      }, 7000); // Stop loop after 7 seconds
    };

    return (
      <div className="w-90 h-15 bg-gradient-to-b from-[#2d2e28] to-[#a19388] mx-auto grid grid-cols-4 p-2 px-5 border-b-4 border-b-amber-200" style={{ clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)" }}>
        {amounts.map((amount) => (
          <StyledWrapper key={amount} className="flex justify-center items-center">
            <button
              className="btn-class-name"
              onClick={() => {
                setSelectedAmount(amount); // Set the selected amount
                startSelection(); // Trigger selection logic on button click
              }}
            >
              <span className="back" />
              <span className="front">{amount}</span>
            </button>
          </StyledWrapper>
        ))}
      </div>
    );
  };

  const StyledWrapper = styled.div`
    .btn-class-name {
      --primary: 255, 234, 0;
      --secondary: 223, 255, 0;
      width: 40px;
      height: 30px;
      border: none;
      outline: none;
      cursor: pointer;
      user-select: none;
      touch-action: manipulation;
      outline: 10px solid rgb(var(--primary), .5);
      border-radius: 100%;
      position: relative;
      transition: .3s;
    }

    .btn-class-name .back {
      background: rgb(var(--secondary));
      border-radius: 100%;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }

    .btn-class-name .front {
      background: linear-gradient(0deg, rgba(var(--primary), .6) 20%, rgba(var(--primary)) 50%);
      box-shadow: 0 .5em 1em -0.2em rgba(var(--secondary), .5);
      border-radius: 100%;
      position: absolute;
      border: 1px solid rgb(var(--secondary));
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.2rem;
      font-weight: 600;
      font-family: inherit;
      transform: translateY(-15%);
      transition: .15s;
      color: rgb(var(--secondary));
    }

    .btn-class-name:active {
      outline: 10px solid rgba(173, 216, 230, 0.8); /* Light blue outline on press */
    }

    .btn-class-name:active .front {
      transform: translateY(0%);
      box-shadow: 0 0 1em rgba(0, 0, 139, 0.8); /* Dark blue shadow */
      background: rgba(173, 216, 230, 0.9); /* Light blue background */
      color: white; /* Optional: change text color to white */
    }
  `;

  export default Button;
