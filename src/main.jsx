import './style.css'
import ReactDOM from 'react-dom/client'
import Experience from './Experience.jsx'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'


const root = ReactDOM.createRoot(document.getElementById('root'))
const App = () => {

    const created = ({ gl }) => {
        gl.setClearColor('#000826', 1)
    }

    return (
        <Canvas
            camera={ {
                fov: 45,
                near: 0.1,
                far: 200,
                position: [ 0, 3, 15 ]
            } }
            onCreated={ created }
        >
            <Experience />
            <OrbitControls />
        </Canvas>
    )
}

root.render(<App />)
