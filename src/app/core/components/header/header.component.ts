import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { ProductoService } from 'src/app/shared/service/producto.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public menuActive = false;
  public categoriaActive = false;
  public isLogin = false;
  public categorias = [];

  constructor(
    public auth: AuthService,
    public router: Router,
    public productoService: ProductoService
  ) { }

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe(isAuthenticated => {
      this.isLogin = isAuthenticated && this.router.url !== '/registro-datos';
    });
    this.cargarCategorias();
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

  cargarCategorias(): void {
    this.productoService.consultarCategoria().subscribe(response => {
      this.categorias = response.data;
      this.categorias.sort((a, b) => a.nombre > b.nombre ? 1 : -1);
    }, (error => {
      console.log(error);
    }));
  }

}
