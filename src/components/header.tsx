'use client'
import Link from 'next/link';
import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav>
        <div className="container mx-auto flex items-center justify-between text-white pt-[30px]  "> 
          {/* Logo or Brand Name */}
          <h1 className="text-[40px] text-white font-bold
           mb-6 xl:mb-0 xxs:text-[25px] pt-[30px] flex justify-center text-center lg:text-[50px] lg:pt-[0px]  ">
            SABIHA<span className="text-transparent" style={{ 
              WebkitTextStroke: '2px #ffffff',
              fontFamily: 'franklin-gothic-urw, sans-serif' 
            }}>SULTANA</span>
          </h1>

          <div className="flex items-center "> 
            {/* Mobile & Tablet Navigation */}
            <div className={`xl:hidden ${isMenuOpen ? 'flex' : 'hidden'} flex-col ml-4`}> 
              <Link href="/" className="hover:text-gray-300 mb-4">Home</Link>
              <Link href="/" className="hover:text-gray-300 mb-4">Blog</Link>
              <Link href="/contact" className="hover:text-gray-300">Contact</Link>
            </div>

            {/* Hamburger Icon */}
            <button 
              className="xl:hidden" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[30px] h-[30px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex space-x-[60px] text-[20px] xl:pr-[25px]">
              <Link href="/" className="hover:text-gray-300">Home</Link>
              <Link href="/" className="hover:text-gray-300">Blog</Link>
              <Link href="/contact" className="hover:text-gray-300">Contact</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;