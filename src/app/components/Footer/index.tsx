import Image from "next/image";
import Link from "next/link";

const Footer = () => {
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
      <div className="mt-7 text-center text-gray-300 text-xs"> 
        Made with care and &#x2665;&#xfe0f; using Next.js and Tailwind CSS
        <br />
        Design inspired by Ibrahim Memon – all credit to him!
      </div>
    </div>
  )
}

export default Footer;