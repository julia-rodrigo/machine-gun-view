'use client'

import { useAnimations, useGLTF, Stage, PresentationControls } from "@react-three/drei"
import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as THREE from 'three';

export default function MachineGun(props: any){

    
    const { nodes, animations, scene} = useGLTF("/VA_Graduate_Software_Engineer_Test_Machine.glb") 
    // const myModel = useLoader(GLTFLoader, '/VA_Graduate_Software_Engineer_Test_Machine.glb');

    const light = new THREE.AmbientLight( 0x404040 ); // soft white light
    scene.add( light );

    const { actions } = useAnimations(animations, scene)

    return (
        <group>
            <primitive object={nodes} {...props}/>
        </group>
    )
}