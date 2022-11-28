import { Component } from '@angular/core';
import { ShoopingCartService } from '../../services/shopping-cart.service';

// Marca el comportamiento de una clase a través de las siguientes propiedades
// le indica cual es el nombre, donde está su template y la ruta de los estilos 
@Component({
  selector: 'app-header', // Este es el nombre que se utiliza para usar este componente
  // templateUrl: './header.component.html',
  // Se puede agregar html directamente -> template inline
  template: `
  <mat-toolbar color="primary">
    <span>My Application</span>
    {{quantity$ | async | json}} - Quantity <!-- asyn suscribe y desuscribe el observable -->
    {{total$ | async | json}} - Total
    <!-- {{cart$ | async | json}} - Cart -->
    <!-- {{  }} -->
  </mat-toolbar>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private shoppingCartSvc: ShoopingCartService) { }

  quantity$ = this.shoppingCartSvc.quantityActions$;
  total$ = this.shoppingCartSvc.totalActions$;
  cart$ = this.shoppingCartSvc.cartActions$;

}
