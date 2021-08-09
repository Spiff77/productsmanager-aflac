import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductDetailComponent} from './components/product-detail/product-detail.component';
import {ProdutFormAddComponent} from './components/produt-form-add/produt-form-add.component';
import {ProductDashboardComponent} from './components/product-dashboard/product-dashboard.component';
import {ProductListComponent} from './components/product-list/product-list.component';
import {ProductComponent} from './components/product/product.component';
import {ProductRouterModule} from './product-router.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ThemeDirective} from './directive/theme.directive';

@NgModule({
  declarations: [
    ProductDetailComponent,
    ProdutFormAddComponent,
    ProductDashboardComponent,
    ProductListComponent,
    ProductComponent,
    ThemeDirective
  ],
  imports: [
    CommonModule,
    ProductRouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
