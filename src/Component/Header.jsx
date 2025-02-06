import React from 'react'
import add from '../assets/add.png'
import share from '../assets/send.png'
import power from '../assets/power.png'
import user from '../assets/user.png'

function Header() {
    return (
        <div className='border '>
            <div className='flex justify-between items-center  '>
                <div className="grid grid-flow-col grid-rows-2  w-50 h-12 rounded-r-full bg-[#20214F]">
                    <div className="row-span-2  w-10 flex justify-center items-center ">
                        <img src={user} alt="" className=''/>
                    </div>
                    <div className="col-span-2  w-20">
                        <p className='text-xs font-bold text-white p-1'>MUSIC</p>
                    </div>
                    <div className="col-span-2 flex justify-between  w-20">
                        <p className='text-xs text-gray-300 '>Id:123446</p>
                        <p className='text-xs  text-gray-300 '>3</p>
                    </div>
                    <div className="row-span-2  w-10 flex justify-center items-center">
                        <img src={add} alt="" className='h-7' />
                    </div>
                </div>
                <div className='flex justify-between items-center gap-2  '>
                    <button className="p-1 ">
                        <img src={share} alt="Send" className="h-6" />
                    </button>
                    <div >
                    <button className="p-2 ">
                        <img src={power} alt="Send" className="h-6" />
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header