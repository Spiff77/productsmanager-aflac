import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ProductHttpService} from '../../../../product-http.service';
import {Router} from '@angular/router';
import {Supplier} from '../../../../model/Supplier';
import {SupplierHttpService} from '../../../../supplier-http.service';

@Component({
  selector: 'app-produt-form-add',
  templateUrl: './produt-form-add.component.html',
  styleUrls: ['./produt-form-add.component.scss']
})
export class ProdutFormAddComponent implements OnInit {

  form!: FormGroup
  suppliers : Supplier[] = [];

  constructor(private fb: FormBuilder,
              private pserv: ProductHttpService,
              private sserv: SupplierHttpService,
              private router: Router) { }

  async ngOnInit(): Promise<void> {
    this.form = this.fb.group({
      active: [false],
      category: '',
      description: '',
      name: '',
      price: 0,
      promo: 0,
      supplier: this.fb.group({
        id: ['']
      })
    })

    this.suppliers = await this.sserv.findAll();
  }

  async submit(): Promise<void> {
    await this.pserv.add(this.form.value)
    this.router.navigateByUrl('/products')
  }
}
