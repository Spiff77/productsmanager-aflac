import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../model/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product!: Product;
  @Output() out = new EventEmitter<Product>()

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('click')
  sendProductToParent(): void {
    this.out.emit(this.product)
  }
}
