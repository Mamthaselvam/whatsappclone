import React from 'react'
import Private from '../assets/private.png'
import Private2 from '../assets/private2.png'
const Content2 = () => {
  return (
    <div className='m-10'>
        <div>
            <img src={Private}/>
        </div>
        <div className=' text-5xl mt-16 text-center'>
        With private messaging and calling, you can <br/> be yourself, speak
    freely and feel close to the <br/> most important people in your life no
    matter <br/> where they are.
        </div>
        <div className='mt-14'>
            <img src={Private2}/>
        </div>
    </div>
  )
}

export default Content2