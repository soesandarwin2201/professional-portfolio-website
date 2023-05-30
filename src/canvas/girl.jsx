import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Model } from "../../Scene";

const House = () => {
  return (
    <>
        <Canvas camera={{ position: [20, 3, 5], fov: 75 }}>
                <ambientLight intensity={1} />
                {/* <pointLight  position={[10, 10, 1]} /> */}
                <spotLight position={[10, 10, 1]} angle={0.12} />
                <Model />
                <OrbitControls
                    minAzimuthAngle={-Math.PI / 4}
                    maxAzimuthAngle={Math.PI / 4}
                    minPolarAngle={Math.PI / 2}
                    maxPolarAngle={Math.PI - Math.PI / 2}
                    enableDamping={false}
                    enablePan={true}
                />
                
            </Canvas>
    </>
  )
}

export default House