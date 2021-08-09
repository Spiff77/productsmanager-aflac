import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { registerLocaleData } from '@angular/common';
import localfr from '@angular/common/locales/fr';
import { NocarriagePipe } from './nocarriage.pipe';
import { SupplierListComponent } from './module/supplier/components/supplier-list/supplier-list.component';
import { SupplierComponent } from './module/supplier/components/supplier/supplier.component';
import { AnonymizePipe } from './module/supplier/pipes/anonymize.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ThemeDirective } from './module/product/directive/theme.directive';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {SupplierDashboardComponent} from './module/supplier/components/supplier-dashboard/supplier-dashboard.component';
import {ProductModule} from './module/product/product.module';
import {SupplierModule} from './module/supplier/supplier.module';

const routes: Routes = [
  {path: '', redirectTo: 'products', pathMatch: 'full'},
]
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NocarriagePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    ProductModule,
    SupplierModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'fr-Fr' } ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
registerLocaleData(localfr, 'fr');

