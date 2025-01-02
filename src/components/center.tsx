
import { centers } from '@/lib/centerposts'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function Center() {
  return (
    <div className='mt-[60px] relative'>
{centers.map((center) => (
          <div key={center.id} className="text-white xl:flex xl:gap-[120px] xxs:gap-[40px] ">
            <div className=' h-[250px] mt-[30px] w-[630px]  '>
               
    <Image src={center.image1} alt={center.title} width={700} height={250} className='hover:scale-105 transition
    xxs:h-[150px]  duration-300 xxs:w-[280px] xxs:mt-[40px] xs:w-[350px] sm:w-[540px] sm:h-[300px] sm:mt-[20px] lg:w-[900px] lg:h-[300px]'></Image>
            </div>
            <div className=' w-[500px]'>
            <div className=' font-semibold mt-[20px] xxs:mt-[0px] text-purple-500 sm:mt-[70px]'>{center.day} , {center.date} </div>
            <div className='mt-[20px] text-[27px] w-[600px] xxs:w-[280px] xs:w-[350px]'>{center.title}</div>
            <div className='mt-[15px] lg:w-[800px] xl:w-[540px] text-gray-300 text-justify xxs:w-[280px] xs:w-[350px] sm:w-[500px] md:w-[550px]'>{center.content1}</div>
            <Link href={`/post/id?content1=${center.content1}&content2=${center.content2}&content3=${center.content3}&title=${center.title}&day=${center.day}&date=${center.date}&image1=${center.image1}&image2=${center.image2}&image3=${center.image3}`} className="text-2xl font-semibold">
              <button className='bg-white text-blue-600 rounded-full text-[16px] px-[12px] font-extrabold mt-[20px] hover:scale-105 transition duration-300'>
                {center.button}</button>
            </Link>
            </div>
          </div>
        ))}



    </div>
  )
}

export default Center