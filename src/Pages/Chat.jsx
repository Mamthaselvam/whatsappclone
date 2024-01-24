import React from 'react'
import { GrGroup } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";
import { GiRoundShield } from "react-icons/gi";
import vijay from '../assets/vijay.jpg'
import scooby from '../assets/scooby.png'
import { IoVideocamOutline } from "react-icons/io5";
import Sidebar from '../Components/Sidebar';
const Chat = () => {
  return (
    <div>
        <div className=' flex justify-between container-fluid bg-slate-100 position-fixed top-0 left-0 w-full z-20 p-2'>
            <div className='flex justify-between w-2/5 cursor-pointer'>
            <div>
                <img src={vijay} className='h-12 w-12 rounded-full'/>
            </div>
            <div className='flex items-center  text-2xl px-5  '>
                <span className=''><GrGroup/></span>
                <span className='mx-7'><IoCallOutline/></span>
                <span className=''><GiRoundShield/></span>
            </div>
            </div>

            <div className='flex justify-between w-full cursor-pointer pl-20 p-0 '>
            <div className='flex items-center '>
                <img src={scooby} className='h-12 w-12 rounded-full'/>
                <span className='font-semibold ml-3'>Mahi</span>
            </div>
            <div className='flex items-center text-2xl ml-3'>
                <span className=''><IoVideocamOutline/></span>
                <span className='mx-7'><IoCallOutline/></span>
                <span className=''><GiRoundShield/></span>
            </div>
            </div>
        </div>
        <Sidebar/>
    </div>
  )
}

export default Chat