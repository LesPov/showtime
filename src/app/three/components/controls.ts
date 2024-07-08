// control.ts

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export function setupOrbitControls(camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer): OrbitControls {
  const orbit = new OrbitControls(camera, renderer.domElement);
  orbit.enableDamping = true;
  orbit.dampingFactor = 0.25;
  orbit.maxPolarAngle = Math.PI / 2;
  orbit.minPolarAngle = 0;
  orbit.update();
  return orbit;
}