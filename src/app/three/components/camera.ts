// src/app/three/components/camerats
import * as THREE from 'three';

export function setupCamera(width: number, height: number): THREE.PerspectiveCamera {
  const camera = new THREE.PerspectiveCamera(75, width / height, 0.01, 1000);
  camera.position.set(0, 5, 50);
  return camera;
}
