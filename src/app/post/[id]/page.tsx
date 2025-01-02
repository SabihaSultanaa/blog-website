
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
   
    <main className="
    container mx-auto md:px-[30px] sm:px-[10px] lg:px-[60px] xl:px-[100px] 2xl:px-[120px]
      xxs:px-[0px] ">
    <Header/>
   <div className="flex  sm:gap-[10px] md:mt-[80px] xxs:mt-[30px] lg:gap-[60px] ">
      <div className="allmaps">
        <div className=" ">
          {blogs.map((blog) => (
            <section key={blog.id} className=" text-white w-[370px] sm:w-[250px] sm:block hidden lg:w-[300px] " >
              <div className="relative h-[230px] w-[330px] mt-[30px] ml-[10px] sm:w-[250px] sm:h-[250px] sm:ml-[0px] lg:w-[300px] ">
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
                <h1 className="mt-[10px] text-[20px] w-[250px] text-justify sm:w-[200px]">
                  {blog.title}
                </h1>
                <p className="w-[320px] mt-[10px]  text-gray-300  sm:w-[200px] lg:w-[280px] md:ml-[0px] md:pl-[0px]">
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
      <div className=" mt-[30px] xxs:mt-[20px] px-[0px] mx-[0px] xs:w-[400px] sm:w-[335px] md:w-[450px] 
       lg:w-[570px] xl:w-[730px] 2xl:w-[980px]">
        <h1 className="text-purple-500 text-[20px]">{day} , {date}</h1>
        <h1 className="text-white text-[50px] mt-[20px] xxs:text-[25px] xs:text-[30px] md:text-[40px] 2xl:text-[50px]">{title}</h1>
        <p className="text-white mt-[60px] text-[20px] leading-[30px] w-[800px] text-justify xxs:w-[300px] xs:w-[400px] 
        sm:w-[335px] md:w-[450px] lg:w-[570px] xl:w-[730px] 2xl:w-[980px]">
          {content1}
          </p>
        <div className="relative w-[800px] h-[600px] mt-[90px] xxs:w-[300px] xxs:h-[300px] sm:w-[335px] md:w-[450px] 
        sm:h-[335px] xs:w-[400px]  lg:w-[570px]  xl:w-[730px]  2xl:w-[980px] md:h-[550px] mb-[100px] ">
        <Image
          src={image2}
          alt={title} 
          objectFit="cover"
          layout="fill"
          className=""
        ></Image></div>
        <p className="text-white mt-[150px] mb-[100px] text-[16px] leading-[30px] w-[800px] text-justify xxs:w-[300px] xs:w-[400px] sm:w-[335px] xxs:mt-[30px] md:w-[450px] lg:w-[570px] xl:w-[730px] 2xl:w-[980px]">
          {content2}
          </p>



       






        <div className="relative w-[800px] h-[600px]  mt-[150px] mb-[100px] xxs:w-[300px] xxs:h-[300px] sm:w-[335px] sm:h[335px] xxs:mt-[20px] xs:w-[400px]  md:w-[450px]  lg:w-[570px]  xl:w-[730px]  2xl:w-[980px] md:h-[550px] " >
        <Image
          src={image3}
          alt={title} 
          objectFit="cover"
          layout="fill"
          className=""
        ></Image></div>
 <p className="text-white mt-[80px] text-[16px] leading-[30px] w-[800px] text-justify xxs:w-[300px] sm:w-[335px] xxs:mt-[20px] xs:w-[400px]
 md:w-[450px] lg:w-[570px] xl:w-[730px] 2xl:w-[980px]">
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
      <div className='mt-[150px] xxs:pt-[50px] xxs:mt-[0px] md:mt-[80px] '>
                <Footer/></div>
      </main>
    </>
  );
}
