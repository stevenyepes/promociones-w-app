import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Product } from '../models/product.model';
import { environment } from "../../environments/environment";

describe('ProductsService', () => {
  let service: ProductsService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        ProductsService
      ]
    });
    service = TestBed.get(ProductsService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#findProductsByCriteria should return a list of products matching criteria', (done) => {
    service.findProductsByCriteria('ada').subscribe((res: Product[]) => {
      expect(res).toEqual([new Product(12, 'asdada', 'dd', '', 200)]);
      done();
    })

    let productsRequest = httpMock.expectOne(`${environment.apiUrl}/ada`);

    productsRequest.flush([new Product(
      12,
      'asdada',
      'dd',
      '',
      200
    )])

    httpMock.verify();
  });

});
