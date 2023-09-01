import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  public datosServicios = [];
  public noEditar: boolean = true;
  public agregarServicio: boolean = false;
  public nuevoServicio: FormGroup;

  constructor() {
   }

  ngOnInit(): void {
    this.cargarDatos();
    this.nuevoServicio = new FormGroup({
      nombre: new FormControl('', Validators.required)
    });
  }

  private cargarDatos() {
    this.datosServicios = [
      {
        'id' : 1,
        'nombre': 'Spa',
        'descripcion': 'Baño sencillo: Incluye corte de uñas',
        'precio': 50000,
        'fechaPublicacion': `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
        'estado': 'Activo',
        'imagen': './../../../assets/images/logo.png'
      },
      {
        'id' : 2,
        'nombre': 'Guarderia',
        'descripcion': 'Dia de guarderia: Se realizan diferentes actividades durante le dia',
        'precio': 60000,
        'fechaPublicacion': `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
        'estado': 'Activo',
        'imagen': './../../../assets/images/logo.png'
      }
    ];
  }

  public agregarNuevoServicio(value: boolean) {
    this.agregarServicio = value;
  }

  public guardarNuevoServicio(){
  }

}
