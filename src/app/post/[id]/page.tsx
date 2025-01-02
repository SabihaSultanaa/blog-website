
import Link from "next/link";
import Image from "next/image";

import { blogs } from "@/lib/blog";
import Header from "@/components/header";
import CommentSection from "@/components/CommentSection";
import Footer from "@/components/footer";

export default async function Post({ searchParams }: any) {
  const { content1, content2, content3, title, day, date, image2, image3   } = await searchParams;

  //   if (!post) {
  //     return <div>Post not found</div>;
  //   }

  return (
    <>
   
    <main className="container mx-auto px-[140px] md:bg-red-800 sm:bg-green-600 xs:bg-blue-400 xxs:bg-yellow-400 xxs:px-[0px] xxs:pt-[20px]">
    <Header/>
   <div className="flex  gap-[50px] mt-[80px]">
      <div className="allmaps">
        <div className="xxs:hidden">
          {blogs.map((blog) => (
            <section key={blog.id} className=" text-white w-[370px]">
              <div className="relative h-[230px] w-[330px] mt-[30px] ml-[10px]">
                <Image
                  src={blog.image1}
                  alt={blog.title}
                  objectFit="cover"
                  layout="fill"
                  className="hover:scale-105 transition duration-300"
                ></Image>
              </div>
              <div className="mt-[30px] ml-[20px] w-[250px]">
                <h1 className="font-semibold  text-purple-500">
                  {blog.day}, {blog.date}
                </h1>
                <h1 className="mt-[10px] text-[20px] w-[250px] text-justify">
                  {blog.title}
                </h1>
                <p className="w-[320px] mt-[10px]  text-gray-300 text-justify">
                  {blog.content1}
                </p>
                <Link
                  href={`/post/id?content1=${blog.content1}&content2=${blog.content2}&content3=${blog.content3}&title=${blog.title}&id=${blog.id}&day=${blog.day}&date=${blog.date}&image1=${blog.image1}&image2=${blog.image2}&image3=${blog.image3}&button=${blog.button}`}
                >
                  <button className="bg-white text-blue-600 rounded-full text-[14px] py-[5px] px-[10px] font-extrabold mt-[18px] mb-[8px] hover:scale-105 transition duration-300">
                    {blog.button}
                  </button>
                </Link>
              </div>
            </section>
          ))}
          
        </div>
      </div>
<div className="secondwork">
      {/* second work */}
      <div className=" mt-[30px] xxs:w-[200px] xxs:mt-[10px]">
        <h1 className="text-purple-500 text-[20px]">{day} , {date}</h1>
        <h1 className="text-white text-[50px] mt-[20px] xxs:text-[30px]">{title}</h1>
        <p className="text-white mt-[8px] text-[20px] leading-[30px] w-[800px] text-justify xxs:w-[200px]">
          {content1}
          </p>
        <div className="relative w-[800px] h-[600px] mt-[50px] xxs:w-[200px] xxs:h-[200px]">
        <Image
          src={image2}
          alt={title} 
          objectFit="cover"
          layout="fill"
          className=""
        ></Image></div>
        <p className="text-white mt-[80px] text-[16px] leading-[30px] w-[800px] text-justify xxs:w-[200px]">
          {content2}
          </p>



       {/* <div className="w-[800px] h-[250px] bg-gradient-to-t from-pink-500 to-blue-800  mt-[150px]">
        <h1 className="text-white text-[25px] px-[50px] py-[50px] w-[500px]">Climb the ladder of success with  SABIHA SULTANA BLOGS</h1>
        <button></button>
        <Image
          src={'/dp2.png'}
          alt={title} 
          width={300}
          height={200}
          className="absolute right-[150px] top-[1500px]" 
        ></Image>
<button className="bg-blue-300 text-black font-bold rounded-full text-[18px] py-[10px] px-[40px] ml-[100px]  hover:scale-105 transition duration-300">Get Started</button>
       </div> */}






        <div className="relative w-[800px] h-[600px]  mt-[80px] xxs:w-[200px] xxs:h-[200px]" >
        <Image
          src={image3}
          alt={title} 
          objectFit="cover"
          layout="fill"
          className=""
        ></Image></div>
 <p className="text-white mt-[80px] text-[16px] leading-[30px] w-[800px] text-justify xxs:w-[200px]">
          {content3}
 </p>
       
 <CommentSection />


{/* start here input  */}
 {/* <div className="mt-[100px]">
      <h1 className="text-white text-[30px]">Leave a comment</h1>
      <h2 className="text-white mt-[80px] mb-[30px]">Comment</h2>
      <textarea name="Message" id="message" className="w-[700px] h-[150px] bg-gray-300"></textarea>
      <button type="submit" className="bg-pink-600 text-white w-[200px] h-[50px]  mt-[15px]  text-[20px] hover:bg-pink-700">Submit</button>
      </div> */}
       
      </div>
      {/* end here input */}
      
      </div>
      {/* second work ends */}
      
      </div>
      <div className='mt-[150px]'>
                <Footer/></div>
      </main>
    </>
  );
}
