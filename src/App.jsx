import { Canvas } from '@react-three/fiber'
import './App.css'
import MyElement3D from './MyElement3D'
import { useState } from 'react';

function App() {
  const [rotation, setRotation] = useState(0);
  const handleTurnLeft = () => {
    setRotation(prev=>prev+0.001);
  }
  const handleTurnRight = () => {
    setRotation(prev=>prev-0.001);
  }
  return (
    <>
      <Canvas>
        <MyElement3D rotation={rotation}/>
      </Canvas>
      <button onClick={handleTurnLeft}>왼쪽으로 이동</button>
      <button onClick={handleTurnRight}>오른쪽으로 이동</button>
    </>
  )
}

export default App
