import Image from "next/image";

const Hero = () => {
  return (
    <div className="pt-[120px]">
      <Image 
        src='/vinky-profile.png' 
        alt="Profile Pic" 
        width={230} 
        height={230}
        className="rounded-full bg-[#1A1A1A] mx-auto w-60 h-60 object-center object-contain"
      />
    </div>
  )
}

export default Hero;