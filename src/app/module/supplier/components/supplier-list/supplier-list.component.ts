import {Component, Input, OnInit} from '@angular/core';
import {Supplier} from '../../../../model/Supplier';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.scss']
})
export class SupplierListComponent implements OnInit {
  s1 = new Supplier(1, 'Super company', '111111111111');
  s2 = new Supplier(1, 'Super company', '11111111111111');

  constructor() { }

  ngOnInit(): void {
  }

}
