import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosGeneralesComponent } from './productos-generales.component';

describe('ProductosGeneralesComponent', () => {
  let component: ProductosGeneralesComponent;
  let fixture: ComponentFixture<ProductosGeneralesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosGeneralesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosGeneralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
