import React from 'react';

import { useAnimations, useGLTF } from '@react-three/drei'
import planeScene from '../assets/3d/plane.glb'

const Plane = ({isRotating, ...props }) => {
  const {scene, animations} = useGLTF(planeScene);
  const { actions} = useAnimations(animations, scene);

  return (
    <mesh {...props}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Plane