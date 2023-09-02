import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public datosPerfil: FormGroup;
  public noEditar: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  private cargarDatos() {
    this.datosPerfil = new FormGroup({
      razonSocial: new FormControl('Carolina Marín Hincapié', Validators.required),
      tipoDocumento: new FormControl('C', Validators.required),
      numeroDocumento: new FormControl('1094957383', [Validators.pattern(/^\d+$/), Validators.required]),
      correoElectronico: new FormControl('cmarinh@uqvirtual.edu.co'),
      rol: new FormControl('consumidor', Validators.required),
      numeroContacto: new FormControl('3116595201', [Validators.pattern(/^\d+$/), Validators.required]),
      departamento: new FormControl('Quindío', Validators.required),
      ciudad: new FormControl('Armenia', Validators.required),
      direccion: new FormControl('Carrera 6 #19-25', Validators.required)
    });
  }

  public editarDatosUsuario() {
    debugger;
    this.noEditar = false;
  }

}
