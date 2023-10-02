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

  constructor(
    public auth: AuthService,
    public router: Router,
    public productoService: ProductoService,
    public dialogRef: MatDialog
  ) {
    super(dialogRef, productoService);
   }

  ngOnInit(): void {
    this.cargarProductos();
  }

  public cargarProductos(): void {
    this.productoService.consultarProductos().subscribe(response => {
      this.productos = response.data;
    });
  }

}
