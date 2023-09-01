import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public menuActive: boolean = false;
  public categoriaActive: boolean = false;
  public isLogin: boolean = false;

  constructor(
    public auth: AuthService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe(isAuthenticated => {
      this.isLogin = isAuthenticated && this.router.url !== '/registro-datos';
    });
  }

  mostrarMenu() {
    this.menuActive = !this.menuActive;
  }

  mostrarCategoria() {
    this.categoriaActive = !this.categoriaActive;
  }

  logOut() {
    this.auth.logout();
  }

}
