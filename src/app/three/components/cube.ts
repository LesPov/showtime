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

// Función para crear cubos en una circunferencia
export function createCircleCubes(scene: THREE.Scene) {
    const radius = 5; // Radio de la circunferencia
    const cubeCount = 28; // Número de cubos
    const angleStep = (2 * Math.PI) / cubeCount; // Paso angular

    for (let i = 0; i < cubeCount; i++) {
        const angle = i * angleStep;
        const x = radius * Math.cos(angle);
        const z = radius * Math.sin(angle);

        // Crear el cubo
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        
        // Calcular el color basado en el ángulo
        const color = new THREE.Color();
        color.setHSL(i / cubeCount, 1.0, 0.5);
        const material = new THREE.MeshBasicMaterial({ color: color });

        const cube = new THREE.Mesh(geometry, material);

        // Posicionar el cubo
        cube.position.set(x, 0.5, z); // Ajustar la posición en los ejes X y Z

        // Rotar cubos que no están en los ejes
        if (i % 7 !== 0) {
            cube.rotation.y = -angle; // Ajustar la rotación del cubo en el eje Y
        }

        // Añadir el cubo a la escena
        scene.add(cube);
    }
}