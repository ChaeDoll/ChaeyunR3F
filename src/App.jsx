import { Canvas } from '@react-three/fiber'
import './App.css'
import MyElement3D from './MyElement3D'
import { useState } from 'react';

function App() {
  return (
    <>
      <Canvas>
        <MyElement3D/>
      </Canvas>
    </>
  )
}

export default App
