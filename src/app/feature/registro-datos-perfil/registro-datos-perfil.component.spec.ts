import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDatosPerfilComponent } from './registro-datos-perfil.component';

describe('RegistroDatosPerfilComponent', () => {
  let component: RegistroDatosPerfilComponent;
  let fixture: ComponentFixture<RegistroDatosPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroDatosPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroDatosPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
