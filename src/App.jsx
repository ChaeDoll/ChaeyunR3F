import { ARButton, Controllers, XR, XRButton } from '@react-three/xr';
import './App.css'
import XrCubeContainer from './XrCubeContainer';
import { Canvas } from '@react-three/fiber';

function App() {
  return (
    <>
      <XRButton mode='AR'/>
      <Canvas>
        <XR referenceSpace="local">
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <XrCubeContainer />
          <Controllers />
        </XR>
      </Canvas>
    </>
  )
}

export default App
