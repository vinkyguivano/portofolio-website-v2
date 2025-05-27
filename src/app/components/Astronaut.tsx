"use client"

import { useEffect } from "react"
import { DotLottie } from "@lottiefiles/dotlottie-web"

const Astronaut = () => {
  useEffect(() => {
    new DotLottie({
      autoplay: true,
      loop: true,
      canvas: document.querySelector('#astronaut-canvas'),
      src: "https://lottie.host/a7801968-f5b8-4c01-aec5-29b7aaa73efc/EfJIQ8YRCW.lottie",
    })
  }, [])

  return (
    <canvas 
      id="astronaut-canvas" 
      width={200} 
      height={200} 
      className="absolute left-1/8 top-1/6">
    </canvas>
  )
}

export default Astronaut