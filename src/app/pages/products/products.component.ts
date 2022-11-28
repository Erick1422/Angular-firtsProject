import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { ProductsService } from './services/products.service';
import { Product } from './interfaces/product.interface';
import { ShoopingCartService } from 'src/app/shared/services/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  // el signo !, se usa para que no envíe error de inicialización
  products!: Product[];

  constructor(private productService: ProductsService, private shoppingCartSvc: ShoopingCartService) { }

  ngOnInit(): void {
    this.productService.getProducts()
      .pipe(
        tap((products: Product[]) => this.products = products)
      )
      .subscribe();
  }

  addToCart(product: Product): void {
    console.log('Add to cart', product);
    this.shoppingCartSvc.updateCart(product);
  }
}
