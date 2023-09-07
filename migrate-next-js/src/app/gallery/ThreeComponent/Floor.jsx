import React from 'react'
import { extend } from '@react-three/fiber'
import { OrbitControls, TransformControls } from 'three-stdlib'

const Floor = (props) => {
    return (
        <mesh {...props} receiveShadow>
            <boxBufferGeometry args={[20, 2, 10]} />
            <meshPhysicalMaterial color='white' />
        </mesh>
    )
}

export default Floor