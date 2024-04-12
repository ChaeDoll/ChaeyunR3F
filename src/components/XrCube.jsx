import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function XrCube(){
    const boxRef = useRef();
    useFrame((state, delta)=>{
        boxRef.current.rotation.y -= 0.02;
    })
    return (
        <>
            <OrbitControls/>
            <ambientLight/>
            <mesh ref={boxRef} rotation-x={20*Math.PI/180} position-z={-2.5}>
                <boxGeometry args={[2, 2, 2]}/> 
                <meshBasicMaterial color={'blue'}/>
            </mesh>
        </>
    )
}