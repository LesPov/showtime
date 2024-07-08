import { Component, ElementRef, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { ThreeCameraService } from './components/camera';
import { ThreeRendererService } from './components/renderer';
import { ThreeSceneService } from './components/scene';
import { ThreeControlService } from './components/controls';
import { ThreeAnimationService } from './components/animation';
import { ThreeGridService } from './components/grid';

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

  constructor(
    private rendererService: ThreeRendererService,
    private sceneService: ThreeSceneService,
    private cameraService: ThreeCameraService,
    private controlService: ThreeControlService,
    private animationService: ThreeAnimationService,
    private gridService: ThreeGridService

  ) {}

  ngOnInit() {
    // Inicialización básica si es necesaria
  }

  ngAfterViewInit() {
    this.initThreeJS();
  }

  initThreeJS() {
    const canvas = this.canvasRef.nativeElement;

    // Configuración del renderizador
    this.renderer = this.rendererService.initRenderer(canvas);

    // Configuración de la escena
    this.scene = this.sceneService.initScene();

    // Configuración de la cámara
    this.camera = this.cameraService.initCamera(window.innerWidth / window.innerHeight);

    // Configuración de los controles de órbita
    this.controls = this.controlService.initControls(this.camera, this.renderer.domElement);

    // Añadir la cuadrícula a la escena
    this.gridService.addGrid(this.scene);


    // Inicia la animación
    this.animationService.init(this.renderer, this.scene, this.camera, this.controls);
  }


}