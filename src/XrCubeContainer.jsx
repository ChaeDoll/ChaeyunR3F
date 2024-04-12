import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import XrCube from "./components/XrCube";

export default function XrCubeContainer(){ 
    return (
    <>  
        <ARButton/>
        <Canvas>
            <XR>
                <XrCube/>
            </XR>
        </Canvas>
    </>
    )
}