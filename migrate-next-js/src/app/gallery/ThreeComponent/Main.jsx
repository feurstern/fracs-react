import React from 'react'
import { Canvas } from '@react-three/fiber'
import Floor from './Floor'

const Main = () => {
  return (
    <Canvas
      shadows
      camera={{
        position: [-6, 7, 7]
      }}
    >
      <ambientLight color={"white"} intensity={0.3} />
      <Floor />
    </Canvas>
  )
}
// Yes, if you're allowed me to go to your house frequently wkwkwk. But you know, in fact I come to your house more often than my house, that's why I called as second home .
// He is a good man.
// I can feel you're near me even though you're far away. 

export default Main