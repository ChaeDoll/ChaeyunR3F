import { Box, OrbitControls, useTexture } from "@react-three/drei";
import { useControls } from "leva";
import { useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react"
import * as THREE from "three";

export default function MyElement3D({rotation}) {
    const boxRef = useRef();
    const torusRef = useRef();
    useEffect(()=>{
        torusRef.current.material = boxRef.current.material;
    },[])

    const texture = useTexture("./images/threeTone.jpg");
    texture.minFilter = THREE.NearestFilter;
    texture.magFilter = THREE.NearestFilter;
    return (
        <>
            <OrbitControls/>
            <ambientLight intensity={0.2}/>
            <directionalLight position={[0,1,0]}/>
            <directionalLight position={[1,2,8]} intensity={0.7}/>
            {/* <axesHelper scale={10}/> */}
            <mesh ref={boxRef} position={[-1, 0, 0]}>
                <torusKnotGeometry/>
                <meshToonMaterial gradientMap={texture} color={"cyan"}/>
            </mesh>
            <mesh ref={torusRef} position={[3, 0, 0]}>
                <torusGeometry/>
            </mesh>
        </>
    )
}