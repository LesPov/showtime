import * as THREE from 'three';

export function createCube1(): THREE.Mesh {
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);

  return cube;
}

export function createCube2(): THREE.Mesh {
  const geometry = new THREE.BoxGeometry(5, 5, 0.01);
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const cube = new THREE.Mesh(geometry, material);
  cube.position.set(4, 2.5, 0);

  return cube;
}
