import React, { useState } from 'react';
import styled from 'styled-components';

const Button = ({ setSelectedIndex, setWinningAmount, setSelectedAmount, startSpin, stopSpin, isSpinning, updateBalance, updateAmount, balance }) => {
  const amounts = [100, 500, 1000, 10000]; // Define the amounts for each button
  const [selectedAmount, setLocalSelectedAmount] = useState(100); // Local state for selected amount
  const [disabledButton, setDisabledButton] = useState(null); // Track the disabled button
  const [showPopup, setShowPopup] = useState(false); // Track if the popup should be shown

  const startRotate = (amount) => {
    if (isSpinning) {
      stopSpin(amount); // Stop spinning when clicked again on the same button
      setDisabledButton(null); // Re-enable all buttons when spinning stops
    } else {
      startSpin(amount); // Start spinning when clicked
      setDisabledButton(amount); // Disable all other buttons except the clicked one
    }
  };

  const handleClick = (amount) => {
    console.log('Current balance:', balance); // Log balance for debugging
    if (amount > balance) {
      setShowPopup(true); // Show the popup if balance is insufficient
      setTimeout(() => setShowPopup(false), 3000); // Close the popup after 3 seconds
      return; // Exit if there's insufficient balance
    }
    console.log("btn selected amount " + amount);
    setLocalSelectedAmount(amount); // Update local selected amount
    startRotate(amount); // Toggle spinning state
    updateBalance(amount);
    updateAmount(amount);
  };

  return (
    <div>
      <div className="w-90 h-15   bg-gradient-to-b from-[#2d2e28] to-[#a19388] mx-auto grid grid-cols-4 p-2 px-5 border-b-3 border-b-amber-200" style={{ clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)" }}>
        {amounts.map((amount) => (
          <StyledWrapper key={amount} className="flex justify-center items-center">
            <button
              className="btn-class-name"
              onClick={() => handleClick(amount)}  // On button click, update selected amount and start selection
              disabled={disabledButton && disabledButton !== amount}  // Disable all buttons except the clicked one
            >
              <span className="back animate-pulse" />
              <span className="front text-xs ">{amount}</span>
            </button>
          </StyledWrapper>
        ))}
      </div>

      {/* Popup for Insufficient Balance */}
      {showPopup && (
        <PopupMessage className='bg-amber-300'>
          Insufficient balance, please add balance.
        </PopupMessage>
      )}
    </div>
  );
};

const StyledWrapper = styled.div`
  .btn-class-name {
    --primary:  220, 202, 0;
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

  /* Disable state styling */
  .btn-class-name:disabled {
    background-color: grey; /* Optional: change background when disabled */
    cursor: not-allowed;
  }
`;

const PopupMessage = styled.div`
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  background-color:#FFFF40;
  color: red;
  padding: 15px;
  font-size: 18px;
  border-radius: 5px;
  text-align: center;
  z-index: 999;
  opacity:0.93;
`;

export default Button;
