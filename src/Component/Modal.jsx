import React from 'react';

const Modal = ({ showModal, handleClose }) => {
  if (!showModal) return null; // Don't render the modal if showModal is false

  return (
    <div className="w-60 h-30 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg text-center max-w-sm w-full">
        <p className="text-xl font-semibold mb-4 text-black">Insufficient balance to spin!</p>
        <button
          onClick={handleClose}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
