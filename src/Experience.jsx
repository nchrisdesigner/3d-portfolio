import { Center, Text, ContactShadows, Environment, Float, OrbitControls, Html, PresentationControls, useGLTF } from '@react-three/drei'
import { RectAreaLight } from 'three';

export default function Experience() {

    const computer = useGLTF('https://threejs-journey.com/resources/models/macbook_model.gltf')
    const model = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')

    console.log(computer);


    return <>

        {/* <OrbitControls makeDefault /> */}
        <color args={['#121417']} attach="background" />
        {/* <color args={['hsl(240, 50%, 25%)']} attach="background" /> */}
        {/* <Environment preset='city' background /> */}
        <Environment preset='city' />

        {/* <mesh>
            <boxGeometry />
            <meshNormalMaterial />
            </mesh> */}
        {/* 
        <Center>
        <primitive object={computer.scene} />
        </Center> */}

        <PresentationControls
            global
            rotation={[0.13, 0.1, 0]}
            polar={[-0.4, 0.2]}
            azimuth={[-1, 0.75]}
            config={{ mass: 2, tension: 400 }}
            snap={{ mass: 4, tension: 400 }}
        >
            <Float rotationIntensity={0.4}>
                <rectAreaLight
                    width={2.5}
                    height={1.65}
                    intensity={65}
                    color={'#373669'}
                    rotation={[-0.1, Math.PI, 0]}
                    position={[0, 0.55, -1.15]}
                />
                <primitive
                    position-y={-1.2}
                    object={computer.scene}
                >
                    <Html transform wrapperClass='htmlScreen'
                        distanceFactor={1.17}
                        position={[0, 1.56, -1.4]}
                        rotation-x={-0.28}
                    >
                        <iframe src="https://www.pixelperfekt.gr/"></iframe>
                    </Html>
                </primitive>
                <Text
                    font="./bangers-v20-latin-regular.woff"
                    fontSize={0.75}
                    position={[2, 0.75, 0.75]}
                    rotation-y={-1.25}
                >NICK KRISTOF</Text>
                <Text
                    font="./bangers-v20-latin-regular.woff"
                    fontSize={.25}
                    position={[2.85, 0, 0]}
                    rotation-y={-1.25}
                    textAlign="center"
                    >Creative React and Three.js Developer</Text>
                <Text
                    font="./bangers-v20-latin-regular.woff"
                    fontSize={.125}
                    position={[2.85, -.25, 0]}
                    rotation-y={-1.25}
                    textAlign="center"
                    >Scroll down on the screen - visit pixelperfekt.gr</Text>
            </Float>
        </PresentationControls>
        <ContactShadows
            position-y={-1.2}
            opacity={0.4}
            scale={5}
            blur={2.4}
        />

    </>
}