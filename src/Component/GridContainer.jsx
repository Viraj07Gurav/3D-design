import React, { useState, useRef, useEffect } from 'react';
import orange from '../assets/orange.png';
import oranges from '../assets/oranges.png';
import grape from '../assets/grape.png';
import grapes from '../assets/grapes.png';
import cherry from '../assets/cherries.png';
import watermelon from '../assets/watermel.png';
import mango from '../assets/mango.png';
import strawberry from '../assets/strawberry.png';
import Button from './BtnContainer';
import FruitScroller from './FruitScroller';
import Reward from './Reward';
import UsernameModal from './UsernameModal';
import audio from "../assets/sound.mp3"
import win from "../assets/win.mp3"
import './border.css';
const fruits = ["🍇", "🍏", "🍒"]; // Ensure there are enough fruits

function GridContainer() {

    const [selectedAmount, setSelectedAmount] = useState(null); // Stores the selected amount
    const [timer, setTimer] = useState(10); // Initial timer value is 10 seconds
    const [selectedIndex, setSelectedIndex] = useState(null); // Stores the currently selected index
    const [winningAmount, setWinningAmount] = useState(0); // Stores the winning amount
    const [balance, setBalance] = useState(0); // Initial balance
    const [spinStarted, setSpinStarted] = useState(false);



    const [slots, setSlots] = useState(
        Array(3).fill().map(() => [fruits[0], fruits[1], fruits[2]])
    );
    const [isSpinning, setIsSpinning] = useState(false);
    const [message, setMessage] = useState('');
    const intervalRef = useRef(null);
    const timeoutRef = useRef(null);
    const timerIntervalRef = useRef(null);
    const audioRef = useRef(null); // Reference to the audio element
    const winAudioRef = useRef(null);

    const updateAmount = (amount) => {
        setSelectedAmount(amount)
        console.log("first selected amount",selectedAmount);
        // console.log("amount:", amount)
    }
    //   useEffect(()=>{
    //     setSelectedAmount(),[startSpin]
    //   });


    useEffect(() => {
        console.log("Updated Selected Amount:", selectedAmount);
    }, [selectedAmount]);

    const startSpin = (amount) => {
        console.log("start spin amount",amount)
        
        setSelectedAmount(() => {
            console.log("selectedAmount immediately updated:", amount);
            return amount; // Immediately return the updated value
        });
        
        console.log("seleted",selectedAmount);
        setSpinStarted(true);
        if (balance <= 0) {
            setMessage('Insufficient balance! ❌');
            return; // Do not allow to play if balance is 0 or less
        }

        if ((amount == 500) && (balance < 500)) {
            console.log("selected amount for 500 "+selectedAmount);
            // stopSpin();
            setMessage('Insufficient balance 500! ❌');
            return;
        }
        if ((amount == 1000) && (balance < 1000)) {
           
            setMessage('Insufficient balance 1000! ❌');
            return;
        }
        if ((amount == 10000) && (balance < 10000)) {
            // stopSpin();
            setMessage('Insufficient balance! ❌');
            return;
        }
        console.log("Selected Amount",selectedAmount);
        console.log("Balance",balance);
        if (selectedAmount !== null) {
            updateBalance(selectedAmount); 
            console.log("selected amount clicked:",selectedAmount)// Deduct the selected amount from the balance
        }
        setIsSpinning(true);
        setMessage('');
        setTimer(10);
        // setSelectedAmount(null);



        if (audioRef.current) {
            audioRef.current.play(); // Play the audio when spin starts
        }

        intervalRef.current = setInterval(() => {
            setSlots(
                Array(3).fill().map(() => [
                    fruits[Math.floor(Math.random() * fruits.length)],
                    fruits[Math.floor(Math.random() * fruits.length)],
                    fruits[Math.floor(Math.random() * fruits.length)]
                ])
            );
        }, 100);

        timeoutRef.current = setTimeout(() => {
            stopSpin(); // Automatically stop after 10 seconds
            setMessage('Try again ..! ❌');
            
        }, 10000); // 10-second timer

        timerIntervalRef.current = setInterval(() => {
            setTimer((prev) => {
                if (prev <= 1) {
                    clearInterval(timerIntervalRef.current); // Stop the timer once it reaches 0
                    return 0;
                }
                return prev - 1; // Decrease timaer
            });
        }, 1000); // Countdown every 1 second
    };

    const stopSpin = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current); // Stop the spinning immediately
        }
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current); // Clear the timeout if the user stops early
        }
        if (timerIntervalRef.current) {
            clearInterval(timerIntervalRef.current); // Clear the timer interval
        }
        setIsSpinning(false); // Disable the spinning state

        if (audioRef.current) {
            audioRef.current.pause(); // Stop the audio when spin stops
            audioRef.current.currentTime = 0; // Reset the audio to the beginning
        }
        setIsSpinning(false);
        setSpinStarted(false);

        checkWin(); // Check if the user wins
    };

    // useEffect to check the win condition after slots state updates
    useEffect(() => {
        if (!isSpinning) {
            checkWin();
        }
    }, [slots, isSpinning]);

    

    const checkWin = () => {
        // Check if all the middle fruits of the 3 columns are the same
        console.log(winningAmount);
        if (slots[0][1] === slots[1][1] && slots[1][1] === slots[2][1]) {
            const winAmount =selectedAmount +selectedAmount; // Example winning calculation
            console.log("win amount",winAmount)
            setWinningAmount(winningAmount+winAmount);
           
            // setBalance((prevBalance) => prevBalance + winAmount);
            setMessage(`You won ${winAmount}!`);
            if (winAudioRef.current) {
                winAudioRef.current.play();
            }

        } else {
            setMessage(`You lost! ${selectedAmount}`);
        }
    };

    // const updateBalance = (amount) => {

    //     setBalance((prevBalance) => {
    //         const newBalance = prevBalance - amount;
    //         if (newBalance < 0) {
    //             setMessage('Try next time!');
    //             return prevBalance; // Do not update the balance if it goes below 0
    //         }
    //         if(newBalance){

    //         }
    //         return newBalance;
    //     });
    // };
    const updateBalance = (amount) => {
        if (spinStarted) {
            setBalance((prevBalance) => {
                const newBalance = prevBalance - amount;
                if (newBalance < 0) {
                    setMessage('Try next time!');
                    return prevBalance; // Do not update the balance if it goes below 0
                }
                localStorage.setItem('userAmount', newBalance);
                return newBalance;
            });
        }
    };

    const [username, setUsername] = useState(null);
    const [amount, setUserAmount] = useState(null);
    const [showModal, setShowModal] = useState(false);
   
  
    // Check if username is already stored in localStorage when app loads
    useEffect(() => {
      const storedUsername = localStorage.getItem('username');
       const userAmount = localStorage.getItem('userAmount');


      if ((!storedUsername)) {
        setShowModal(true); // Show the modal if username doesn't exist
      } else {
        setUserAmount(userAmount); // Set the username if it exists in localStorage
        setUsername(storedUsername);
        setBalance(userAmount);
      }
    }, []);

    useEffect(() => {
        const amount = localStorage.getItem('userAmount');
        
      }, []);
  
    // Function to handle username input from the modal
    const handleUsernameSubmit = (name,amount) => {
      setUsername(name);
      localStorage.setItem('username', name);
      localStorage.setItem('userAmount', amount); // Save the username in localStorage
      setShowModal(false); // Close the modal after username is submitted
      window.location.reload();
    };
    return (
        <div>
            {showModal && <UsernameModal onSubmit={handleUsernameSubmit} />}
            {/* <h1>Welcome {username ? username : 'Guest'}</h1> */}
            <audio ref={audioRef} src={audio} /> {/* Add your audio file path */}
            <audio ref={winAudioRef} src={win} /> {/* Add your audio file path */}
            <div className='p-3 w-72 mx-auto bg-[#535344] rounded-t-xl'>
                <div className='flex justify-between align-middle w-60 border border-amber-500  rounded-full p-2 mx-auto'>
                    <div className='h-4 w-4 rounded-full border bg-gradient(gray 40%, white 10%, gray 40%)' style={{ background: 'linear-gradient(gray 35%, white 50%, gray 35%)' }}></div>
                    <p className='text-yellow-500'>Lottery Time : <span className=''>{timer}s</span></p> {/* Display the remaining time */}
                    <div className='h-4 w-4 rounded-full border ' style={{ background: 'linear-gradient(gray 35%, white 50%, gray 35%)' }}></div>
                </div>
                <div className='rounded-xl w-60 mx-auto mt-2 bg-[#8a7353] shadow-[0px_0px_15px_rgba(0,0,0,0.3)] border border-transparent animate-border custom-gradient'>
                    <div className="p-5 w-60 text-center">
                        <div className="flex justify-center gap-2 p-2 rounded-md">
                            {slots.map((column, index) => (
                                <div key={index} className="flex flex-col items-center p-2 gap-2 w-16 h-32 text-2xl bg-white rounded-md ">
                                    <div className=''>{column[0]}</div>
                                    <div className=" border-t-2 border-b-2 border-yellow-200 px-2 scale-120 ">{column[1]}</div>
                                    <div>{column[2]}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='w-60 mx-auto'>
                    <p className='text-sm mx-auto text-center text-yellow-500 p-1'>Select the quantity of golds</p>
                </div>
                <div className='w-60 mx-auto 
                  text-center'>
                    <p className='mt-0 text-white'>Result:{message}</p> {/* Display the winning amount */}
                </div>
                <div className='w-60 mx-auto'>
                    <div className='w-60 mx-auto'>
                        <div className='flex justify-between gap-1 w-60'>
                            {[100, 500, 1000, 10000].map((amount) => (
                                <button
                                    key={amount}
                                    className={`h-5 w-fit p-1 flex items-center gap-1 rounded-full font-semibold text-xs border shadow-lg transition-transform transform hover:scale-100 ${selectedAmount === amount ? 'bg-yellow-500' : 'bg-gray-700 text-white'}`}
                                    // onClick={() => updateAmount(amount)}
                                    // Set selected amount on button click
                                >
                                    <span className='text-yellow-300'>💰</span>
                                    {amount}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
              
                <div className='w-60 mx-auto mt-2 text-center'>
                    {/* <p className='mt-2 text-white'>Balance: {balance} Rup</p> Display the balance */}
                </div>
            </div>
            <Button
                setTimer={setTimer}
                setSelectedIndex={setSelectedIndex}
                setWinningAmount={setWinningAmount}
                setSelectedAmount={setSelectedAmount}
                startSpin={startSpin}
                stopSpin={stopSpin}
                isSpinning={isSpinning}
                additionalFunction={() => console.log('Additional function executed')}
                updateBalance={updateBalance} // Pass the updateBalance function as a prop
                updateAmount={updateAmount}
                balance={balance}
            />
            <Reward balance={balance} winningAmount={winningAmount} /> {/* Pass balance and winningAmount as props */}

        </div>
    );
}

export default GridContainer;