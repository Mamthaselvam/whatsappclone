import React from 'react'
import { DownloadOutlined } from '@ant-design/icons';
import { Button} from 'antd';
const Content = () => {
  const bg="url('https://scontent.whatsapp.net/v/t39.8562-34/316546300_547692113846445_7299710494491288098_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=wG3pEQNNK-sAX-wQG5X&_nc_ht=scontent.whatsapp.net&oh=01_AdSPX5jlH7gwNbN1TraXobHlF459vpZkLYajfC2VhPECiA&oe=65B6A4E5')"
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