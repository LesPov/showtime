// three-grid.service.ts
import { Injectable } from '@angular/core';
import * as THREE from 'three';

@Injectable({
  providedIn: 'root',
})
export class ThreeGridService {

  addGrid(scene: THREE.Scene) {
    const size = 20; // Tamaño de la cuadrícula
    const divisions = 20; // Número de divisiones en la cuadrícula
    
    // Cuadrícula horizontal
    const gridHelper = new THREE.GridHelper(size, divisions, 0x444444);
    gridHelper.material.opacity = 0.2;
    gridHelper.material.transparent = true;
    gridHelper.position.set(0, 0, 0);
    scene.add(gridHelper);

    // Cuadrícula vertical (XZ plane)
    const verticalGridHelperXZ = new THREE.GridHelper(size, divisions, 0x444444);
    verticalGridHelperXZ.material.opacity = 0.2;
    verticalGridHelperXZ.material.transparent = true;
    verticalGridHelperXZ.position.set(0, 10, 0);
    verticalGridHelperXZ.rotation.x = Math.PI / 2;
    scene.add(verticalGridHelperXZ);

    // Cuadrícula vertical (YZ plane)
    const verticalGridHelperYZ = new THREE.GridHelper(size, divisions, 0x444444);
    verticalGridHelperYZ.material.opacity = 0.2;
    verticalGridHelperYZ.material.transparent = true;
    verticalGridHelperYZ.position.set(0, 10, 0);
    verticalGridHelperYZ.rotation.z = Math.PI / 2;
    scene.add(verticalGridHelperYZ);
  }
}
