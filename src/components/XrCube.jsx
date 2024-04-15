import { useFrame } from "@react-three/fiber";
import { Interactive, stopSession, useHitTest, useXR } from "@react-three/xr";
import { useRef, useState } from "react";
import Cube from "./Cube";
import { OrbitControls } from "@react-three/drei";

export default function XrCube(){
    const [cubes, setCubes] = useState([]);
    const ringRef = useRef();
    useHitTest((hitMatrix, hit)=>{
        hitMatrix.decompose(ringRef.current.position, ringRef.current.quaternion, ringRef.current.scale);
        ringRef.current.rotation.set(-Math.PI/2, 0, 0)
    });
    const placeCube = (e) => {
        let position = e.intersection.object.position.clone();
        let id = Date.now();
        setCubes([...cubes, {position, id}]);
    }
    return (
        <>
            <OrbitControls/>
            <Cube position={[0, 0, -3]}/>
            { cubes?.map(({position, id})=>{
                return <Cube key={id} position={position}/>
            })}
            <Interactive onSelect={placeCube}>
                <mesh ref={ringRef} rotation-x={-Math.PI/2}>
                    <ringGeometry args={[0.1, 0.5, 32]}/>
                    <meshStandardMaterial color={'white'}/>
                </mesh>
            </Interactive>
        </>
    )
}


/* export default function XrCube(){
    const {isPresenting} = useXR();
    const [cubes, setCubes] = useState([]);
    const ringRef = useRef();
    useHitTest((hitMatrix, hit)=>{
        hitMatrix.decompose(ringRef.current.position, ringRef.current.quaternion, ringRef.current.scale);
        ringRef.current.rotation.set(-Math.PI/2, 0, 0)
    });
    const placeCube = (e) => {
        let position = e.intersection.object.position.clone();
        let id = Date.now();
        setCubes([...cubes, {position, id}]);
    }
    return (
        <>
            { isPresenting && cubes?.map(({position, id})=>{
                return <Cube key={id} position={position}/>
            })}
            { isPresenting &&
            <Interactive onSelect={placeCube}>
                <mesh ref={ringRef} rotation-x={-Math.PI/2}>
                    <ringGeometry args={[0.1, 0.5, 32]}/>
                    <meshStandardMaterial color={'white'}/>
                </mesh>
            </Interactive>
            }
        </>
    )
} */