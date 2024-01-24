import React from 'react'
import { navs } from "../Data/Data.jsx";
import { DownloadOutlined } from '@ant-design/icons';
import { Button} from 'antd';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <div className='flex items-center justify-between m-5'>
            <div >
                <img src='https://static.whatsapp.net/rsrc.php/v3/y7/r/DSxOAUB0raA.png' alt='whatsapp' className='h-9'/>
            </div>
            <div className=''>
               {navs.map((names)=>(
                <Link key={names.id} to={names.url} className='p-3 '>
                <span className='text-xl hover:underline underline-offset-4 decoration-green-600'>{names.text}</span>
                </Link>
               ))}
            </div>
            <div>
            <Button type="primary" shape="round" className='bg-green-500 ' icon={<DownloadOutlined />} >
            Download
          </Button>
            </div>
        </div>
       
    </div>
  )
}

export default Header