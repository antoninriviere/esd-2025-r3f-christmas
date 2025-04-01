import { useRef, useState } from 'react'
import { Clone, useGLTF } from '@react-three/drei'
import { RigidBody, CuboidCollider } from '@react-three/rapier'
import { Howl } from 'howler'

export default function Presents() {
    const present1 = useGLTF('./models/present-1.glb')
    const present2 = useGLTF('./models/present-2.glb')
    const present3 = useGLTF('./models/present-3.glb')

    const presentsRef = useRef([])

    const [ hitSound ] = useState(() => {
        return new Howl({
            src: ['./sounds/hit.mp3'],
            volume: 0.3
        })
    })

    const onClickPresent = (index, event) => {
        event.stopPropagation()
        const present = presentsRef.current[index]
        present.wakeUp()

        // reset speed
        present.setLinvel({ x: 0, y: 0, z: 0 }, true)
        present.setAngvel({ x: 0, y: 0, z: 0 }, true)

        // apply Force
        present.applyImpulse({ x: (Math.random() - 0.5) * 10 + 5, y: (Math.random() - 0.5) * 10 + 5, z: (Math.random() - 0.5) * 10 + 5 }, true)

        // apply random rotation to add some fun
        present.applyTorqueImpulse({
            x: Math.random() - 0.5,
            y: Math.random() - 0.5,
            z: Math.random() - 0.5,
        })

        hitSound.play()
    }

    return <>
        <RigidBody restitution={1} ref={el => presentsRef.current[0] = el} mass={0.1}>
            <Clone object={present1.scene} position={[3, 6, 1]} onClick={(event) => {
                onClickPresent(0, event)
            }} />
            {/* <CuboidCollider args={[0.5, 0.5, 0.5]} position={[0, -0.5, 0]} mass={1} /> */}
        </RigidBody>

        <RigidBody restitution={1} ref={el => presentsRef.current[1] = el} mass={0.1}>
            <Clone object={present2.scene} position={[0, 6, -4]} onClick={(event) => {
                onClickPresent(1, event)
            }} />
            {/* <CuboidCollider args={[0.5, 0.5, 0.5]} position={[0, -0.5, 0]} mass={1} /> */}
        </RigidBody>

        <RigidBody restitution={1} ref={el => presentsRef.current[2] = el} mass={0.1}>
            <Clone object={present3.scene} position={[-3, 6, -2]} onClick={(event) => {
                onClickPresent(2, event)
            }} />
            {/* <CuboidCollider args={[0.5, 0.5, 0.5]} position={[0, -0.5, 0]} mass={1} /> */}
        </RigidBody>
    </>
}