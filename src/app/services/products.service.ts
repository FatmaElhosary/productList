import { ProductsResponseInterface } from './../shared/interfaces/product-response.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  getProducts(url: string): Observable<ProductsResponseInterface> {
    return this.http.get<ProductsResponseInterface>(environment.apiUrl);
  }
}
