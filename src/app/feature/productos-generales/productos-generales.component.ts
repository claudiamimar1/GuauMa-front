import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { ProductoService } from 'src/app/shared/service/producto.service';

@Component({
  selector: 'app-productos-generales',
  templateUrl: './productos-generales.component.html',
  styleUrls: ['./productos-generales.component.css']
})
export class ProductosGeneralesComponent implements OnInit {

  public productos = [];

  constructor(
    public auth: AuthService,
    public router: Router,
    public productoService: ProductoService
  ) { }

  ngOnInit(): void {
    this.cargarProductos();
  }

  public cargarProductos() {
    this.productoService.consultarProductos().subscribe(response => {
      debugger;
      this.productos = response.data;
    });
  }

}
