import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { PopUpComponent } from 'src/app/core/components/pop-up/pop-up.component';
import { ProductoService } from 'src/app/shared/service/producto.service';

@Component({
  selector: 'app-productos-generales',
  templateUrl: './productos-generales.component.html',
  styleUrls: ['./productos-generales.component.css']
})
export class ProductosGeneralesComponent extends PopUpComponent implements OnInit {

  public productos = [];
  public productosFiltrados = [];
  public categorias = [];

  constructor(
    public router: Router,
    public productoService: ProductoService,
    public dialogRef: MatDialog
  ) {
    super(dialogRef, productoService);
   }

  ngOnInit(): void {
    if (localStorage.getItem('isLogin') === 'true') {
      this.cargarProductos();
    } else {
      this.router.navigate(['/']);
    }
  }

  public cargarProductos(): void {
    this.productoService.consultarProductos().subscribe(response => {
      this.productos = response.data;
      this.productosFiltrados = response.data
    });
    this.productoService.consultarCategoria().subscribe(response => {
      this.categorias = response.data;
      this.categorias.sort((a, b) => a.nombre > b.nombre ? 1 : -1);
    }, (error => {
      console.log(error);
    }));
  }

  public filtrarPorCategoria(categoria): void {
    if (categoria.target.value === 'todo' || categoria.target.value === '') {
      this.productosFiltrados = this.productos;
    } else {
      this.productosFiltrados = this.productos.filter(producto => producto.categoria.nombre === categoria.target.value);
    }
  }

}
