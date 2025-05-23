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
        Made with full of &#x2665;&#xfe0f;. Built with Next.js and Tailwind CSS
        <br />
        Credit to <b>Ibrahim Memon</b> for this amazing design
      </div>
    </div>
  )
}

export default Footer;