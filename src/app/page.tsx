import Header from '@/components/header';
import { posts } from '@/lib/posts';
import Link from 'next/link';
import Image from 'next/image';
import { sides } from '@/lib/sidepost';
import Center from '@/components/center';
import Blog from '@/components/blog';
import Aside from '@/components/aside';
import Footer from '@/components/footer';
// import { posts, formatDate } from '../lib/posts';

export default function Home() {
  return ( 
    <div className="container mx-auto px-[140px] ">
      <Header/>
      <h1 className="text-[80px] font-extrabold mb-8 text-white py-4 md:py-[50px] mt-14 md:mt-[70px] mainhead">BLOG CENTRAL</h1>
<h2 className="text-white text-xl md:text-[26px] mt-8 md:mt-[70px]">Recent Blog Post</h2>


<div className=' '>
      {/* first map work */}
     
        {posts.map((post) => (
          <div key={post.id} className="text-white  w-[600px] absolute">
            <div className='relative h-[250px] w-[600px] mt-[30px]'>
              <Image src={post.image1} alt={post.title} objectFit='cover' layout='fill' className='hover:scale-105 transition duration-300'></Image>
            </div>
            <div className=' font-semibold mt-[20px] text-purple-500'>{post.day} , {post.date} </div>
            <div className='mt-[20px] text-[27px]'>{post.title}</div>
            <div className='mt-[15px] w-[400px] text-gray-300 text-justify'>{post.content1}</div>
            <Link href={`/post/id?content1=${post.content1}&content2=${post.content2}&content3=${post.content3}&title=${post.title}&day=${post.day}&date=${post.date}&image1=${post.image1}&image2=${post.image2}&image3=${post.image3}`} className="text-2xl font-semibold">
              <button className='bg-white text-blue-600 rounded-full text-[16px] px-[12px] font-extrabold mt-[20px] hover:scale-105 transition duration-300'>
                {post.button}</button>
            </Link>
          </div>
        ))}

        
          {sides.map((side) => (
            <section key={side.id} className='  text-white ml-[650px] flex w-[700px]'>
              <div className='relative h-[200px] w-[350px] mt-[30px] ml-[10px]'>
                <Image src={side.image1} alt={side.title} objectFit='cover' layout='fill' className='hover:scale-105 transition duration-300'>
                  
                </Image>
              </div>
              <div className='mt-[30px] ml-[20px] w-[250px]'>
                <h1 className='font-semibold  text-purple-500' >{side.day}, {side.date}</h1>
                <h1 className='mt-[10px] text-[20px] w-[250px] text-justify'>{side.title}</h1>
                <p className='w-[250px] mt-[10px]  text-gray-300 text-justify'>{side.content1}</p>
                <Link href={`/post/id?content1=${side.content1}&content2=${side.content2}&content3=${side.content3}&image1=${side.image1}&image2=${side.image2}&image3=${side.image3}&title=${side.title}&day=${side.day}&date=${side.date}`}>
                <button className='bg-white text-blue-600 rounded-full text-[14px] py-[5px] px-[10px] font-extrabold mt-[20px] hover:scale-105 transition duration-300'>
                  {side.button}</button></Link>
              </div>
            </section>
          ))}
          <Center/>
          <Blog/>
          <Aside/>
          <div className='mt-[150px]'>
          <Footer/></div>
    </div>







{/* end divs */}
           </div>
        



    
    
   
  );
}

