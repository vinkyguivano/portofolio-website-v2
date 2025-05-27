"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

import * as random from "maath/random";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StarBackground = (props: any) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref: any = useRef(null);
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 20;
    ref.current.rotation.y -= delta / 30;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#a87bff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ParallaxEffect = () => {
  const { camera, mouse } = useThree();
  useFrame(() => {
    camera.position.x += (mouse.x * 0.5 - camera.position.x) * 0.05;
    camera.position.y += (mouse.y * 0.5 - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  });
  return null;
};

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
const StarsCanvas: React.FC<{}> = () => (
  <div className="w-full h-auto fixed inset-0 z-[1] ">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        {/* <ParallaxEffect /> */}
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;