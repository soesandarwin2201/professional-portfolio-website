import * as THREE from "three";
import { useRef, useState, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, TrackballControls } from "@react-three/drei";

const yourWords = [
  "HTML5",
  "CSS3",
  "React",
  "Rails",
  "Ruby",
  "JavaScript",
  "SQL",
  "PostgreSQL",
  "jQuery",
  "Next.js",
  "UI",
  "Graphic",
  "Remote",
  "GitHub",
  "Git",
  "Node.js",
  "flutter.js",
];

function Word({ children, ...props }) {
  // Rest of the component code...
  const color = new THREE.Color();
  const fontProps = {
    font: "/Inter-Bold.woff",
    fontSize: 2.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    "material-toneMapped": false,
  };
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const over = (e) => (e.stopPropagation(), setHovered(true));
  const out = () => setHovered(false);
  // Change the mouse cursor on hover
  useEffect(() => {
    if (hovered) document.body.style.cursor = "pointer";
    return () => (document.body.style.cursor = "auto");
  }, [hovered]);
  // Tie component to the render-loop
  useFrame(({ camera }) => {
    // Make text face the camera
    ref.current.quaternion.copy(camera.quaternion);
    // Animate font color
    ref.current.material.color.lerp(
      color.set(hovered ? "#fa2720" : "white"),
      0.1
    );
  });
  return (
    <Text
      ref={ref}
      onPointerOver={over}
      onPointerOut={out}
      onClick={() => console.log("clicked")}
      {...props}
      {...fontProps}
      children={children}
    />
  );
}

function Cloud({ count = 4, radius = 20 }) {
  const words = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    let wordIndex = 0;

    for (let i = 1; i < count + 1; i++) {
      for (let j = 0; j < count; j++) {
        const pos = new THREE.Vector3().setFromSpherical(
          spherical.set(radius, phiSpan * i, thetaSpan * j)
        );
        const word = yourWords[wordIndex % yourWords.length];
        temp.push([pos, word]);
        wordIndex++;
      }
    }
    return temp;
  }, [count, radius]);

  return words.map(([pos, word], index) => (
    <Word key={index} position={pos} children={word} />
  ));
}

export default function Words() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 35], fov: 90 }}
      scale={[3, 3, 3]}
    >
      <fog attach="fog" args={["#202025", 0, 80]} />
      <Cloud count={8} radius={20} />
      <TrackballControls />
    </Canvas>
  );
}
