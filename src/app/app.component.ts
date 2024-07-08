import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThreeComponent } from './three/three.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ThreeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    { provide: Window, useValue: window }
  ]
})
export class AppComponent  {
  title = 'showtime';
  constructor(private window: Window) { }

}
