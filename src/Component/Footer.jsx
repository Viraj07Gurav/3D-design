import React from "react";

function Footer() {
  const fruits = ["🍇", "🍏", "🍊", "🍒", "🍋", "🍉", "🍇"];

  return (
    <div className="bg-[#673f1c] p-4 shadow-lg overflow-hidden w-full flex">
      <span className="text-yellow-300 font-semibold">Results:</span>
      <div className="scroll-container">
        <div className="scroll-content">
          {fruits.map((fruit, index) => (
            <span key={index} className="text-xl px-2">{fruit}</span>
          ))}
          {fruits.map((fruit, index) => (
            <span key={index + fruits.length} className="text-xl px-2 ">{fruit}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
