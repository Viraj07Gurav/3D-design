import { useRef, useState,useEffect } from 'react'

import level from '../assets/ProfileLevel.png'
import tropy from '../assets/trophy1.png'

function ProfileContainer() {
      const [username, setUsername] = useState(null);
        const [showModal, setShowModal] = useState(false);
      
        // Check if username is already stored in localStorage when app loads
        useEffect(() => {
          const storedUsername = localStorage.getItem('username');
          if (!storedUsername) {
            setShowModal(true); // Show the modal if username doesn't exist
          } else {
            setUsername(storedUsername); // Set the username if it exists in localStorage
          }
        }, []);
  return (
    <div>
        <div className='flex justify-start gap-20 sm:gap-10 lg:gap-25'>
            <div className=' w-19 h-6 rounded-full bg-[#20214F] ml-2 mt-2'>
                <p className='flex items-center space-x-2 px-1 p-[0.5px]'><img src={tropy} alt="" className='p-[1px]'/><span className='text-yellow-500 text-sm '> 593.7k</span></p>
            </div>
            <div className='border h-22 w-20 flex flex-col justify-center items-center'>
                <div className=''>
                <img src={level} alt="" className='h-15' />
                </div>
                <div className=''>
                    <p className='text-sm text-white'>{username ? username : 'Guest'}</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default ProfileContainer