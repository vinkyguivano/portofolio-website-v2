import Image from 'next/image';

import LanguageToggle from '../LanguageSwitcher';

const Header = () => {
  return (
    <>
      <div id="header" className="fixed font-poppins top-0 inset-x-0 h-[80px] px-15 backdrop-blur-sm z-10 max-md:px-11">
        <div className='flex items-center justify-between w-full h-full'>
          <div>
            <Image
              src="/Logo VG.png"
              alt="logo VG"
              width={40}
              height={40}
            />
          </div>
          <div className="grid">
            <LanguageToggle />
          </div> 
        </div>
      </div>
    </>
  )
}

export default Header;