import React from 'react'
import Image from 'next/image'
import Header from '@/components/header'
import Link from 'next/link'
import Footer from '@/components/footer'
function Contact() {
  return (
  <>
    <div className='px-[140px] pb-[30px]  xxs:px-[0px]'> <Header/></div>
    <div className='bg-white sm:px-[140px] mb-[100px] pb-[80px]  xxs:px-[20px] '>
        
   

              <div className="contact flex gap-[100px]">
              <div className="contact-text  mt-[70px]">
          <h3 className="text-[30px] font-bold text-pink-500">Contact Now</h3>
      <h2 className="text-[40px] font-bold"> Have Question? <br /> Write a Message</h2>

    <input type="text" name="" placeholder="Full Name" className="contact-input xxs:w-[280px] sm:w-[500px] h-[50px] pl-[10px] text-[20px] mt-[20px] 
    border-2 border-black placeholder:text-black
    "/> <br /> 
   

    <input type="text" name="" placeholder="Email Address" className="contact-input xxs:w-[280px] sm:w-[500px] h-[50px] pl-[10px] text-[20px] mt-[15px] border-2 border-black placeholder:text-black "/> <br /> 
    <input type="text" name="" placeholder="Contact Number" className="contact-input xxs:w-[280px] sm:w-[500px] h-[50px] pl-[10px] text-[20px] mt-[15px]  border-2 border-black placeholder:text-black"/> <br /> 
    <textarea name="messgae" id="message" placeholder="Message" className="contact-input xxs:w-[280px] sm:w-[500px] h-[100px] pl-[10px] text-[20px] mt-[15px]  border-2 border-black placeholder:text-black "></textarea> <br />
<Link href={'/'}><button className="bg-pink-600 text-white sm:w-[500px] h-[50px] rounded-[30px] mt-[15px] xxs:w-[200px] text-[20px] hover:bg-pink-700">
  Submit</button></Link>
            </div>
          <Image src="/contact.png" alt="contact" width={700} height={300} className='absolute right-[50px] bottom-[0px] hidden xl:block'></Image>
        <div className="contact-img "></div>
            </div>
           
    </div>
    <div className=''> <Footer/></div>
  
   
    </>
  )
}

export default Contact