import React from 'react'

function Reward() {
  return (
    <div>
        <div className='grid grid-cols-2 gap-2 border w-90 mx-auto p-3 bg-[#534d44]'>
            <div className='border border-t-lime-100  border-l-lime-100 text-center bg-[#332010] rounded-md'>
                <p className='text-amber-400'>Balance</p>
                <p className='text-amber-400'>50000 </p>
            </div>
            <div className='border border-t-lime-100  border-l-lime-100 text-center text-center bg-[#332010] rounded-md'>
            <p className='text-amber-400'>Today's winnigs</p>
            <p className='text-amber-400'>50000 </p>  
            </div>

        </div>
    </div>
  )
}

export default Reward