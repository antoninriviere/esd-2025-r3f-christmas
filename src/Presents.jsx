import { Clone, useGLTF } from '@react-three/drei'
import { RigidBody, CuboidCollider } from '@react-three/rapier'

export default function Presents() {
    const present1 = useGLTF('./models/present-1.glb')
    const present2 = useGLTF('./models/present-2.glb')
    const present3 = useGLTF('./models/present-3.glb')


    const onClickPresent = (index, event) => {
        event.stopPropagation()
        console.log('clicked present', index)
    }



    return <>
        <RigidBody restitution={1}>
            <Clone object={present1.scene} position={[3, 6, 1]} onClick={(event) => {
                onClickPresent(1, event)
            }} />
            {/* <CuboidCollider args={[0.5, 0.5, 0.5]} position={[0, -0.5, 0]} mass={1} /> */}
        </RigidBody>

        <RigidBody restitution={1}>
            <Clone object={present2.scene} position={[0, 6, -4]} onClick={(event) => {
                onClickPresent(2, event)
            }} />
            {/* <CuboidCollider args={[0.5, 0.5, 0.5]} position={[0, -0.5, 0]} mass={1} /> */}
        </RigidBody>

        <RigidBody restitution={1}>
            <Clone object={present3.scene} position={[-3, 6, -2]} onClick={(event) => {
                onClickPresent(3, event)
            }} />
            {/* <CuboidCollider args={[0.5, 0.5, 0.5]} position={[0, -0.5, 0]} mass={1} /> */}
        </RigidBody>
    </>
}