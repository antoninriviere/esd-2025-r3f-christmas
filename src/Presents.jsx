import { Clone, useGLTF } from '@react-three/drei'
import { RigidBody, CuboidCollider } from '@react-three/rapier'

export default function Presents() {
    const present1 = useGLTF('./models/present-1.glb')
    const present2 = useGLTF('./models/present-2.glb')
    const present3 = useGLTF('./models/present-3.glb')

    return <>
        <Clone object={present1.scene} position={[3, 2, 1]} />
        <Clone object={present2.scene} position={[0, 3, -2]} />
        <Clone object={present3.scene} position={[-1, 3, -2]} />
    </>
}