// Esto se usa como componente hijo
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  // Este decorador permite traer la data del componente padre
  @Input() product!: Product;
  // También se puede enviar data del componente hijo al padre
  @Output() addToCartClick = new EventEmitter<Product>(); // Es un evento personalizado

  onClick(): void {
    this.addToCartClick.emit(this.product);
  }
}
