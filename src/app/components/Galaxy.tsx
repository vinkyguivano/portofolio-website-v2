"use client"

import { useEffect } from "react"
import { DotLottie } from "@lottiefiles/dotlottie-web"

const Astronaut = () => {
  useEffect(() => {
    new DotLottie({
      autoplay: true,
      loop: true,
      canvas: document.querySelector('#galaxy-canvas') as HTMLCanvasElement,
      src: "https://lottie.host/f8344a84-1716-4531-9d78-c854e2a736a1/LqdcaVo9wg.lottie",
    })
  }, [])

  return (
    <canvas 
      id="galaxy-canvas" 
      width={200} 
      height={200} 
      className="absolute right-1/8 top-1/6">
    </canvas>
  )
}

export default Astronaut