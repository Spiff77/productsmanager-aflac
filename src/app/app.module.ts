import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { registerLocaleData } from '@angular/common';
import localfr from '@angular/common/locales/fr';
import { NocarriagePipe } from './nocarriage.pipe';
import { SupplierListComponent } from './components/supplier-list/supplier-list.component';
import { SupplierComponent } from './components/supplier/supplier.component';
import { AnonymizePipe } from './anonymize.pipe';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductListComponent,
    ProductComponent,
    NocarriagePipe,
    SupplierListComponent,
    SupplierComponent,
    AnonymizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'fr-Fr' } ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
registerLocaleData(localfr, 'fr');

