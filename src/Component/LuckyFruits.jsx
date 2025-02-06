import React from 'react'
import GridComponent from './GridComponent'
import BtnContainer from './BtnContainer'
import Reward from './Reward'
import Footer from './Footer'

function LuckyFruits() {
    return (
        <div className='mt-2 rounded-t-lg '>
            <div className='bg-radial from-[#da9b61] from-40% to-[#966133] rounded-t-2xl'>
                <div className='flex justify-between'>
                    <div className='w-10 h-10 p-2 mx-2'>
                        <button><svg class="w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg></button>
                    </div>
                    <div className='flex flex-col justify-center items-center border  border-amber-300 mb-3 ml-2'>
                        <p className='text-amber-200'>Lucky fruit</p>
                        <p className='text-amber-400'>Round 1857 of Today</p>
                    </div>
                    <div className='w-16 h-10 p-2 mx-2 flex justify-between  border'>
                        <button><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.008-3.018a1.502 1.502 0 0 1 2.522 1.159v.024a1.44 1.44 0 0 1-1.493 1.418 1 1 0 0 0-1.037.999V14a1 1 0 1 0 2 0v-.539a3.44 3.44 0 0 0 2.529-3.256 3.502 3.502 0 0 0-7-.255 1 1 0 0 0 2 .076c.014-.398.187-.774.48-1.044Zm.982 7.026a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2h-.01Z" clip-rule="evenodd" />
                        </svg>
                        </button>
                        <button><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.008-3.018a1.502 1.502 0 0 1 2.522 1.159v.024a1.44 1.44 0 0 1-1.493 1.418 1 1 0 0 0-1.037.999V14a1 1 0 1 0 2 0v-.539a3.44 3.44 0 0 0 2.529-3.256 3.502 3.502 0 0 0-7-.255 1 1 0 0 0 2 .076c.014-.398.187-.774.48-1.044Zm.982 7.026a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2h-.01Z" clip-rule="evenodd" />
                        </svg>
                        </button>
                        
                    </div>
                </div>
                <GridComponent />
                {/* <BtnContainer /> */}
                <Reward />
                <Footer />

            </div>
        </div>
    )
}

export default LuckyFruits