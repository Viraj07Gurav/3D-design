
import add from '../assets/add.png'
import share from '../assets/send.png'
import power from '../assets/power.png'
import user from '../assets/user.png'
import { useState } from 'react'

function Header() {
    const [username, setUsername] = useState(null);
    const handleDeleteUsername = () => {
        localStorage.removeItem("username");
        localStorage.removeItem("userAmmount"); // Remove from localStorage
        setUsername(null); // Reset state
        window.location.reload();
        // setShowModal(true); // Show modal again to ask for a new username
      };
    return (
        <div className=' '>
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
                        <p className='text-xs  text-gray-300 flex justify-between items-start'><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" className='mt-[2px]' viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="#fff" d="M16 14a5 5 0 0 1 4.995 4.783L21 19v1a2 2 0 0 1-1.85 1.995L19 22H5a2 2 0 0 1-1.995-1.85L3 20v-1a5 5 0 0 1 4.783-4.995L8 14zm0 2H8a3 3 0 0 0-2.995 2.824L5 19v1h14v-1a3 3 0 0 0-2.824-2.995zM12 2a5 5 0 1 1 0 10a5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6a3 3 0 0 0 0-6"/></g></svg>3</p>
                    </div>
                    <div className="row-span-2  w-10 flex justify-center items-center">
                        <img src={add} alt="" className='h-7' />
                    </div>
                </div>
                <div className='flex justify-between items-center gap-2  '>
                    <button className="p-1  ">
                        <img src={share} alt="Send" className="h-6" />

                     
                    </button>
                    

                    <div >
                    <button className="p-2 " onClick={handleDeleteUsername}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="#fff" d="M16.144 3.946a1 1 0 0 1 1.386-.279A9.99 9.99 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12a9.99 9.99 0 0 1 4.47-8.333a1 1 0 1 1 1.107 1.666a8 8 0 1 0 8.846 0a1 1 0 0 1-.28-1.387ZM12 2a1 1 0 0 1 .993.883L13 3v10a1 1 0 0 1-1.993.117L11 13V3a1 1 0 0 1 1-1"/></g></svg>   
                    </button>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header