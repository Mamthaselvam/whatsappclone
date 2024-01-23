import React from 'react'
import Content from './Content'
import { DownloadOutlined } from '@ant-design/icons';
import { navs } from "../Data/Data.jsx";
import { Button} from 'antd';
import {Link} from 'react-router-dom';
const Header = () => {
  return (
    <div>
        <div className='flex items-center justify-between m-3'>
            <div >
                <img src='https://static.whatsapp.net/rsrc.php/v3/y7/r/DSxOAUB0raA.png' alt='whatsapp' className='h-9'/>
            </div>
            <div className=''>
               {navs.map((names)=>(
                <Link key={names.id} to={names.url} className='p-3 '>
                <span className=' hover:underline-offset-8'>{names.text}</span>
                </Link>
               ))}
            </div>
            <div>
            <Button type="primary" shape="round" className='bg-green-500 ' icon={<DownloadOutlined />} >
            Download
          </Button>
            </div>
        </div>
        <Content/>
    </div>
  )
}

export default Header