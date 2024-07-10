import * as THREE from 'three';

// Función para añadir cubos a la escena
export function addCubes(scene: THREE.Scene) {
    // Añade el primer cubo
    const geometry1 = new THREE.BoxGeometry(0.2, 0.2, 0.2);
    const material1 = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube1 = new THREE.Mesh(geometry1, material1);
    cube1.position.set(0, 0, 0);
    scene.add(cube1);

   
}