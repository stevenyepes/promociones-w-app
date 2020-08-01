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
    if(_criteria.length >= 3 || Number(_criteria)) {
      this.productsService.findProductsByCriteria(_criteria).subscribe((infoProduct) => {
        this.products = infoProduct;
      });
    }
    
  }

  ngOnInit(): void {
    this.productsService.findProductsByCriteria('').subscribe((infoProduct) => {
      this.products = infoProduct;
      this.isProductsReady = true;
    });
  }

}
