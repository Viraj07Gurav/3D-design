import React from 'react'

function Reward({ balance, winningAmount }) {
  return (
    <div>
        <div className='grid grid-cols-2 gap-2  w-90 mx-auto p-3 bg-[#534d44] '>
            <div className='border border-t-lime-100  border-l-lime-100 outline-none border-b-0 border-r-0  text-center bg-[#332010] bg-gradient-to-l from-[#332010] via-[#896f40]  to-[#332010] rounded-md'>
                <p className='text-amber-400'>Balance</p>
                <p className='text-amber-400'>{balance}</p>
            </div>
            <div className='border border-t-lime-100 outline-none border-b-0 border-r-0   border-l-lime-100 text-center text-center bg-[#332010] bg-gradient-to-l from-[#332010] via-[#896f40]  to-[#332010] rounded-md'>
            <p className='text-amber-400'>Today's winnigs</p>
            <p className='text-amber-400'>{winningAmount}</p>  
            </div>

        </div>
    </div>
  )
}

export default Reward