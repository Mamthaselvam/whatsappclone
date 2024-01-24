import React from 'react'
import { DownloadOutlined } from '@ant-design/icons';
import { Button} from 'antd';
const Content = () => {
  const bg="url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv1KwbIRp_24cBf2lyu11SNj5EWdNdx18ucoi4vY3T&s')"
  return (
    <div>
      <section  className=' container-fluid h-[85vh] flex items-center m-10 '
      style={{backgroundImage:bg, backgroundSize: "cover", backgroundRepeat: "no-repeat",backgroundPosition: "center", }}>
               <div className='text-white ml-24 mt-5'>
          <p className='text-7xl font-semibold tracking-tight'>Message<br/> privately</p><br/>
          <p className='text-xl'>Simple, reliable, private messaging and <br/> calling for free*, available
          all over the <br/> world</p>

          <div>
            <Button type="primary" shape="round" className='bg-green-500 mt-16  ' icon={<DownloadOutlined />} >
            Download
          </Button>
            </div>
        </div>
      </section>
      <p className='text-end pr-8 '> *Data charges may apply. Contact your provider for details.</p>   
    </div>
  )
}

export default Content