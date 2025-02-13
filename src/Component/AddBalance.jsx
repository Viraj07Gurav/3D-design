import React, { useState, useEffect } from 'react';

function AddBalance({handleUsernameSubmit }) {
  const [usernameInput, setUsernameInput] = useState('');
  const [userAmount, setUserAmount] = useState('');
  const [balance, setBalance] = useState(0);
  const [error, setError] = useState('');

  // Load balance from localStorage when the component mounts
  useEffect(() => {
    const storedBalance = localStorage.getItem('userAmount');
    if (storedBalance) {
      setBalance(parseFloat(storedBalance)); // Convert stored string to number
    }
  }, []);

  const handleInputChange = (e) => {
    setUsernameInput(e.target.value);
  };

  const handleInputChangeAmount = (e) => {
    setUserAmount(e.target.value);
  };

  const handleSubmit = () => {
    const amount = parseFloat(userAmount);
    if (isNaN(amount) || amount <= 100) {
      setError('Amount must be greater than 100.');
      return;
    }

    const newBalance = balance + amount; // Add new amount to existing balance
    setBalance(newBalance);
    localStorage.setItem('userAmount', newBalance); // Save updated balance in localStorage
    window.location.reload();

    handleUsernameSubmit(usernameInput, amount);
    setUserAmount('');
    setError('');
  };

  return (
    <div className="modal border w-fit text-center rounded-2xl mb-1 p-1 border-amber-300 mx-auto animate-border bg-gradient-to-r from-yellow-700 via-yellow-200 to-yellow-700 bg-[length:400%_400%] ">
      <div className="modal-content rounded outline-none">
      {/* <h2 className="text-white font-bold">Balance: ₹{balance}</h2> Display updated balance */}
        <label htmlFor="">Enter the Amount you want Add</label><br />
        <input
          type="number"
          value={userAmount}
          onChange={handleInputChangeAmount}
          placeholder="Enter Amount"
          className='border outline-none rounded-2xl text-center text-white mt-2 '
        />
        {error && <div className="text-red-500 mt-2">{error}</div>}
        <button onClick={handleSubmit} className='border bg-amber-400 rounded-2xl font-bold w-20 text-white animate-pulse mt-2'>
          Submit
        </button>
      </div>
    </div>
  );
}

export default AddBalance;
