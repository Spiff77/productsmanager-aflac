import {Component, EventEmitter, HostListener, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Product} from '../../../../model/Product';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product!: Product;
  @Output() out = new EventEmitter<Product>()

  constructor(private router: Router) { }

  ngOnInit() {}

  @HostListener('click')
  navigateToDetail(): void {
    this.router.navigate(['/products', this.product.id])
    this.router.navigateByUrl(`/products/${this.product.id}`)

  }
}
