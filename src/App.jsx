import { ARButton, Controllers, XR, XRButton } from '@react-three/xr';
import './App.css'
import { Canvas } from '@react-three/fiber';
import ARTestContainer from './ARTestContainer';

function App() {
  return (
    <>
      <ARButton>
        <Canvas>
          <XR referenceSpace='local'>
            <ambientLight />
            <ARTestContainer />
          </XR>
        </Canvas>
    </ARButton>
    </>
  )
}

export default App;
