import { blogs } from '@/lib/blog'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
function Blog() {
  return (



    <>
     <h2 className='mt-[70px] text-white text-[26px]'>All Blog Posts</h2>
    <div className='grid grid-cols-3 space-y-[20px]'>
      
{blogs.map((blog) => (
    
            <section key={blog.id} className='  text-white w-full'>
                
              <div className='relative h-[250px] w-[380px] mt-[30px] '>
                <Image src={blog.image1} alt={blog.title} objectFit='cover' layout='fill' className='hover:scale-105 transition duration-300'>
                  
                </Image>
              </div>
              <div className='mt-[30px]  w-[250px]'>
                <h1 className='font-semibold  text-purple-500' >{blog.day}, {blog.date}</h1>
                <h1 className='mt-[10px] text-[20px] w-[250px] text-justify'>{blog.title}</h1>
                <p className='w-[300px] mt-[10px]  text-gray-300 text-justify'>{blog.content1}</p>
                <Link href={`/post/id?content1=${blog.content1}&content2=${blog.content2}&content3=${blog.content3}&title=${blog.title}&day=${blog.day}&date=${blog.date}&image1=${blog.image1}&image2=${blog.image2}&image3=${blog.image3}`}>
                <button className='bg-white text-blue-600 rounded-full text-[14px] py-[5px] px-[10px] font-extrabold mt-[20px] hover:scale-105 transition duration-300'>
                  {blog.button}</button></Link>
              </div>
            </section>
          ))}






    </div>
    </>
  )
}

export default Blog