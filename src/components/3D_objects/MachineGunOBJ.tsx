import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { a } from "@react-spring/three"

const MachineGunOBJ = ({ 
  // isRotating, 
  // setIsRotating, 
  props} : { 
  //   isRotating: boolean, 
  //   setIsRotating: Dispatch<SetStateAction<boolean>>, 
  //   // currentFocusPoint: number | null,
  //   // setCurrentStage: Dispatch<SetStateAction<number | null>>,
    [props:string]: any
  }) => {


  const gunRef = useRef()
  const { nodes, materials } = useGLTF('/VA_Graduate_Software_Engineer_Test_Machine.glb')

  return (
    <a.group {...props} ref={gunRef}>
      <mesh
        //@ts-expect-error
        geometry={nodes.Conveyor_Outfeed.geometry}
        material={materials.Conveyor}
        position={[0, 1.161, 1.287]}
        scale={[0.383, 0.645, 0.645]}
      />
      <mesh
        
        
        //@ts-expect-error
        geometry={nodes.Plane004.geometry}
        material={materials.Machine}
        position={[-0.054, 1.613, -0.653]}
      />
      <mesh
        
        
        //@ts-expect-error
        geometry={nodes.Plane005.geometry}
        material={materials.Machine}
        position={[-0.054, 1.613, 0.64]}
      />
      <mesh
        //@ts-expect-error
        geometry={nodes.VA_BaseShell.geometry}
        material={materials.Machine}>
        <mesh
          
          //@ts-expect-error
          geometry={nodes.BaseShell_Door_Lower.geometry}
          material={materials.Machine}
          position={[0.409, 0.231, 0]}
          rotation={[0, 0, 2.024]}
        />
        <mesh
          
          
          //@ts-expect-error
          geometry={nodes.BaseShell_Door_Upper.geometry}
          material={materials.Machine}
          position={[0.543, 0.986, 0]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <mesh
          
          
          //@ts-expect-error
          geometry={nodes.BaseShell_Support_L.geometry}
          material={materials.Machine}
          position={[0.056, 0.571, -0.606]}
          rotation={[0, 0, -Math.PI]}
        />
        <mesh
          
          
          //@ts-expect-error
          geometry={nodes.BaseShell_Support_R.geometry}
          material={materials.Machine}
          position={[0.056, 0.571, 0.567]}
          rotation={[0, 0, -Math.PI]}
        />
      </mesh>
      <mesh
        
        
        //@ts-expect-error
        geometry={nodes.Conveyor_Infeed.geometry}
        material={materials.Conveyor}
        position={[0, 1.161, -1.246]}
        scale={[0.383, 0.645, 0.645]}
      />
      <mesh
        
        
        //@ts-expect-error
        geometry={nodes.Outfeed_Rail_A.geometry}
        material={materials.Machine}
        position={[0.407, 1.281, 1.308]}
        rotation={[0, 0, -Math.PI]}
        scale={[0.007, 0.062, 0.655]}
      />
      <mesh
        
        
        //@ts-expect-error
        geometry={nodes.Cylinder004.geometry}
        //@ts-expect-error
        material={nodes.Cylinder004.material}
        position={[-0.423, 1.161, 2.105]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.058, 0.386, 0.058]}
      />
      <mesh
        
        
        //@ts-expect-error
        geometry={nodes.Outfeed_Rail_B.geometry}
        material={materials.Machine}
        position={[-0.414, 1.281, 1.308]}
        rotation={[0, 0, -Math.PI]}
        scale={[0.007, 0.062, 0.655]}
      />
      <mesh
        
        
        //@ts-expect-error
        geometry={nodes.Plane002.geometry}
        material={materials.Machine}
        position={[0.528, 1.712, 0]}
      />
      <mesh
        
        
        //@ts-expect-error
        geometry={nodes.Conveyor_Outfeed_Motor.geometry}
        material={materials.Machine}
      />
      <mesh
        
        
        //@ts-expect-error
        geometry={nodes.Conveyor_Reject_Motor.geometry}
        material={materials.Machine}
        position={[-0.452, 0.449, 0.41]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        
        
        //@ts-expect-error
        geometry={nodes.Conveyor_Reject_Base.geometry}
        material={materials.Machine}
        position={[-0.425, 0.448, 0]}>
        <mesh
          
          
          //@ts-expect-error
          geometry={nodes.Conveyor_Reject.geometry}
          material={materials.Conveyor}
          position={[-0.001, 0, 0.001]}
          rotation={[0, 1.571, 0]}
          scale={[0.383, 0.645, 0.645]}>
          <mesh
            
            
            //@ts-expect-error
            geometry={nodes.Conveyor_Reject_End.geometry}
            material={materials.Machine}
            position={[0.002, 0, 0.812]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[1.551, 1.551, 2.612]}>
            <mesh
              
              
              //@ts-expect-error
              geometry={nodes.Conveyor_Reject_End_Connect.geometry}
              material={materials.Machine}
              position={[0, 0, 0.391]}
              rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
              scale={[-0.038, -0.004, -0.038]}>
              <mesh
                
                
                //@ts-expect-error
                geometry={nodes.Cylinder007.geometry}
                material={materials.Machine}
                position={[0.013, -90.779, 3.913]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                scale={[-26.312, -26.312, -232.139]}>
                <mesh
                  
                  
                  //@ts-expect-error
                  geometry={nodes.Plane014.geometry}
                  material={materials.Conveyor}
                  position={[-0.001, 0, 0.001]}
                  rotation={[0, 1.571, 0]}
                  scale={[0.383, 0.645, 0.645]}>
                  <mesh
                    
                    
                    //@ts-expect-error
                    geometry={nodes.Cylinder009.geometry}
                    material={materials.Machine}
                    position={[0.002, 0, 0.968]}
                    rotation={[0, -1.571, 0]}
                    scale={[1.551, 1.551, 2.612]}>
                    <mesh
                      
                      
                      //@ts-expect-error
                      geometry={nodes.Cylinder006.geometry}
                      material={materials.Machine}
                      position={[0.001, 0, 0.391]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={[-0.038, -0.004, -0.038]}
                    />
                  </mesh>
                </mesh>
              </mesh>
            </mesh>
          </mesh>
        </mesh>
      </mesh>
      <mesh
        
        
        //@ts-expect-error
        geometry={nodes.Cylinder011.geometry}
        material={materials.Machine}
        position={[0, 1.161, 2.105]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        
        
        //@ts-expect-error
        geometry={nodes.Seperator_Back.geometry}
        material={materials.Machine}
        position={[0.467, 1.095, 0.934]}
        scale={[0.05, 0.005, 1.05]}
      />
      <mesh
        
        
        //@ts-expect-error
        geometry={nodes.Seperator_Front.geometry}
        material={materials.Machine}
        position={[-0.448, 1.095, 0.934]}
        scale={[0.05, 0.005, 1.05]}
      />
      <mesh
        
        
        //@ts-expect-error
        geometry={nodes.Cylinder012.geometry}
        material={materials.Machine}
        position={[0, 1.198, 0.361]}
        rotation={[0, 1.571, 0]}
        scale={0.467}>
        <mesh
          
          
          //@ts-expect-error
          geometry={nodes.Cylinder013.geometry}
          material={materials.Machine}
          position={[0.693, 0, 0]}
        />
        <mesh
          
          
          //@ts-expect-error
          geometry={nodes.Plane016.geometry}
          material={materials.Conveyor}
          position={[0.822, 0, 0]}
          rotation={[0, -1.571, 0]}
          scale={[0.385, 0.648, 0.648]}
        />
      </mesh>
      <mesh
        
        
        //@ts-expect-error
        geometry={nodes.Cylinder014.geometry}
        material={materials.Machine}
        position={[0, 1.198, -0.362]}
        rotation={[Math.PI, 1.571, 0]}
        scale={0.467}>
        <mesh
          
          
          //@ts-expect-error
          geometry={nodes.Cylinder015.geometry}
          material={materials.Machine}
          position={[0.693, 0, 0]}
        />
        <mesh
          
          
          //@ts-expect-error
          geometry={nodes.Plane017.geometry}
          material={materials.Conveyor}
          position={[0.822, 0, 0]}
          rotation={[0, -1.571, 0]}
          scale={[0.385, 0.648, 0.648]}
        />
      </mesh>
      <mesh
        
        
        //@ts-expect-error
        geometry={nodes.Cylinder001.geometry}
        material={materials.Machine}
        position={[0, 1.161, 0.461]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        
        
        //@ts-expect-error
        geometry={nodes.Cylinder002.geometry}
        material={materials.Machine}
        position={[0, 1.161, -0.464]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        
        
        //@ts-expect-error
        geometry={nodes.Cylinder003.geometry}
        material={materials.Machine}
        position={[0, 1.161, -1.532]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        
        
        //@ts-expect-error
        geometry={nodes.Conveyor_Infeed_Motor.geometry}
        material={materials.Machine}
        rotation={[0, 0, -Math.PI]}
        scale={-1}
      />
      <mesh
        
        
        //@ts-expect-error
        geometry={nodes.Infeed_Rail_A.geometry}
        material={materials.Machine}
        position={[0.407, 1.281, -1.295]}
        scale={[-0.007, -0.062, -0.655]}
      />
      <mesh
        
        
        //@ts-expect-error
        geometry={nodes.Infeed_Rail_B.geometry}
        material={materials.Machine}
        position={[-0.414, 1.281, -1.295]}
        scale={[-0.007, -0.062, -0.655]}
      />
      <mesh
        
        
        //@ts-expect-error
        geometry={nodes.Cylinder.geometry}
        material={materials.Machine}
        position={[0.315, 0.022, 0.655]}
        scale={[0.118, 0.022, 0.118]}>
        <mesh
          
          
          //@ts-expect-error
          geometry={nodes.Cylinder005.geometry}
          material={materials.Machine}
          position={[0, 2.397, 0]}
          rotation={[-Math.PI, 0, 0]}
          scale={[0.215, 1.02, 0.215]}
        />
        <mesh
          
          
          //@ts-expect-error
          geometry={nodes.Cylinder008.geometry}
          material={materials.Machine}
          position={[0, 5.88, 0]}
          rotation={[-Math.PI, 0, 0]}
          scale={[0.276, 0.93, 0.276]}
        />
      </mesh>
      <mesh
        
        
        //@ts-expect-error
        geometry={nodes.Cylinder010.geometry}
        material={materials.Machine}
        position={[-0.233, 0.022, 0.655]}
        scale={[0.118, 0.022, 0.118]}>
        <mesh
          
          
          //@ts-expect-error
          geometry={nodes.Cylinder016.geometry}
          material={materials.Machine}
          position={[0, 2.397, 0]}
          rotation={[-Math.PI, 0, 0]}
          scale={[0.215, 1.02, 0.215]}
        />
        <mesh
          
          
          //@ts-expect-error
          geometry={nodes.Cylinder017.geometry}
          material={materials.Machine}
          position={[0, 5.88, 0]}
          rotation={[-Math.PI, 0, 0]}
          scale={[0.276, 0.93, 0.276]}
        />
      </mesh>
      <mesh
        
        
        //@ts-expect-error
        geometry={nodes.Cylinder018.geometry}
        material={materials.Machine}
        position={[-0.233, 0.022, -0.65]}
        scale={[0.118, 0.022, 0.118]}>
        <mesh
          
          
          //@ts-expect-error
          geometry={nodes.Cylinder019.geometry}
          material={materials.Machine}
          position={[0, 2.397, 0]}
          rotation={[-Math.PI, 0, 0]}
          scale={[0.215, 1.02, 0.215]}
        />
        <mesh
          
          
          //@ts-expect-error
          geometry={nodes.Cylinder020.geometry}
          material={materials.Machine}
          position={[0, 5.88, 0]}
          rotation={[-Math.PI, 0, 0]}
          scale={[0.276, 0.93, 0.276]}
        />
      </mesh>
      <mesh
        
        
        //@ts-expect-error
        geometry={nodes.Cylinder021.geometry}
        material={materials.Machine}
        position={[0.315, 0.022, -0.65]}
        scale={[0.118, 0.022, 0.118]}>
        <mesh
          
          
          //@ts-expect-error
          geometry={nodes.Cylinder022.geometry}
          material={materials.Machine}
          position={[0, 2.397, 0]}
          rotation={[-Math.PI, 0, 0]}
          scale={[0.215, 1.02, 0.215]}
        />
        <mesh
          
          
          //@ts-expect-error
          geometry={nodes.Cylinder023.geometry}
          material={materials.Machine}
          position={[0, 5.88, 0]}
          rotation={[-Math.PI, 0, 0]}
          scale={[0.276, 0.93, 0.276]}
        />
      </mesh>
      <mesh   //@ts-expect-error
      geometry={nodes.Plane.geometry} material={materials.Machine} />
      <mesh
        
        
        //@ts-expect-error
        geometry={nodes.Plane_1.geometry}
        material={materials.HMI_Screen}
      />
      <group position={[-0.407, 1.953, 0]}>
        <mesh
          
          
          //@ts-expect-error
          geometry={nodes.Plane002_1.geometry}
          material={materials.Glass}
        />
        <mesh
          
          
          //@ts-expect-error
          geometry={nodes.Plane002_2.geometry}
          material={materials.Machine}
        />
      </group>
    </a.group>
  )
}

useGLTF.preload('/VA_Graduate_Software_Engineer_Test_Machine.glb')

export default MachineGunOBJ