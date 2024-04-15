import { ARButton, Controllers, XR, XRButton, useHitTest } from '@react-three/xr';
import './App.css'
import { Canvas } from '@react-three/fiber';
import ARTestContainer from './ARTestContainer';
import { useRef } from 'react';
import { Box } from '@react-three/drei';

export function HitTestExample(props) {
  const boxRef = useRef(null);
  useHitTest((hitMatrix) => {
    if (boxRef.current) {
      hitMatrix.decompose(boxRef.current.position, boxRef.current.quaternion, boxRef.current.scale)
    }
  })
  return <Box ref={boxRef} {...props} args={[0.1, 0.1, 0.1]} />
}

function App() {
  return (
    <>
      <ARButton sessionInit={{
      optionalFeatures:["hit-test"]
      }}>
        <Canvas>
          <XR>
            <ambientLight />
            <pointLight position={[5, 5, 5]} />
            <Controllers />
            <HitTestExample position={[0, 0.8, -1]} />
            {/* <ARTestContainer /> */}
          </XR>
        </Canvas>
      </ARButton>
    </>
  )
}
export default App;
