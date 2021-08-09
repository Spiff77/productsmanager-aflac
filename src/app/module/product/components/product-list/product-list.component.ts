import { Component, OnInit } from '@angular/core';
import {Product} from '../../../../model/Product';
import {ProductService} from '../../../../product.service';
import {ProductHttpService} from '../../../../product-http.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = []

  filterStr = ''

  selectedProduct: Product | undefined;

  constructor(private ps: ProductHttpService) { }

  async ngOnInit(): Promise<void> {
    this.products = await this.ps.findAll();
  }

  filteredProduct(): Product[] {
    return this.products.filter( p => p.name.includes(this.filterStr))
  }

  selectProduct(prod: Product) {
    this.selectedProduct = prod;
  }
}
