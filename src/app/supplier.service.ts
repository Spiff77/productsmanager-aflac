import { Injectable } from '@angular/core';
import {Product} from './model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products = [
    new Product(1, 'The beatles', 'cool album to listen', 'Music', 40),
    new Product(2, '1984', 'cool book', 'Book', 40)
  ]

  constructor() { }

  findAll(): Product[] {
    return this.products
  }

  addOne(prod: Product): void {
    this.products.push(prod)
  }

}
