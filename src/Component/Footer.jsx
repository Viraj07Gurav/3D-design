import React from 'react'

function Footer() {
    const fruits = ["🍇", "🍏", "🍊", "🍒", "🍋", "🍉", "🍇"];
  return (
    // bg-gradient-to-b from-brown-800 to-brown-600
    <div className="bg-[#673f1c] p-4  shadow-lg flex items-center gap-1">
      <span className="text-yellow-300 font-semibold">Results:</span>
      {fruits.map((fruit, index) => (
        <span key={index} className="text-3xl">
          {fruit}
        </span>
      ))}
      {/* <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-lg">
        NEW
      </span> */}
    </div>
  )
}

export default Footer