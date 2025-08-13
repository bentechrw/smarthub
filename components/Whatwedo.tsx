import React from 'react'
import styles from '@/styles/home.module.css'
import { WindIcon } from 'lucide-react'

const Whatwedo = () => {
  return (
    <div className={`${styles.what_we_do} mt-3 mb-0`}>
      <div className="flex justify-between pt-[96px] pb-[64px] pl-[40px] pr-[40px] bg-[#26262c]">
        <div className="w-1/4 flex p-0">
          <h5 className='text-[#ffffff]'>What we do</h5>
        </div>
        <div className="w-3/4  p-0">
          <div className="flex flex-col w-full gap-6">
            <div className="flex flex-col">
              <h2 className='text-[4vw] font-black text-white'>Online service solutions</h2>
              <p className='text-[1.1rem] font-[400] text-[#8b9297]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia officiis eius in facilis a numquam obcaecati omnis.</p>
            </div>
            <div className="flex gap-9 flex-wrap">
              <div className="flex flex-col w-[46%]">
                <div className="flex justify-center text-[#2ccab9]"><WindIcon size={45}/></div>
                <div className="text-[#ffffff] text-left">
                  <h4 className='text-[1.8rem] font-[700]'>Irembo Services</h4>
                  <p className='text-[#8b9297]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae doloremque omnis ad. Deserunt, nostrum architecto? Quos ex maxime eum dolores.</p>
                </div>
              </div>
              <div className="flex flex-col w-[46%]">
                <div className="flex justify-center text-[#2ccab9]"><WindIcon size={45}/></div>
                <div className="text-[#ffffff] text-left">
                  <h4 className='text-[1.8rem] font-[700]'>Internet Cafe</h4>
                  <p className='text-[#8b9297]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae doloremque omnis ad. Deserunt, nostrum architecto? Quos ex maxime eum dolores.</p>
                </div>
              </div>
              <div className="flex flex-col w-[46%]">
                <div className="flex justify-center text-[#2ccab9]"><WindIcon size={45}/></div>
                <div className="text-[#ffffff] text-left">
                  <h4 className='text-[1.8rem] font-[700]'>Computer & mobile training</h4>
                  <p className='text-[#8b9297]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae doloremque omnis ad. Deserunt, nostrum architecto? Quos ex maxime eum dolores.</p>
                </div>
              </div>
              <div className="flex flex-col w-[46%]">
                <div className="flex justify-center text-[#2ccab9]"><WindIcon size={45}/></div>
                <div className="text-[#ffffff] text-left">
                  <h4 className='text-[1.8rem] font-[700]'>Software installation</h4>
                  <p className='text-[#8b9297]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae doloremque omnis ad. Deserunt, nostrum architecto? Quos ex maxime eum dolores.</p>
                </div>
              </div>
              <div className="flex flex-col w-[46%]">
                <div className="flex justify-center text-[#2ccab9]"><WindIcon size={45}/></div>
                <div className="text-[#ffffff] text-left">
                  <h4 className='text-[1.8rem] font-[700]'>Taxing services</h4>
                  <p className='text-[#8b9297]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae doloremque omnis ad. Deserunt, nostrum architecto? Quos ex maxime eum dolores.</p>
                </div>
              </div>
              <div className="flex flex-col w-[46%]">
                <div className="flex justify-center text-[#2ccab9]"><WindIcon size={45}/></div>
                <div className="text-[#ffffff] text-left">
                  <h4 className='text-[1.8rem] font-[700]'>Graphic design</h4>
                  <p className='text-[#8b9297]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae doloremque omnis ad. Deserunt, nostrum architecto? Quos ex maxime eum dolores.</p>
                </div>
              </div>
              <div className="flex flex-col w-[46%]">
                <div className="flex justify-center text-[#2ccab9]"><WindIcon size={45}/></div>
                <div className="text-[#ffffff] text-left">
                  <h4 className='text-[1.8rem] font-[700]'>Photography</h4>
                  <p className='text-[#8b9297]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae doloremque omnis ad. Deserunt, nostrum architecto? Quos ex maxime eum dolores.</p>
                </div>
              </div>
              <div className="flex flex-col w-[46%]">
                <div className="flex justify-center text-[#2ccab9]"><WindIcon size={45}/></div>
                <div className="text-[#ffffff] text-left">
                  <h4 className='text-[1.8rem] font-[700]'>Company registration</h4>
                  <p className='text-[#8b9297]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae doloremque omnis ad. Deserunt, nostrum architecto? Quos ex maxime eum dolores.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Whatwedo