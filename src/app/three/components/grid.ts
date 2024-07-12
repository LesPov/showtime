// src/app/three/components/grid-setup.ts
import * as THREE from 'three';

// Función para añadir una cuadrícula a la escena
export function addGrid(scene: THREE.Scene) {
    const size = 28; // Tamaño de la cuadrícula
    const divisions = 28; // Número de divisiones en la cuadrícula

    // Cuadrícula horizontal en el plano XY
    const gridHelper = new THREE.GridHelper(size, divisions, 0x444444);
    gridHelper.material.opacity = 0.2;
    gridHelper.material.transparent = true;
    gridHelper.position.set(0, 0, 0);
    scene.add(gridHelper);

    
}

