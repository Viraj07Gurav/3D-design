import React, { useState } from 'react';
import button from '../assets/yellow.png';

function Buttons() {
  // State to track which button is clicked
  const [clickedButton, setClickedButton] = useState(null);

  return (
    <div>
      <div className="w-90 h-15 bg-gray-500 mx-auto grid grid-cols-4 p-2 px-5" style={{ clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)" }}>
        {/* Map through buttons and set styles based on whether it is clicked */}
        {[0, 1, 2, 3].map((index) => (
          <button
            key={index}
            onClick={() => setClickedButton(clickedButton === index ? null : index)} // Toggle state on button click
            className="focus:outline-none flex justify-center"
          >
            <img
              src={button}
              alt="button"
              className={clickedButton === index ? 'h-10 w-15 bg-blue-300 rounded-full p-1' : 'h-10 w-15'}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default Buttons;
