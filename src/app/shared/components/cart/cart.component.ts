import { Component } from "@angular/core";
import { ShoopingCartService } from '../../services/shopping-cart.service';

@Component({
    selector: 'app-cart',
    template: `
        <ng-container *ngIf="{ total: total$ | async, quantity: quantity$ | async } as dataCart">
            <ng-container *ngIf="dataCart.total">
                <mat-icon>add_shopping_cart</mat-icon>
                {{dataCart.total | currency}}
                ({{dataCart.quantity}})
            </ng-container>
        </ng-container>
    `
})
export class CartComponent {

    constructor(private shoppingCartSvc: ShoopingCartService) { }

    quantity$ = this.shoppingCartSvc.quantityActions$;
    total$ = this.shoppingCartSvc.totalActions$;
    cart$ = this.shoppingCartSvc.cartActions$;
}