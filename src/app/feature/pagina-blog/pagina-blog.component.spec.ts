import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaBlogComponent } from './pagina-blog.component';

describe('PaginaBlogComponent', () => {
  let component: PaginaBlogComponent;
  let fixture: ComponentFixture<PaginaBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
