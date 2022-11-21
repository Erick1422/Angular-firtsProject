// Esto es consumido por el componente, y tiene la responsabilidad de acceder a la data y de manipularla.
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';

// providedIn -> Indica que nuestro servicio estará disponible en toda la aplicación
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiURL = 'http://localhost:3002/products';
  constructor(private http: HttpClient) { }

  // El Observable es una forma de decirle que una async func pero en Angular con rxjs
  getProducts(): Observable<any> {
    return this.http.get<Product>(this.apiURL);
  }

  // VIdeo 01:16:40
}
