import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  products: Product[] = [];

  isProductsReady: Boolean = false;

  constructor(private productsService: ProductsService) { }


  public findByCriteria(_criteria: string) {
    this.isProductsReady = false;
    _criteria = _criteria.trim()
    
    if(_criteria.length >= 3 || Number(_criteria) || _criteria.length === 0) {
      this.productsService.findProductsByCriteria(_criteria).subscribe((infoProduct) => {
        this.products = _criteria.length === 0 ? infoProduct.slice(0,200) : infoProduct; // just the first 200 products for performance
        this.isProductsReady = true;
      });
    } else {
      this.isProductsReady = true;
    }
    
  }

  ngOnInit(): void {
    this.productsService.findProductsByCriteria('').subscribe((infoProduct) => {
      this.products = infoProduct.slice(0,200); // just the first 200 products for performance
      this.isProductsReady = true;
    });
  }

}
