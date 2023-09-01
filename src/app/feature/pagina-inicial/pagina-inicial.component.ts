import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements OnInit {

  public datosNegocios = [];

  constructor() { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  private cargarDatos() {
    this.datosNegocios = [
      {
        'id' : 1,
        'nombre': 'San Blass',
        'descripcion': 'Veterinaria',
        'fechaPublicacion': `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
        'estado': 'Activo',
        'imagen': './../../../assets/images/logo.png'
      },
      {
        'id' : 2,
        'nombre': 'Oh, my pets',
        'descripcion': 'Tienda',
        'fechaPublicacion': `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
        'estado': 'Activo',
        'imagen': './../../../assets/images/logo.png'
      },
      {
        'id' : 3,
        'nombre': 'Paseadora',
        'descripcion': 'Tienda',
        'fechaPublicacion': `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
        'estado': 'Activo',
        'imagen': './../../../assets/images/logo.png'
      },
      {
        'id' : 3,
        'nombre': 'Paseadora',
        'descripcion': 'Paseo perros de lunes a viernes',
        'fechaPublicacion': `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
        'estado': 'Activo',
        'imagen': './../../../assets/images/logo.png'
      }
    ];
  }

}
