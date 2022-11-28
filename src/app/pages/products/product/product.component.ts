// Esto se usa como componente hijo
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  // Este decorador permite traer la data del componente padre
  @Input() product!: Product;
  // También se puede enviar data del componente hijo al padre
  @Output() addToCartClick = new EventEmitter<Product>(); // Es un evento personalizado

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.addToCartClick.emit(this.product);
  }
  
  // Vídeo: 1:49:50

}
