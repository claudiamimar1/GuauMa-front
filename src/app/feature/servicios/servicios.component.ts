import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  public datosServicios = [];
  public editar: boolean = false;
  public agregarServicio: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  private cargarDatos() {
    this.datosServicios = [
      {
        'nombre': 'Spa',
        'descripcion': 'Baño sencillo: Incluye corte de uñas',
        'precio': 50000,
        'fechaPublicacion': new Date(),
        'estado': 'Activo'
      },
      {
        'nombre': 'Guarderia',
        'descripcion': 'Dia de guarderia: Se realizan diferentes actividades durante le dia',
        'precio': 60000,
        'fechaPublicacion': new Date(),
        'estado': 'Activo'
      }
    ];
  }

  public agregarNuevoServicio() {
    this.agregarServicio = true;
  }

  public cancelarNuevoServicio() {
    this.agregarServicio = false;
  }

  public guardarNuevoServicio(){
    /* this.datosPerfil = new FormGroup({
      nombres: new FormControl("Carolina", Validators.maxLength(20)),
      apellidos: new FormControl("Marín", Validators.maxLength(30)),
      correoElectronico: new FormControl("cmarinh@uqvirtual.edu.co", Validators.email),
      numeroContacto: new FormControl("3116595201", [Validators.pattern(/^\d+$/), Validators.maxLength(10)])
    }); */
  }

}
