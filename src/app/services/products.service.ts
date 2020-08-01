import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  findProductsByCriteria: (string) => Observable<Product[]> = (criteria: string) => {

    return this.httpClient.get<Product[]>(`https://promotions-walmart-api.herokuapp.com/products/${criteria}`);
  }
}
