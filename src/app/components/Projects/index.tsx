'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import ErrorToast from "../Toast"

const Projects = () => {
  const [toastVisible, setToastVisible] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  
  const projects = [
    {
      thumbnail: "/next.svg",
      title: "Merchant Portal",
      description: "Designed a modern UI website comprising more than 50 screens, along with the integration of a blog using Next.js.",
      link: "https://dashboard.dana.id/app/"
    },
    {
      thumbnail: "/next.svg",
      title: "Moservice.id",
      description: "Designed a modern UI website comprising more than 50 screens, along with the integration of a blog using Next.js.",
      link: "https://moservice.id/",
    },
    {
      thumbnail: "/next.svg",
      title: "Homelize",
      description: "Designed a modern UI website comprising more than 50 screens, along with the integration of a blog using Next.js.",
      link: "",
    },
  ] 

  return (
    <section id="projects" className="mt-[105px] font-inter">
      <ErrorToast
        message={errorMsg}
        visible={toastVisible}
        onClose={() => setToastVisible(false)} 
      />
      <div className="font-extrabold text-5xl">PROJECTS</div>
      <div className="font-medium text-sm bg-[linear-gradient(to_right,_var(--color-purple-400)_20%,_var(--color-orange-400)_100%)] bg-clip-text text-transparent tracking-[7px]">EXPLORE NOW</div>
      <div className="mt-14 grid grid-cols-2 gap-6 text-left">
        {projects.map((p, i) => (
          <Link href={p.link} key={i} target="_blank" onClick={(e) => {
            if (!p.link) {
              e.preventDefault()
              setErrorMsg('Link is unavailable.')
              setToastVisible(true)
            }
          }}>
            <div className="flex items-center gap-3.5">
              <Image
                alt="project thumbnail"
                src={p.thumbnail}
                width={150}
                height={95}
                objectFit="contain"
                objectPosition="center"
                className="bg-white rounded-lg overflow-hidden shrink-0 w-[150px] h-[95px]"
              />
              <div>
                <div className="font-extrabold text-lg">{p.title}</div>
                <div className="font-medium text-[8px] text-[#878787]">{p.description}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Projects