import { Component, ElementRef, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

@Component({
  selector: 'app-three',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css'],
})
export class ThreeComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas') canvasRef!: ElementRef;

  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private controls!: OrbitControls;

  ngOnInit() {
    // Inicialización básica si es necesaria
  }

  ngAfterViewInit() {
    this.initThreeJS();
  }

   initThreeJS() {
    const canvas = this.canvasRef.nativeElement;

    // Configuración del renderizador
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    // Configuración de la escena
    this.scene = new THREE.Scene();

    // Configuración de la cámara
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.set(0, 2, 5);

    // Configuración de los controles de órbita
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.25;
    this.controls.update();

    // Helper para los ejes
    const axesHelper = new THREE.AxesHelper(5);
    this.scene.add(axesHelper);

    // Añade el primer cubo
    const geometry1 = new THREE.BoxGeometry(1, 1, 1);
    const material1 = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube1 = new THREE.Mesh(geometry1, material1);
    this.scene.add(cube1);

    // Añade el segundo cubo con dimensiones diferentes
    const geometry2 = new THREE.BoxGeometry(5, 5, 0.01);
    const material2 = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const cube2 = new THREE.Mesh(geometry2, material2);
    cube2.position.set(4, 2.5, 0);
    this.scene.add(cube2);

    // Inicia la animación
    this.animate();
  }

   animate() {
    requestAnimationFrame(() => this.animate());

    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }
}
