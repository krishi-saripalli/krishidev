import React, {useRef} from "react";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader } from '@react-three/fiber'
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";



export function Cedar() {
    
    const meshRef = useRef(null);
    useFrame(({ clock }) => {
        const a = clock.getElapsedTime();
        meshRef.current.rotation.y = a;
      });



    const materials = useLoader(MTLLoader,'/assets/pine/pine.mtl')
    const obj = useLoader(OBJLoader, '/assets/pine/pine.obj', loader => {
        materials.preload()
        loader.setMaterials(materials)
      })
      
      
    return (
        <mesh ref={meshRef}>
          <primitive  object={obj} scale={3.0} />
        </mesh>
    )
}