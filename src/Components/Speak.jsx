import React from 'react'
import speak from '../assets/speak.png'
const Speak = () => {
  return (
    <div className='bg-black flex items-center justify-around '>
        <div>
           <img src={speak}/> 
        </div>
        <div className='mt-5'>
            <p className=' text-6xl font-bold text-white' >Speak <br/><span className='tracking-tight text-green-800'>freely</span></p>
            <p className='mt-5 text-xl font-medium tracking-normal text-white'>With end-to-end encryption, your personal messages and <br/>calls are secured. Only you and the person you're talking <br/> to can read or listen to them, and nobody in between, not <br/> even WhatsApp.</p>
            <div className='mt-5'>
            <button className=' underline decoration-solid text-xl font-medium text-white hover:text-green-600'>Learn More</button>
        </div>
        </div>
        
    </div>
  )
}

export default Speak