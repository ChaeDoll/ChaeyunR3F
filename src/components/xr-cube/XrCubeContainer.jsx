import { Canvas } from "@react-three/fiber";
import { ARButton, VRButton, XR, XRButton } from "@react-three/xr";
import XrCube from "./XrCube";

const XrCubeContainer = () => {
  return (
    <>
      <VRButton />
      <Canvas>
        <XR>
          <XrCube />
        </XR>
      </Canvas>
    </>
  );
};

export default XrCubeContainer;
