import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <>


<nav >
      <div className="container mx-auto flex gap-[500px] items-center text-white mt-[40px] ">
        {/* Logo or Brand Name */}
        <h1 className="
        
        text-[40px] text-white font-bold" >SABIHA<span className="text-transparent"
                style={{
                    WebkitTextStroke: '2px #ffffff',
                    fontFamily:'franklin-gothic-urw, sans-serif'
                
                }}>SULTANA</span></h1>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex space-x-[60px] text-[20px] ">
          <Link href="/" className=" hover:text-gray-300">Home </Link>
          <Link href="/" className="hover:text-gray-300">Blog</Link>
          <Link href="/contact" className="hover:text-gray-300">Contact</Link>
    
        </div>
        </div>
        </nav>

    </>
  )
}

export default Header