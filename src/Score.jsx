import React from 'react'
import { FaTrophy } from "react-icons/fa";
import questions from './data';

const Score = (props) => {
  const total = ((props.questions).length) * 5
  return (
    <div className=' bg-purple-600 flex flex-col justify-center items-center rounded-md mt-10'>
      <FaTrophy className='mt-5 text-7xl text-yellow-400'/>
      <div className='text-xl text-white font-mono m-5'>Congratulation</div>
      <div className='text-white'>Your Score</div>
    <div className='text-white text-xl m-2'>
      {`${props.score}/${total}`}
    </div>
    {/* <button onClick={()=> props.index = 0}>Retest</button> */}
    
    </div>
  )
}

export default Score
