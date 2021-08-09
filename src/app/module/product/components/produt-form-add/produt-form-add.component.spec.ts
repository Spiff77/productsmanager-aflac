import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutFormAddComponent } from './produt-form-add.component';

describe('ProdutFormAddComponent', () => {
  let component: ProdutFormAddComponent;
  let fixture: ComponentFixture<ProdutFormAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutFormAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutFormAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
