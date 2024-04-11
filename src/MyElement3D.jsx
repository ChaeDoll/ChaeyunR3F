import { Box, OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import { useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react"
import * as THREE from "three";

export default function MyElement3D({rotation}) {
    const meshRef = useRef();
    const wireMeshRef = useRef();
    const { xSize, ySize, zSize, xSegments, ySegments, zSegments } = useControls({
        xSize: { value:1, min:0.1, max:5, step:0.01},
        ySize: { value:1, min:0.1, max:5, step:0.01},
        zSize: { value:1, min:0.1, max:5, step:0.01},
        xSegments: { value:1, min:1, max:10, step:1},
        ySegments: { value:1, min:1, max:10, step:1},
        zSegments: { value:1, min:1, max:10, step:1}
    })
    useEffect(()=>{
        wireMeshRef.current.geometry = meshRef.current.geometry;
    },[xSize, ySize, zSize, xSegments, ySegments, zSegments])
    return (
        <>
            <OrbitControls/>
            <directionalLight position={[2, 1, 3]}/>
            <axesHelper scale={10}/>
            <mesh ref={meshRef} 
            rotation={[THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(0)]} 
            scale={[1, 1, 1]} position={[0, 0, 0]}>
                <boxGeometry args={[xSize, ySize, zSize, xSegments, ySegments, zSegments]}/>
                <meshStandardMaterial color={'#FFFFFF'}/>
                <axesHelper />
            </mesh>
            <mesh ref={wireMeshRef}
            position={[0, 0, 0]}>
                <meshStandardMaterial emissive="yellow" wireframe={true}/>
            </mesh>
        </>
    )
}