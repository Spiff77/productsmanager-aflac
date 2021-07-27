import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  p1 = new Product(1, 'The beatles', 'cool album', 'Music', 40)
  p2 = new Product(2, '1984', 'cool book', 'Book', 40)

  selectedProduct: Product | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  receiveProduct(prod: Product): void {
    this.selectedProduct = prod;
  }
}
