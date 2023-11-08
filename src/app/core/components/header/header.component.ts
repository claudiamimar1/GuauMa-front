import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/shared/service/producto.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public menuActive = false;
  public categoriaActive = false;
  public categorias = [];

  constructor(
    public router: Router,
    public productoService: ProductoService
  ) { }

  ngOnInit(): void {
    this.cargarCategorias();
  }

  mostrarMenu(): void {
    this.menuActive = !this.menuActive;
  }

  mostrarCategoria(): void {
    this.categoriaActive = !this.categoriaActive;
  }

  logOut(): void {
    localStorage.setItem('isLogin', 'false');
    this.router.navigate(['/']);
  }

  isLogin(): boolean {
    return localStorage.getItem('isLogin') === 'true' ? true : false;
  }

  isProveedor(): boolean {
    return localStorage.getItem('rol') === 'Proveedor' ? true : false;
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
