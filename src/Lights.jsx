import { useControls } from 'leva'

export default function Lights() {
    const { directionalIntensity, directionalColor, hemisphereIntensity, skyColor, groundColor, spotIntensity, spotPenumbra, spotAngle, spotColor } = useControls('Lights', {
        directionalIntensity: {
            value: 1.05,
            step: 0.01,
            min: 0,
            max: 5
        },
        directionalColor: '#9bbcf0',
        hemisphereIntensity: {
            value: 0.45,
            step: 0.01,
            min: 0,
            max: 5
        },
        skyColor: '#101628',
        groundColor: '#000000',
        spotIntensity: {
            label: 'spot',
            value: 30,
            step: 1,
            min: 0,
            max: 40,
        },
        spotPenumbra: {
            label: 'spot penumbra',
            value: 1,
            step: 0.01,
            min: 0,
            max: 1,
        },
        spotAngle: {
            label: 'spot angle',
            value: 1,
            step: 0.1,
            min: 0,
            max: Math.PI / 2,
        },
        spotColor: '#9bbcf0'
    }, {
        collapsed: true
    })

    return <>
        <directionalLight position={[1, 2, 3]} intensity={directionalIntensity} color={directionalColor} />
        <hemisphereLight intensity={hemisphereIntensity} skyColor={skyColor} groundColor={groundColor} />
        <spotLight
            color={spotColor}
            intensity={spotIntensity}
            position={[0, 6, 0]}
            angle={spotAngle}
            penumbra={spotPenumbra}
        />
    </>
}