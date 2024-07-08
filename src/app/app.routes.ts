import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ThreeComponent } from './three/three.component';


export const routes: Routes = [
    { path: 'three', component: ThreeComponent },
    { path: '', redirectTo: '/three', pathMatch: 'full' },
    { path: '**', redirectTo: '/three' } // Maneja rutas no encontradas
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }