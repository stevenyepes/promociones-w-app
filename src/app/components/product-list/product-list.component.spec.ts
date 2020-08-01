import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ProductListComponent } from './product-list.component';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product.model';
import { of } from 'rxjs';


describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let findProductsByCriteria: Product[]
  let productsExpect = [new Product(
    12,
    'asdada',
    'dd',
    '',
    200
  )]
  beforeEach(async(() => {

    const productsService = jasmine.createSpyObj('ProductService', ['findProductsByCriteria'])
    findProductsByCriteria = productsService.findProductsByCriteria.and.returnValue( of(productsExpect));
    

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ ProductListComponent],
      providers: [{provide: ProductsService, useValue: productsService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.products = [];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should search by criteria just if critera length is equal or greater than 3', () => {
    component.findByCriteria("ada");

    expect(component.products).toBeDefined();
    expect(component.products.length).toEqual(1);
    expect(component.products[0]).toEqual(productsExpect.find(p => p.brand.includes('ada')));

  });

  it('should not search by criteria  if critera length is less than 3', () => {
    component.findByCriteria("a");

    expect(component.products).toBeDefined();
    expect(component.products.length).toEqual(0);
  });
});
