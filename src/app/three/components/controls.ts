// three-control.service.ts
import { Injectable } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

@Injectable({
  providedIn: 'root',
})
export class ThreeControlService {
  private controls!: OrbitControls;

  initControls(camera: THREE.PerspectiveCamera, rendererDomElement: HTMLElement): OrbitControls {
    this.controls = new OrbitControls(camera, rendererDomElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.25;
    this.controls.maxPolarAngle = Math.PI / 2;
    this.controls.minPolarAngle = 0;
    this.controls.update();
    return this.controls;
  }

  getControls(): OrbitControls {
    return this.controls;
  }
}
