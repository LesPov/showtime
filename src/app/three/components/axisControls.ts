import { camera } from './camera';
import { controls } from './controls';

const moveCameraToAxis = (axis: string) => {
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
    case '-y':
      return;
    case 'z':
      camera.position.set(0, 5, 50);
      break;
    case '-z':
      camera.position.set(0, 5, -50);
      break;
  }
  camera.lookAt(0, 0, 0);
  controls.target.set(0, 0, 0);
  controls.update();
};

const initAxisControls = () => {
  const buttons = document.querySelectorAll('#axis-controls button');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const axis = button.getAttribute('data-axis');
      if (axis) {
        moveCameraToAxis(axis);
      }
    });
  });
};

export { initAxisControls };
