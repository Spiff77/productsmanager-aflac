import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/Product';
import {ProductService} from '../../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = []

  filterStr = ''

  selectedProduct: Product | undefined;

  constructor(private ps: ProductService) { }

  ngOnInit(): void {
    this.products = this.ps.findAll();
    this.ps.addOne(new Product(3, 'Anthrax', 'cool album to listen', 'Music', 20))
  }

  filteredProduct(): Product[] {
    return this.products.filter( p => p.name.includes(this.filterStr))
  }

  selectProduct(prod: Product) {
    this.selectedProduct = prod;
  }
}
