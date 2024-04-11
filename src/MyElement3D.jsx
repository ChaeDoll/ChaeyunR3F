import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react"
import * as THREE from "three";

export default function MyElement3D({rotation}) {
    const meshRef = useRef();
    useFrame((state, delta)=>{
        meshRef.current.rotation.y += rotation;
    })
    return (
        <>
            <directionalLight position={[2, 2, 2]}/>
            <axesHelper scale={10}/>
            <OrbitControls/>
            <mesh ref={meshRef} 
            rotation={[THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(0)]} 
            scale={[1, 1, 1]} position={[0, 0, 0]}>
                <boxGeometry/>
                <meshStandardMaterial color={'#e67e22'} opacity={0.5} transparent={true}/>
                <axesHelper />
                <mesh
                rotate
                scale={[0.2, 0.3, 0.3]}
                position={[2, 0, 0]}>
                    <sphereGeometry/>
                    <meshStandardMaterial color={"red"}/>
                    <axesHelper scale={3}/>
                </mesh>
            </mesh>
        </>
    )
}