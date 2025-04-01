import { useGLTF } from '@react-three/drei'

export default function ChristmasTree() {
    const christmasTree = useGLTF('./models/christmas-tree.glb')
    return <>
        <primitive object={christmasTree.scene} scale={4.5} position={[0, 1.5, 0]} rotation-y={Math.PI * 0.35 } />
    </>
}