'use client'

import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';

const CanvasScene = () => {
  return (
    <div className='bg-overflow'>
        <Canvas 
            gl={{antialias: true}} 
            dpr = {[1, 2]}
            camera={{ fov: 24, position: [-6, 7, 7] }}
            style={{
            "position" : "fixed",
            "top" : "0",
            "left" : "0",
            "outline" : "none"
            }}
            className="bg-transparent scene"
            shadows
        >
            <directionalLight position={[-5, -5, 5]} intensity={2} /> 
            <ambientLight intensity={0.5}/>
        </Canvas>
    </div>
  )
}

export default CanvasScene