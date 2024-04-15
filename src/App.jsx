import { ARButton, Controllers, XR, XRButton } from '@react-three/xr';
import './App.css'
import XrCubeContainer from './XrCubeContainer';
import { Canvas } from '@react-three/fiber';

function App() {
  return (
    <>
      <XRButton mode='AR'/>
      <Canvas>
        <XR>
          <ambientLight />
          <XrCubeContainer />
        </XR>
      </Canvas>
    </>
  )
}

export default App
