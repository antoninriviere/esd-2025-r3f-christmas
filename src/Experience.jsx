
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Stars } from '@react-three/drei'
import Forest from './Forest.jsx'
import ChristmasTree from './ChristmasTree.jsx'
import Lights from './Lights.jsx'

export default function Experience() {

    useFrame((state, delta) => {
    })

    return <>
        <Lights />
        <Stars
            radius={ 10 }
            count={ 2000 }
            speed={ 2 }
            factor={ 4}
            saturation={ 0 }
            fade={ true }
        />
        <Forest />
        <ChristmasTree />
        <mesh
            position-y={ - 1 }
        >
            <boxGeometry args={[20, 0.5, 20]}/>
            <meshStandardMaterial color="#f2f5ff" side={THREE.DoubleSide} />
        </mesh>
    </>
}