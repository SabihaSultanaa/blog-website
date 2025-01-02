import { asides } from '@/lib/aside'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Aside() {
  return (
    <div className='mt-[100px] xxs:mt-[40px] lg:mt-[100px]'>
        {asides.map((aside) => (
          <div key={aside.id} className="text-white w-full ">
            <div className='relative h-[400px] w-full bg-black xxs:w-[270px] xxs:h-[200px] xs:w-[370px] sm:w-[530px] sm:h-[320px]
            lg:w-full'>
              <Image src={aside.image1} alt={aside.title} objectFit='cover' layout='fill' className='hover:scale-105 transition duration-300'></Image>
            </div>
            <div className=' font-semibold mt-[20px] text-purple-500'>{aside.day} , {aside.date} </div>
            <div className='mt-[20px] text-[27px] xs:w-[370px] sm:w-[530px] lg:w-full'>{aside.title}</div>
            <div className='mt-[15px] w-[900px] text-gray-300 text-justify xxs:w-[270px] xs:w-[370px] sm:w-[530px] lg:w-full '>{aside.content1}</div>
            <Link href={`/post/id?content1=${aside.content1}&content2=${aside.content2}&content3=${aside.content3}&title=${aside.title}&day=${aside.day}&date=${aside.date}&image1=${aside.image1}&image2=${aside.image2}&image3=${aside.image3}`} className="text-2xl font-semibold">
              <button className='bg-white text-blue-600 rounded-full text-[16px] px-[30px] py-[5px] font-extrabold mt-[20px] hover:scale-105 transition duration-300'>
                {aside.button}</button>
            </Link>
          </div>
        ))}
    </div>
  )
}

export default Aside