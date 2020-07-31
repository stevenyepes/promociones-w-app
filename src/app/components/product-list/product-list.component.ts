import { Component, OnInit } from '@angular/core';
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

  constructor(private productsSerrvice: ProductsService) { }


  public findByCriteria(criteria: string) {
    return this.productsSerrvice.findProductsByCriteria(criteria);
  }

  ngOnInit(): void {
    this.findByCriteria('').subscribe((infoProduct) => {
      this.products = infoProduct;
    });
  }

}
