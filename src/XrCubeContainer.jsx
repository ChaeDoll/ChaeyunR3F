import { Canvas } from "@react-three/fiber";
import { XR, XRButton } from "@react-three/xr";
import XrCube from "./components/XrCube";
import XRToggleButton from "./components/XRToggleButton";
import { OrbitControls } from "@react-three/drei";

export default function XrCubeContainer(){ 
    return (
    <>  
        <XRButton mode="AR"
        sessionInit={{
            requiredFeatures: ["hit-test"]
        }}/>
        <Canvas>
            <XR>
                <OrbitControls/>
                <ambientLight/>
                <XRToggleButton/>
                <XrCube/>
            </XR>   
        </Canvas>
    </>
    )
}
