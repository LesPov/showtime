// src/app/three/components/axes-setup.ts
import * as THREE from 'three';

// Materiales para los ejes con desplazamiento para evitar Z-fighting
const materialX = new THREE.LineBasicMaterial({ color: 0xff0000, linewidth: 2, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 });
const materialY = new THREE.LineBasicMaterial({ color: 0x00ff00, linewidth: 2, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 });
const materialZ = new THREE.LineBasicMaterial({ color: 0x0000ff, linewidth: 2, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 });

// Función para crear un eje
export function createAxis(scene: THREE.Scene) {
  const createLine = (points: THREE.Vector3[], material: THREE.LineBasicMaterial) => {
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    return new THREE.Line(geometry, material);
  };

  // Crear y añadir ejes positivos
  const xAxis = createLine([new THREE.Vector3(0, 0, 0), new THREE.Vector3(5, 0, 0)], materialX);
  const yAxis = createLine([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 5, 0)], materialY);
  const zAxis = createLine([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 5)], materialZ);
  scene.add(xAxis);
  scene.add(yAxis);
  scene.add(zAxis);

  // Añadir líneas adicionales para resaltar los ejes negativos
  const addNegativeAxes = () => {
    // Línea para el eje negativo X
    const negXAxis = createLine([new THREE.Vector3(-5, 0, 0), new THREE.Vector3(0, 0, 0)], materialX);
    scene.add(negXAxis);

    // Línea para el eje negativo Z
    const negZAxis = createLine([new THREE.Vector3(0, 0, -5), new THREE.Vector3(0, 0, 0)], materialZ);
    scene.add(negZAxis);
  };

  addNegativeAxes();
}
