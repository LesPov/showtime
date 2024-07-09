// ortho-camera-setup.ts

import * as THREE from 'three';

export function setupOrthoCamera(width: number, height: number): THREE.OrthographicCamera {
    const orthoCamera = new THREE.OrthographicCamera(
        width / -2, width / 2, height / 2, height / -2, 1, 1000
    );
    orthoCamera.position.set(0, 0, 50); // Ajusta la posición según tus necesidades
    orthoCamera.lookAt(0, 0, 0); // Asegúrate de que la cámara mire al origen (0, 0, 0)
    return orthoCamera;
}
