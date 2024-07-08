import { Component, AfterViewInit  } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import * as THREE from 'three';
import { setupRenderer } from './components/renderer';
import { setupCamera } from './components/camera';
import { setupOrbitControls } from './components/controls';
import { createAxis } from './components/ejes';
import { addGrid } from './components/grid';
import { addCubes } from './components/cube';

@Component({
  selector: 'app-three',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css'],
})
export class ThreeComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const width = window.innerWidth, height = window.innerHeight;
    
     // Configuración del renderizador
     const renderer = setupRenderer(width, height);

    // Configuración de la escena
    const scene = new THREE.Scene(); 

   
    // Configuración de la cámara
    const camera = setupCamera(width, height);

    // Configuración de los controles de órbita
    const orbit = setupOrbitControls(camera, renderer);

    // Crear ejes
    createAxis(scene);

//crear grid 
addGrid(scene);

//crear cuadro centro 
addCubes(scene);
    // Función de animación
    function animate() {
      requestAnimationFrame(animate); // Solicita que la función de animación se ejecute en el próximo cuadro de animación

      orbit.update(); // Actualiza los controles de órbita en cada cuadro para aplicar el amortiguamiento

      renderer.render(scene, camera); // Renderiza la escena desde la perspectiva de la cámara
    }

    // Llama a la función de animación para iniciar el bucle de animación
    animate();

  }
}