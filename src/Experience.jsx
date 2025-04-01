
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Stars } from '@react-three/drei'
import { Physics, RigidBody } from '@react-three/rapier'


import Forest from './Forest.jsx'
import ChristmasTree from './ChristmasTree.jsx'
import Lights from './Lights.jsx'
import Presents from './Presents.jsx'

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
        <Physics>
            <Presents />
            <RigidBody type='fixed' restitution={0.2}>
                <mesh
                    position-y={ - 1 }
                >
                    <boxGeometry args={[30, 0.5, 30]}/>
                    <meshStandardMaterial color="#f2f5ff" side={THREE.DoubleSide} />
                </mesh>
            </RigidBody>
        </Physics>
    </>
}