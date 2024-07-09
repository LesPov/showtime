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

    // Cuadrícula vertical en el plano XZ
    const verticalGridHelperXZ = new THREE.GridHelper(size, divisions, 0x444444);
    verticalGridHelperXZ.material.opacity = 0.2;
    verticalGridHelperXZ.material.transparent = true;
    verticalGridHelperXZ.position.set(0, 14, 0);
    verticalGridHelperXZ.rotation.x = Math.PI / 2;
    scene.add(verticalGridHelperXZ);

    // Cuadrícula vertical en el plano YZ
    const verticalGridHelperYZ = new THREE.GridHelper(size, divisions, 0x444444);
    verticalGridHelperYZ.material.opacity = 0.2;
    verticalGridHelperYZ.material.transparent = true;
    verticalGridHelperYZ.position.set(0, 14, 0);
    verticalGridHelperYZ.rotation.z = Math.PI / 2;
    scene.add(verticalGridHelperYZ);
}
