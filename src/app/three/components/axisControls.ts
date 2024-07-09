import * as THREE from 'three';

// Función para mover la cámara a una posición específica basada en el eje seleccionado
const moveCameraToAxis = (camera: THREE.Camera, controls: any, axis: string) => {
    switch (axis) {
        case 'x':
            camera.position.set(50, 5, 0);
            break;
        case '-x':
            camera.position.set(-50, 5, 0);
            break;
        case 'y':
            camera.position.set(0, 50, 0);
            break;
        case 'z':
            camera.position.set(0, 5, 50);
            break;
        case '-z':
            camera.position.set(0, 5, -50);
            break;
        default:
            return; // No hacer nada para otros casos
    }

    // Asegúrate de que la cámara siempre mire al origen (0, 0, 0)
    camera.lookAt(0, 0, 0);

    // Actualiza los controles de órbita si los estás usando
    if (controls) {
        controls.target.set(0, 0, 0);
        controls.update();
    }
};

// Agrega event listeners a los botones de control de ejes
export function initAxisControls(camera: THREE.Camera, controls: any) {
    const buttons = document.querySelectorAll('#axis-controls button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const axis = button.getAttribute('data-axis');
            if (axis) {
                moveCameraToAxis(camera, controls, axis);
            }
        });
    });
};
