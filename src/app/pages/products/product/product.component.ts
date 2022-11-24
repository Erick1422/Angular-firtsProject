// Esto se usa como componente hijo
import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  // Este decorador permite traer la data del componente padre
  @Input() product!: Product;
  constructor() { }

  // También se puede enviar data del componente hijo al padre
  

  ngOnInit(): void {
  }

}
