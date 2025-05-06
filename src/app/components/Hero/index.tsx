import Image from "next/image";


const Hero = () => {
  return (
    <div className="pt-[120px] font-poppins">
      <Image 
        src='/vinky-profile.png' 
        alt="Profile Pic" 
        width={230} 
        height={230}
        className="rounded-full bg-[#1A1A1A] mx-auto w-60 h-60 object-center object-contain"
      />
      <div className="mt-9 font-poppins">
        <div className="font-bold text-6xl">Vinky Guivano!</div>
        <div className="font-semibold text-[#878787] text-3xl mt-2">
          I do Code &
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent"> Chill</span>
        </div>
      </div>
      <div className="mt-[21px] text-base text-[#E1E1E1] max-w-[587px] mx-auto">
        Passionate Software Engineer with a focus on Frontend development,
        dedicated to crafting elegant and user-friendly web applications.
      </div>
      <button className="mt-9 border-2 border-[#585858] rounded-full py-4 px-12 bg-black hover:bg-gray-900 outline-[#585858] active:outline-1 active:outline-offset-2 cursor-pointer">
        Contact Me
      </button>
    </div>
  )
}

export default Hero;