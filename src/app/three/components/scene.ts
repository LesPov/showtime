import * as THREE from 'three';

export function setupScene(): THREE.Scene {
  const scene = new THREE.Scene();

  // Helper para los ejes
  const axesHelper = new THREE.AxesHelper(5);
  scene.add(axesHelper);

  return scene;
}
