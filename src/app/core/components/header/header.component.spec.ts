import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';


fdescribe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let mockAuthService: jasmine.SpyObj<AuthService>;

  beforeEach((async () => {
    mockAuthService = jasmine.createSpyObj<AuthService>('AuthService', ['logout']);
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [RouterTestingModule],
      providers: [{provide: AuthService, useValue: mockAuthService }]
    }).compileComponents();
  })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should mostrarMenu', async () => {
    spyOn(component, 'mostrarMenu');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    fixture.whenStable().then(() => {
      expect(component.mostrarMenu).toHaveBeenCalled();
    });
  });

  it('should mostrarCategoria', async () => {
    spyOn(component, 'mostrarCategoria');
    const button = fixture.debugElement.nativeElement.querySelector('li');
    button.click();
    fixture.whenStable().then(() => {
      expect(component.mostrarCategoria).toHaveBeenCalled();
    });
  });

  it('should logOut', async () => {
    spyOn(component, 'logOut');
    const button = fixture.debugElement.nativeElement.querySelector('a');
    button.click();
    fixture.whenStable().then(() => {
      expect(component.logOut).toHaveBeenCalled();
    });
  });
});

