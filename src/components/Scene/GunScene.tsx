'use client'

import { Canvas, useLoader } from "@react-three/fiber"
import { Center, Environment, OrbitControls, PresentationControls, Stage,useGLTF } from "@react-three/drei"
import { Suspense, useState } from "react"
import Loader from "../ui/custom/Loader"
import React from 'react'
import * as THREE from 'three';
import { GLTFLoader } from "three/examples/jsm/Addons.js"

const GunScene = () => {

  // const [ environment, setEnvironment ] = useState("dawn")
  const gltf = useLoader(GLTFLoader, '/VA_Graduate_Software_Engineer_Test_Machine.glb')

  const scene = new THREE.Scene();
  // const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  // const renderer = new THREE.WebGLRenderer()
  // renderer.setSize(window.innerWidth, window.innerHeight)
  
  const { nodes } = gltf

  // const mesh_groups = nodes["Scene"].children
  const mesh_groups = nodes
  
  console.log("mesh_groups: ", mesh_groups)

  scene.add(mesh_groups.children)

  console.log("scene: ", scene)
  console.log("children total: ", scene.children.length)

  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();

  function onMouseDownHandler(event: any) {

    pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;


    raycaster.setFromCamera(pointer, new THREE.PerspectiveCamera())
  
    const intersections = raycaster.intersectObjects(scene.children, true);
    console.log("intersections: ", intersections)
    
    for ( let i = 0; i < intersections.length; i ++ ) {

      // @ts-ignore
      const selectedObject = intersections[0].object
      const color = new THREE.Color(Math.random(),Math.random(),Math.random() )
      // @ts-ignore
      selectedObject.material.color = color
      //intersections[i].object.material.color.set(0xff0000)
      
      
      console.log(`${selectedObject.name} was clicked`)
    }
  }

  document.addEventListener("mousedown", onMouseDownHandler);

  return (
    <div>

        <Canvas 
          gl={{antialias: true}} 
          dpr = {[1, 2]}
          style={{
            "position" : "fixed",
            "top" : "0",
            "left" : "0",
            "outline" : "none"
          }}
          className={`bg-transparent w-full h-screen scene`}
          shadows
        >
          <PresentationControls  
            speed={1.5}  
            global 
            zoom={1}
            polar={[-10, 10]}
          >
            <Environment preset={"dawn" }/>
            <directionalLight position={[-5, -5, 5]} intensity={2} /> 
            <ambientLight intensity={0.5}/>
            <pointLight />
            <spotLight />
            {/* <HemisphereLight /> */}
            
            <Center>
            <Suspense fallback={<Loader />}>
                <primitive object={gltf.scene} position={[0, 0, 0]} />
            </Suspense>

            </Center>
          </PresentationControls>
          <OrbitControls/>
        </Canvas>

        
    </div>
  )
}

export default GunScene