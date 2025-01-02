// import { Input } from "./ui/input";
// import { Button } from "./ui/button";

import { Facebook, Linkedin, Mail, Twitter, Youtube } from "lucide-react";
import Link from "next/link";




export default function Footer() {
  return (
    <footer className="text-white mt-[0px] mb-[30px]">
    <div className="container mx-auto px-[40px]">
      <div className="grid md:grid-cols-4 gap-2">
        
        <div>
          <h4 className="text-whitemb-4">Links</h4>
          <nav className="space-y-4">
            <a href="#" className="block mt-[20px]">Home</a>
           
            <a href="#" className="block">Blog</a>
            <a href="#" className="block">Contact</a>
          </nav>
        </div>
        <div>
          <h4 className="text-white mb-4">Help</h4>
          <nav className="space-y-4">
            <a href="#" className="block">Payment Options</a>
            <a href="#" className="block">Returns</a>
            <a href="#" className="block">Privacy Policies</a>
          </nav>
        </div>
        <div>
          <h4 className="text-white mb-4">Get Connected</h4>
          <div className="flex gap-[20px] mt-[30px]">
          <Link href={'https://twitter.com'} target="_blank"><Twitter color="#ffffff" size={30} className="hover:scale-110 transition duration-300"/></Link>
          <Link href={'https://www.youtube.com'} target="_blank"><Youtube color="#ffffff" size={30} className="hover:scale-110 transition duration-300"/></Link>
          <Link href={'https://www.gmail.com'} target="_blank"><Mail color="#ffffff" size={25} className="hover:scale-110 transition duration-300"/></Link>
          <Link href={'https://www.facebook.com'} target="_blank"><Facebook color="#ffffff" size={25} className="hover:scale-110 transition duration-300"/></Link>
          <Link href={'https://www.linkedin.com'} target="_blank"> <Linkedin color="#ffffff" size={25} className="hover:scale-110 transition duration-300"/></Link></div>
          {/* <div className="flex gap-4 mt-4">
          <input 
              type="email" 
              placeholder="Enter Your Email Address"
              className=" px-[20px]  " 
            />
           <button className="bg-purple-600 text-white h-[50px]  mt-[15px]  text-[20px] hover:bg-pink-700 px-[50]">Submit</button>
          </div>  */}
        </div>
      </div>
      <div className="mt-16 pt-8 border-t text-center md:text-left"> 
  <p>Copyright &copy; 2025 All rights reserved | This template is created by SABIHA SULTANA</p> 
</div>
    </div>
  </footer>
  )
}