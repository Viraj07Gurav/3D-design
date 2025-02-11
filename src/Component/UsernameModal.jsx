import React, { useState } from 'react';

function UsernameModal({ onSubmit }) {
  const [usernameInput, setUsernameInput] = useState('');

  const handleInputChange = (e) => {
    setUsernameInput(e.target.value);
  };

  const handleSubmit = () => {
    if (usernameInput.trim()) {
      onSubmit(usernameInput);
    }
  };

  return (
    <div className="modal border w-fit text-center rounded p-1 border-amber-300 mx-auto animate-border bg-gradient-to-r from-yello-700 via-yellow-200 to-yellow-700 bg-[length:400%_400%] ">
      <div className="modal-content  rounded outline-none">
        <label className='text-white'>Please enter your username:</label><br />
        <input
          type="text"
          value={usernameInput}
          onChange={handleInputChange}
          placeholder="Enter username" className='border outline-none rounded-2xl text-center text-white '
        />
        <button onClick={handleSubmit} className='border bg-amber-400 rounded-2xl font-bold w-20 text-white animate-pulse'>Submit</button>
      </div>
    </div>
  );
}

export default UsernameModal;