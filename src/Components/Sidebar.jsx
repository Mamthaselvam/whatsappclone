import React from 'react'
import vijay from '../assets/vijay.jpg'
import scooby from '../assets/scooby.png'
import { sides } from '../Data/Data.jsx'
const Sidebar = () => {
  return (
    <section className='flex px-3'>
        <div className='  p-2 w-2/5 shadow-lg'>
          {sides.map((names)=>(
            <div className='flex py-2'>
               <div key={names.id}>
                <img src={names.image} className='h-12 w-12 rounded-full'/>
               </div>
               <div className='mx-4'>
                <p className='text-lg font-semibold' >{names.title}</p>
                <p>{names.paragraph}</p>
               </div>
            </div>
          ))}         
        </div>
        <div className='w-4/5 p-3 bg-amber-100' >
            <div className='flex'>
              <div>
                <img src={scooby} className='h-12 w-12 rounded-full'/>
              </div>
              <div className='px-3'>
                 <p className='text-lg font-semibold'>Mahi</p>
                 <p>Hello </p>
              </div>
            </div>
            <div className='flex justify-end'>
              <div>
                <img src={vijay} className='h-12 w-12 rounded-full'/>
              </div>
              <div className='px-3'>
                 <p className='text-lg font-semibold'>Mamtha</p>
                 <p>Haii</p>
              </div>
            </div>
            <div className='flex'>
              <div>
                <img src={scooby} className='h-12 w-12 rounded-full'/>
              </div>
              <div className='px-3'>
                 <p className='text-lg font-semibold'>Mahi</p>
                 <p>What r yu dng?</p>
              </div>
            </div>
            <div className='flex justify-end'>
              <div>
                <img src={vijay} className='h-12 w-12 rounded-full'/>
              </div>
              <div className='px-3'>
                 <p className='text-lg font-semibold'>Mamtha</p>
                 <p>Wtchg movie </p>
              </div>
            </div>
            <div className='flex'>
              <div>
                <img src={scooby} className='h-12 w-12 rounded-full'/>
              </div>
              <div className='px-3'>
                 <p className='text-lg font-semibold'>Mahi</p>
                 <p>OH which movie?</p>
              </div>
            </div>
            <div className='flex justify-end'>
              <div>
                <img src={vijay} className='h-12 w-12 rounded-full'/>
              </div>
              <div className='px-3'>
                 <p className='text-lg font-semibold'>Mamtha</p>
                 <p>Shiddat</p>
              </div>
            </div>
            <div className='flex'>
              <div>
                <img src={scooby} className='h-12 w-12 rounded-full'/>
              </div>
              <div className='px-3'>
                 <p className='text-lg font-semibold'>Mahi</p>
                 <p> Bollywood?..</p>
              </div>
            </div>
            <div className='flex justify-end'>
              <div>
                <img src={vijay} className='h-12 w-12 rounded-full'/>
              </div>
              <div className='px-3'>
                 <p className='text-lg font-semibold'>Mamtha</p>
                 <p>  Yes</p>
              </div>
            </div>
            <div className='flex'>
              <div>
                <img src={scooby} className='h-12 w-12 rounded-full'/>
              </div>
              <div className='px-3'>
                 <p className='text-lg font-semibold'>Mahi</p>
                 <p> okey...Dinner? </p>
              </div>
            </div>
            <div className='flex justify-end'>
              <div>
                <img src={vijay} className='h-12 w-12 rounded-full'/>
              </div>
              <div className='px-3'>
                 <p className='text-lg font-semibold'>Mamtha</p>
                 <p> Ahh , you!</p>
              </div>
            </div>
            <div className='flex'>
              <div>
                <img src={scooby} className='h-12 w-12 rounded-full'/>
              </div>
              <div className='px-3'>
                 <p className='text-lg font-semibold'>Mahi</p>
                 <p> yeah i had</p>
              </div>
            </div>
            <div className='flex justify-end'>
              <div>
                <img src={vijay} className='h-12 w-12 rounded-full'/>
              </div>
              <div className='px-3'>
                 <p className='text-lg font-semibold'>Mamtha</p>
                 <p>  okey</p>
              </div>
            </div>
            <div className='flex'>
              <div>
                <img src={scooby} className='h-12 w-12 rounded-full'/>
              </div>
              <div className='px-3'>
                 <p className='text-lg font-semibold'>Mahi</p>
                 <p> then bye</p>
              </div>
            </div>
            <div className='flex justify-end'>
              <div>
                <img src={vijay} className='h-12 w-12 rounded-full'/>
              </div>
              <div className='px-3'>
                 <p className='text-lg font-semibold'>Mamtha</p>
                 <p>  okeyy...</p>
              </div>
            </div>
            <div className='flex'>
              <div>
                <img src={scooby} className='h-12 w-12 rounded-full'/>
              </div>
              <div className='px-3'>
                 <p className='text-lg font-semibold'>Mahi</p>
                 <p> then bye</p>
              </div>
            </div>
            <div className='flex justify-end'>
              <div>
                <img src={vijay} className='h-12 w-12 rounded-full'/>
              </div>
              <div className='px-3'>
                 <p className='text-lg font-semibold'>Mamtha</p>
                 <p>  okeyy...</p>
              </div>
            </div>
            <div className='flex'>
              <div>
                <img src={scooby} className='h-12 w-12 rounded-full'/>
              </div>
              <div className='px-3'>
                 <p className='text-lg font-semibold'>Mahi</p>
                 <p> then bye</p>
              </div>
            </div>
            <div className='flex justify-end'>
              <div>
                <img src={vijay} className='h-12 w-12 rounded-full'/>
              </div>
              <div className='px-3'>
                 <p className='text-lg font-semibold'>Mamtha</p>
                 <p>  okeyy...</p>
              </div>
            </div>
            <div className='flex'>
              <div>
                <img src={scooby} className='h-12 w-12 rounded-full'/>
              </div>
              <div className='px-3'>
                 <p className='text-lg font-semibold'>Mahi</p>
                 <p> then bye</p>
              </div>
            </div>
            <div className='flex justify-end'>
              <div>
                <img src={vijay} className='h-12 w-12 rounded-full'/>
              </div>
              <div className='px-3'>
                 <p className='text-lg font-semibold'>Mamtha</p>
                 <p>  okeyy...</p>
              </div>
            </div>
          </div>
    </section>
  )
}

export default Sidebar