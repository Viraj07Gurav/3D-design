import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header'
import ProfileContainer from './Component/ProfileContainer'
import GridComponent from './Component/GridComponent'
import Footer from './Component/Footer'
import Reward from './Component/Reward'
import Buttons from './Component/Buttons'
import BtnContainer from './Component/BtnContainer'
import LuckyFruits from './Component/LuckyFruits'
import FruitScroller from './Component/FruitScroller'
import Cursor from './Cursor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col h-screen">
      
      <div className="flex flex-col items-center justify-center h-full w-full max-w-md mx-auto lg:border bg-gradient-to-l from-[#040547] via-[#19026a]  to-[#0D0E35]">
      {/* bg-[#0D0E37] */}
         <div className="flex-1 w-full overflow-y-auto  pb-20 mb-[2rem] hide-scroll">   
        
         <Header />
         <ProfileContainer/>
         {/* <GridComponent/> */}
         {/* <Buttons/> */}
         {/* <BtnContainer/>
         
         <Reward/>
         <Footer/> */}
         <LuckyFruits/>
         {/* <FruitScroller/> */}
         </div>
      
       </div>
   
    </div>
  )
}

export default App
