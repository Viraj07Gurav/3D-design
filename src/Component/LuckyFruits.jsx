import React from 'react'
import GridComponent from './GridComponent'
import BtnContainer from './BtnContainer'
import Reward from './Reward'
import Footer from './Footer'
import GridContainer from './GridContainer'

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
                    <div className='flex flex-col justify-center items-center border bg-red-400 rounded-b-2xl p-1  border-amber-300  mb-3 ml-2' style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}>
                        <p className='text-amber-200'>Lucky fruit</p>
                        <p className='text-amber-400'>Round 1857 of Today</p>
                    </div>
                    <div className='w-16 h-10 p-2 mx-2 flex justify-between'>
                        <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="#fff" d="M20.66 7c2.762 4.783 1.123 10.9-3.66 13.66c-4.123 2.38-9.233 1.491-12.335-1.86a1 1 0 0 1 1.468-1.358a8 8 0 1 0-2.06-6.524l1.281-.335c1.047-.273 1.818.97 1.108 1.787L4.21 14.957c-.568.652-1.665.43-1.892-.444A10 10 0 0 1 7 3.34C11.783.579 17.899 2.217 20.66 7M12 6a1 1 0 0 1 1 1v4.586l2.707 2.707a1 1 0 1 1-1.414 1.414l-3-3A1 1 0 0 1 11 12V7a1 1 0 0 1 1-1"/></g></svg>
                        </button>
                        <button><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.008-3.018a1.502 1.502 0 0 1 2.522 1.159v.024a1.44 1.44 0 0 1-1.493 1.418 1 1 0 0 0-1.037.999V14a1 1 0 1 0 2 0v-.539a3.44 3.44 0 0 0 2.529-3.256 3.502 3.502 0 0 0-7-.255 1 1 0 0 0 2 .076c.014-.398.187-.774.48-1.044Zm.982 7.026a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2h-.01Z" clip-rule="evenodd" />
                        </svg>
                        </button>
                        
                    </div>
                </div>
              
                <GridContainer/>
                {/* <BtnContainer /> */}
              
                <Footer />

            </div>
        </div>
    )
}

export default LuckyFruits