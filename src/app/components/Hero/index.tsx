'use client'
import Image from "next/image";
import { useEffect } from "react";
import { DotLottie } from '@lottiefiles/dotlottie-web';

import { useLanguage, ILanguage } from "@/app/context/LanguageContext";

import TypingEffect from "../TypingEffect";

const Hero = () => {
  const { t } = useLanguage() as ILanguage

  useEffect(() => {
    new DotLottie({
      autoplay: true,
      loop: true,
      canvas: document.querySelector('#dotlottie-canvas'),
      src: "https://lottie.host/6978585c-856f-46bb-a5d7-be4f50bffe27/NdaoD5KB77.lottie"
    })
  }, [])

  return (
    <section id="hero" className="pt-[120px] font-poppins">
      <Image 
        src='/vinky-profile.png' 
        alt="Profile Pic" 
        width={230} 
        height={230}
        className="rounded-full bg-[#1A1A1A] mx-auto w-60 h-60 object-center object-contain"
      />
      <div className="mt-9 font-poppins">
        <div className="font-bold text-6xl">
          <TypingEffect
            texts={[
              t('hero.name.0'),
              t('hero.name.1'),
              t('hero.name.2'),
            ]} 
          />
        </div>
        <div className="font-semibold text-[#878787] text-3xl mt-2">
          {t('hero.title.code')}
          <span className="bg-linear-135 from-purple-400 to-orange-400 bg-clip-text text-transparent">{' '}{t('hero.title.chill')}</span>
          <canvas id="dotlottie-canvas" className="inline-block w-auto h-[50px] align-text-bottom ml-[-10px]"></canvas>
        </div>
      </div>
      <div className="mt-[21px] text-base text-[#E1E1E1] max-w-[587px] mx-auto">
        {t('hero.description')}
      </div>
      <button 
        className="mt-9 border-2 border-[#585858] rounded-full py-4 px-12 outline-[#585858] cursor-pointer hover:bg-white hover:text-black"
        onClick={() => {
          location.href = "mailto:vinkyguivano@gmail.com"
        }}
      >
        {t('hero.contact.me')}
      </button>
    </section>
  )
}

export default Hero;