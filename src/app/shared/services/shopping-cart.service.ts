import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Product } from '../../pages/products/interfaces/product.interface';

@Injectable({
    providedIn: 'root'
})
export class ShoopingCartService { // Se usa programación reactiva
    products: Product[] = [];

    private cartSubject = new Subject<Product[]>();
    private totalSubject = new Subject<number>();
    private quantitySubject = new Subject<number>();

    get cartActions$(): Observable<Product[]> {
        return this.cartSubject.asObservable();
    }

    get totalActions$(): Observable<number> {
        return this.totalSubject.asObservable();
    }

    get quantityActions$(): Observable<number> {
        return this.quantitySubject.asObservable();
    }

    // Para consumirlos desde el componente es necesario meterlos acá
    updateCart(product: Product): void {
        this.#addToCart(product);
        this.#productsQuantity();
        this.#calcTotal();
    }

    #addToCart(product: Product): void {
        this.products.push(product);
        this.cartSubject.next(this.products);
    }

    #productsQuantity(): void {
        const quantity = this.products.length;
        this.quantitySubject.next(quantity);
    }

    #calcTotal(): void {
        const total = this.products.reduce((acc, prod) => acc + prod.price, 0);
        this.totalSubject.next(total);
    }
}