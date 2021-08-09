import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../../../product.service';
import {Product} from '../../../../model/Product';
import {ProductHttpService} from '../../../../product-http.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product!: Product;
  displayDeleteBox = false;
  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductHttpService,
              private router: Router
  ) { }

  async ngOnInit(): Promise<void> {
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    if(id){
      this.product = await this.productService.findOne(+id)
    }
  }

  async delete(): Promise<void> {
    await this.productService.delete(this.product.id)
    this.router.navigateByUrl('/products')
  }
}
