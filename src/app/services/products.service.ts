import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  findProductsByCriteria: (criteria: string) => Observable<Product[]> = (criteria: string) => {

    return this.httpClient.get<Product[]>(`${environment.apiUrl}/${criteria}`);
  }
}
