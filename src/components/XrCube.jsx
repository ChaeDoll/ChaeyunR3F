import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Interactive, useHitTest } from "@react-three/xr";
import { useRef, useState } from "react";
import Cube from "./Cube";

export default function XrCube(){
    const [cubes, setCubes] = useState();
    // const boxRef = useRef();
    const ringRef = useRef();
    useHitTest((hitMatrix, hit)=>{
        hitMatrix.decompose(ringRef.current.position, ringRef.current.quaternion, ringRef.current.scale);
        ringRef.current.rotation.set(Math.PI/2, 0, 0)
    });
    useFrame((state, delta)=>{
        // boxRef.current.rotation.y -= 0.02;
    })

    const placeCube = (e) => {
        let position = e.intersection.object.position.clone();
        let id = Date.now();
        setCubes([...cubes, {position, id}])
    }
    return (
        <>
            <OrbitControls/>
            <ambientLight/>
            {cubes?.map(({position, id})=>{
                return <Cube key={id} position={position}/>
            })}
            <Interactive onSelect={placeCube}>
                <mesh ref={ringRef} rotation-x={-Math.PI/2}>
                    <ringGeometry args={[0.1, 0.25, 32]}/>
                    <meshStandardMaterial color={'white'}/>
                </mesh>
            </Interactive>
        </>
    )
}