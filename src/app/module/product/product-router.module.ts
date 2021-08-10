import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ProductDashboardComponent} from './components/product-dashboard/product-dashboard.component';
import {ProductListComponent} from './components/product-list/product-list.component';
import {ProdutFormAddComponent} from './components/produt-form-add/produt-form-add.component';
import {ProductDetailComponent} from './components/product-detail/product-detail.component';
import {AuthGuard} from '../../auth.guard';

const routes: Routes = [
  {path: 'products', component: ProductDashboardComponent, children: [
      {path: '', component: ProductListComponent},
      {path: 'add', component: ProdutFormAddComponent, canActivate: [AuthGuard]},
      {path: ':id', component: ProductDetailComponent},
    ]}];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductRouterModule { }
