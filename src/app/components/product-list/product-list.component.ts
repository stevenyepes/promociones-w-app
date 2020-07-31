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

  searchCriteria: string;

  constructor(private productsSerrvice: ProductsService) { }


  public findByCriteria(_criteria: string) {
    if(_criteria.length >= 3 || Number(_criteria)) {
      this.productsSerrvice.findProductsByCriteria(_criteria).subscribe((infoProduct) => {
        this.products = infoProduct;
      });
    }
    
  }

  ngOnInit(): void {
    this.productsSerrvice.findProductsByCriteria('').subscribe((infoProduct) => {
      this.products = infoProduct;
    });
  }

}
