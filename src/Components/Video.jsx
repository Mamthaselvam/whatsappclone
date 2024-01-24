import React from 'react'
import vdo from '../assets/vdo.png'
const Video = () => {
  return (
    <div className=' flex items-center justify-around '>
        
        <div className='mt-5'>
            <p className=' text-7xl font-medium ' >Never miss a <br/> moment with <br/>voice and video <br/> calls</p>
            <p className='mt-5 text-xl  tracking-normal'>From a group call to classmates to a quick call with mom, <br/>feel like you're in the same room with voice and video <br/> calls.</p>
            <div className='mt-5'>
            <button className=' underline decoration-solid text-xl font-medium  hover:text-green-600'>Learn More</button>
        </div>
        </div>
        <div>
           <img src={vdo}/> 
        </div>
        
    </div>
  )
}

export default Video