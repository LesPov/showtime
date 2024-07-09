// src/app/three/components/animation.ts
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Función de animación que recibe como parámetros los elementos necesarios
export function animate(renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.PerspectiveCamera, orbit: OrbitControls) {
    function animateInternal() {
        requestAnimationFrame(animateInternal);
        orbit.update();
        renderer.render(scene, camera);
        
    }

    animateInternal();
}
