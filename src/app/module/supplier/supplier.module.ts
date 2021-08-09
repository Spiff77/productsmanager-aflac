import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SupplierListComponent} from './components/supplier-list/supplier-list.component';
import {SupplierComponent} from './components/supplier/supplier.component';
import {AnonymizePipe} from './pipes/anonymize.pipe';
import {SupplierDashboardComponent} from './components/supplier-dashboard/supplier-dashboard.component';
import {SupplierRouterModule} from './supplier-router.module';



@NgModule({
  declarations: [
    SupplierListComponent,
    SupplierComponent,
    SupplierDashboardComponent,
    AnonymizePipe
  ],
  imports: [
    CommonModule,
    SupplierRouterModule
  ]
})
export class SupplierModule { }
