"use client"
import Image from "next/image";
import Link from "next/link";

import { useLanguage, ILanguage } from "@/app/context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage() as ILanguage
  return (
    <div className="mt-52 mb-32 max-w-[455px] mx-auto">
      <div className="flex items-center justify-center gap-8">
        <Link href={"https://github.com/vinkyguivano"} target="_blank">
          <Image src={"/social-icon/github.svg"} alt="github" width={25} height={25}/>
        </Link>
        <Link href={"https://www.instagram.com/vinkyguivanoo/"} target="_blank">
          <Image src={"/social-icon/instagram.svg"} alt="instagram" width={25} height={25}/>
        </Link>
        <Link href={"https://www.linkedin.com/in/vinky-guivano-a894371b8/"} target="_blank">
          <Image src={"/social-icon/linked-in.svg"}  alt="linkedin" width={25} height={25}/>
        </Link>
      </div>
      <div className="mt-7 text-center text-gray-300 text-xs max-xs:text-[8px]"> 
        {t('footer.description.1')}
        <br />
        {t('footer.description.2')}
      </div>
    </div>
  )
}

export default Footer;