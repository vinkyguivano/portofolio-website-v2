import Image from 'next/image';

const Header = () => {
  return (
    <>
      <div id="header" className="fixed font-poppins top-0 inset-x-0 h-[80px] px-15 backdrop-blur-sm z-10">
        <div className='flex items-center justify-between w-full h-full'>
          <div>
            <Image
              src="/Logo VG.png"
              alt="logo VG"
              width={40}
              height={40}
            />
          </div>
          <div className="grid grid-cols-2 gap-[10px]">
            <button className="border-2 border-gray-600 rounded-xl py-2 px-3.5 font-medium text-[13px] text-[#E1E1E1] cursor-pointer">
              About Me
            </button>
            <button className="bg-white rounded-xl py-2 px-3.5 font-medium text-[13px] text-black cursor-pointer">
              Contact
            </button>
          </div> 
        </div>
      </div>
    </>
  )
}

export default Header;