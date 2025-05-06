'use client'
import { useEffect } from 'react';
import Image from 'next/image';

const Header = () => {
  useEffect(() => {
    const header = document.getElementById('header')
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        header?.classList.add('shadow-md');
      } else {
        header?.classList.remove('shadow-md');
      }
    })
  }, [])

  return (
    <>
      <div id="header" className="fixed inset-x-0 top-0 flex items-center justify-between py-[35px] px-[150px] font-poppins bg-black shadow-gray-900">
        <div>
          <Image
            src="/Logo VG.png"
            alt="logo VG"
            width={40}
            height={40}
          />
        </div>
        <div className="grid grid-cols-2 gap-[10px]">
          <button className="border-2 border-gray-600 rounded-xl py-2 px-3.5 font-medium text-[13px] text-[#E1E1E1] cursor-pointer hover:bg-gray-900">
            About Me
          </button>
          <button className="bg-white rounded-xl py-2 px-3.5 font-medium text-[13px] text-black cursor-pointer hover:bg-gray-200">
            Contact
          </button>
        </div> 
      </div>
    </>

  )
}

export default Header;