import { Component, AfterViewInit  } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { setupRenderer } from './components/renderer';
import { setupCamera } from './components/camera';
import { setupOrbitControls } from './components/controls';
import { createAxis } from './components/ejes';

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
    const scene = new THREE.Scene(); // Crea una nueva escena

   
    // Configuración de la cámara
    const camera = setupCamera(width, height);

    // Configuración de los controles de órbita
    const orbit = setupOrbitControls(camera, renderer);

    // Crear ejes
    createAxis(scene);


    // Añade el primer cubo
    const geometry1 = new THREE.BoxGeometry(1, 1, 1); // Crea la geometría del cubo con dimensiones 1x1x1
    const material1 = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Crea un material básico de color verde
    const cube1 = new THREE.Mesh(geometry1, material1); // Crea una malla combinando la geometría y el material
    scene.add(cube1);  // Añade el cubo a la escena

    // Añade el segundo cubo con dimensiones diferentes
    const geometry2 = new THREE.BoxGeometry(5, 5, 0.01); // Crea la geometría del cubo con dimensiones 2x1.5x1
    const material2 = new THREE.MeshBasicMaterial({ color: 0xffffff }); // Crea un material básico de color rojo
    const cube2 = new THREE.Mesh(geometry2, material2); // Crea una malla combinando la geometría y el material
    cube2.position.set(4, 2.5, 0); // Coloca el segundo cubo a la derecha del primer cubo
    scene.add(cube2); // Añade el cubo a la escena

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