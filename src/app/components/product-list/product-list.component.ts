import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products = [
    new Product(1, 'The beatles', 'cool album', 'Music', 40),
    new Product(2, '1984', 'cool book', 'Book', 40)
  ]

  filterStr = ''

  selectedProduct: Product | undefined;
  desc = 'Lorem \n ipsum dolor \n si \nt amet, consectetur adipisicing elit. Assumenda cum et magnam quasi vero? Dolorum expedita, sit! A, animi corporis dolore fugit, harum maiores, omnis pariatur porro quidem quos sequi?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cum et magnam quasi vero? Dolorum expedita, sit! A, animi corporis dolore fugit, harum maiores, omnis pariatur porro quidem quos sequi?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cum et magnam quasi vero? Dolorum expedita, sit! A, animi corporis dolore fugit, harum maiores, omnis pariatur porro quidem quos sequi?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cum et magnam quasi vero? Dolorum expedita, sit! A, animi corporis dolore fugit, harum maiores, omnis pariatur porro quidem quos sequi?';

  constructor() { }

  ngOnInit(): void {
    // Ajax request
  }

  filteredProduct(): Product[] {
    return this.products.filter( p => p.name.includes(this.filterStr))
  }

}
