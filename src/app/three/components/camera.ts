// three-camera.service.ts
import { Injectable } from '@angular/core';
import * as THREE from 'three';

@Injectable({
  providedIn: 'root',
})
export class ThreeCameraService {
  private camera!: THREE.PerspectiveCamera;

  initCamera(aspectRatio: number): THREE.PerspectiveCamera {
    this.camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 3000);
    this.camera.position.set(0, 5, 50);
    return this.camera;
  }

  getCamera(): THREE.PerspectiveCamera {
    return this.camera;
  }
}
