import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Model } from "../../Scene";

const House = () => {
  return (
    <>
        <Canvas  frameloop='demand' shadows dpr={[1, 2]}  gl={{ preserveDrawingBuffer: true }}>
                <ambientLight intensity={1} />
                {/* <pointLight  position={[10, 10, 1]} /> */}
                <spotLight position={[-20, 50, 10]} angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024} />
                <Model />
                <PerspectiveCamera position={[20, 1, 5]} fov={25}  // Adjust the field of view (in degrees) as needed
 />
                <OrbitControls
                    minAzimuthAngle={-Math.PI / 4}
                    maxAzimuthAngle={Math.PI / 4}
                    minPolarAngle={Math.PI / 6}
                    maxPolarAngle={Math.PI - Math.PI / 6}
                    enableDamping={true}
                    enablePan={false}
                />
                
            </Canvas>
    </>
  )
}

export default House