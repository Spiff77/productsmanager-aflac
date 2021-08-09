import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SupplierDashboardComponent} from './components/supplier-dashboard/supplier-dashboard.component';
import {SupplierListComponent} from './components/supplier-list/supplier-list.component';

const routes: Routes = [
  {path: 'suppliers', component: SupplierDashboardComponent, children: [
      {path: '', component: SupplierListComponent},
    ]}]

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
export class SupplierRouterModule { }
