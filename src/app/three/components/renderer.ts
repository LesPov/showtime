// three-renderer.service.ts
import { Injectable } from '@angular/core';
import * as THREE from 'three';

@Injectable({
  providedIn: 'root',
})
export class ThreeRendererService {
  private renderer!: THREE.WebGLRenderer;

  initRenderer(canvas: HTMLCanvasElement): THREE.WebGLRenderer {
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.localClippingEnabled = true; // Asegura que está habilitado
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    return this.renderer;
  }

  getRenderer(): THREE.WebGLRenderer {
    return this.renderer;
  }
}
