'use client'

import { useGLTF } from "@react-three/drei"
import * as THREE from 'three';

export default function MachineGun(props: any){

    
    const { nodes, scene} = useGLTF("/VA_Graduate_Software_Engineer_Test_Machine.glb") 
    // const myModel = useLoader(GLTFLoader, '/VA_Graduate_Software_Engineer_Test_Machine.glb');

    const light = new THREE.AmbientLight( 0x404040 ); // soft white light
    scene.add( light );

    return (
        <group>
            <primitive object={nodes} {...props}/>
        </group>
    )
}