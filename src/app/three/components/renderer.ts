// src/app/three/components/renderer.ts
import * as THREE from 'three';

export function setupRenderer(width: number, height: number): THREE.WebGLRenderer {
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor(0x000000); // Optional: set background color
  renderer.setSize(width, height);
  renderer.localClippingEnabled = true;
  document.body.appendChild(renderer.domElement);
  return renderer;
}
