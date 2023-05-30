/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 public/girl/scene.gltf --transform
Author: minghauLoh (https://sketchfab.com/minghau)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/young-priestess-a7aa853215eb4e1ab5ddea41879d9ff2
Title: Young priestess
*/

import React, { useRef } from 'react'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene-transformed.glb')
  return (
    <>
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Body_FoxGirl_0.geometry} material={materials.FoxGirl} position={[-11.887, -133.832, -0.762]} rotation={[-Math.PI / 2, 0, 0]} scale={[2, 2, 2]} />
      <mesh geometry={nodes.Eyes_Highlight_0.geometry} material={materials.Highlight} position={[-9.92, -132.305, -20.322]} rotation={[-1.377, -0.022, -0.144]} />
      <mesh geometry={nodes.Scroll_Props_0.geometry} material={materials.Props} position={[-19.029, -62.633, 30.059]} rotation={[-1.53, 0.99, 0.217]}  scale={[1.5, 1.5, 1.5]} />
    </group>
    </>
  )
}

useGLTF.preload('/scene-transformed.glb')