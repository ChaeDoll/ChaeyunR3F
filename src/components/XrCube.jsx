import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Interactive, stopSession, toggleSession, useHitTest } from "@react-three/xr";
import { useRef, useState } from "react";
import Cube from "./Cube";

export default function XrCube(){
    const [cubes, setCubes] = useState([]);
    const ref = useRef();
    const handleClick = () => {
        alert('버튼이 눌렸습니다.');
    };
    const handlePressExitButton = (e) => {
        toggleSession();
    }
    const ringRef = useRef();
    useHitTest((hitMatrix, hit)=>{
        hitMatrix.decompose(ringRef.current.position, ringRef.current.quaternion, ringRef.current.scale);
        ringRef.current.rotation.set(-Math.PI/2, 0, 0)
    });
    useFrame((state, delta)=>{
        // boxRef.current.rotation.y -= 0.02;
    })

    const placeCube = (e) => {
        let position = e.intersection.object.position.clone();
        let id = Date.now();
        setCubes([...cubes, {position, id}]);
    }
    return (
        <>
            <OrbitControls/>
            <ambientLight/>
            
            <Interactive onSelect={handlePressExitButton}> 
                <mesh
                ref={ref}
                position={[0, 0, -5]}
                onClick={handleClick}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshBasicMaterial color="blue" />
                </mesh>
            </Interactive>

            {cubes?.map(({position, id})=>{
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