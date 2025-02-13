import React, { useState } from 'react';

function UsernameModal({ onSubmit }) {
  const [usernameInput, setUsernameInput] = useState('');
  const [userAmount, setUserAmount] = useState(null);
  const [error, setError] = useState(''); // To handle validation error

  const handleInputChange = (e) => {
    setUsernameInput(e.target.value);
  };

  const handleInputChangeAmount = (e) => {
    setUserAmount(e.target.value);
  };

  const handleSubmit = () => {
    if (usernameInput.trim() && userAmount >= 100) {
      onSubmit(usernameInput, userAmount);  // Proceed with submission
      setError('');  // Clear error if validation passes
    } else {
      setError('Amount must be greater than 100');  // Show error message if validation fails
    }
  };

  return (
    <div className=" modal border w-fit text-center rounded-2xl p-1 border-amber-300 mx-auto animate-border bg-gradient-to-r from-yello-700 via-yellow-900 to-yellow-100 bg-[length:400%_400%]">
      <div className="modal-content rounded outline-none">
        <label className='text-white'>Enter your username:</label><br />
        <input
          type="text"
          value={usernameInput}
          onChange={handleInputChange} required
          placeholder="Enter username" className='border outline-none rounded-2xl text-center text-white '
        /><br />
        
        <label className='text-white'>Enter Amount:</label><br />

        <input
          type="number"
          value={userAmount}
          onChange={handleInputChangeAmount}
          placeholder="Enter Amount" className='border outline-none rounded-2xl text-center text-white mt-2 '
        /><br />
        {error && <div className="text-red-500 mt-2">{error}</div>}  {/* Display error message if any */}
        <button onClick={handleSubmit} className='border bg-amber-400 rounded-2xl font-bold w-20 text-white animate-pulse mt-2 '>
          Submit
        </button>
      </div>
    </div>
  );
}

export default UsernameModal;

