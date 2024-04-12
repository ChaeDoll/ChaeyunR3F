import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Interactive, useHitTest } from "@react-three/xr";
import { useRef, useState } from "react";

export default function Cube({position}){
    const cubeRef = useRef();
    useFrame((state, delta)=>{
        cubeRef.current.rotation.y += delta;
    })
    return (
        <>
            <mesh ref={cubeRef} position={position}>
                <boxGeometry args={[1, 1, 1]}/> 
                <meshBasicMaterial color={'blue'}/>
            </mesh>
        </>
    )
}