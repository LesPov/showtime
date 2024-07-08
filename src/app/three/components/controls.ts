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

  const maxDistance = 100; // Distancia máxima permitida

  // Limita la distancia máxima de la cámara al centro de la escena
  orbit.addEventListener('change', () => {
    const distance = camera.position.length(); // Calcula la distancia actual de la cámara al origen (centro de la escena)
    if (distance > maxDistance) {
      const direction = camera.position.clone().normalize(); // Obtiene la dirección actual de la cámara
      const targetPosition = direction.multiplyScalar(maxDistance); // Calcula la nueva posición de la cámara a la distancia máxima
      camera.position.copy(targetPosition); // Aplica la nueva posición a la cámara
      orbit.update(); // Actualiza los controles después de ajustar la posición
    }
  });

  return orbit;
}
