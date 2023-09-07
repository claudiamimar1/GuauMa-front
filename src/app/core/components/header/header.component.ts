import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public menuActive = false;
  public categoriaActive = false;
  public isLogin = false;

  constructor(
    public auth: AuthService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  mostrarMenu(): void {
    this.menuActive = !this.menuActive;
  }

  mostrarCategoria(): void {
    this.categoriaActive = !this.categoriaActive;
  }

  logOut(): void {
    this.auth.logout();
  }

}
