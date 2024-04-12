import { Canvas } from "@react-three/fiber";
import { ARButton, XR, XRButton } from "@react-three/xr";
import XrCube from "./components/XrCube";

export default function XrCubeContainer(){ 
    return (
    <>  
        <XRButton mode="AR"
        sessionInit={{
            requiredFeatures: ["hit-test"]
        }}/>
        <Canvas>
            <XR>
                <XrCube/>
            </XR>   
        </Canvas>
    </>
    )
}