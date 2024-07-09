// camerats.ts

import * as THREE from 'three';

export function setupCamera(width: number, height: number): THREE.PerspectiveCamera {
  const camera = new THREE.PerspectiveCamera(75, width / height, 0.01, 1000); // Ajusta near y far según tu escena
  camera.position.set(0, 5, 50);
  return camera;
}
