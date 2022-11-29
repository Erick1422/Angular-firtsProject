import { Component } from '@angular/core';

// Marca el comportamiento de una clase a través de las siguientes propiedades
// le indica cual es el nombre, donde está su template y la ruta de los estilos 
@Component({
  selector: 'app-header', // Este es el nombre que se utiliza para usar este componente
  // templateUrl: './header.component.html',
  // Se puede agregar html directamente -> template inline
  template: `
  <mat-toolbar color="primary">
    <span>My Application</span>
    <span class="spacer"></span>
    <app-cart></app-cart>
  </mat-toolbar>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

}
