import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public datosPerfil: FormGroup;
  public editarCampos: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  private cargarDatos() {
    this.datosPerfil = new FormGroup({
      razonSocial: new FormControl({value: 'Carolina Marín Hincapié', disabled: true}, Validators.required),
      tipoDocumento: new FormControl({value: 'C', disabled: true}, Validators.required),
      numeroDocumento: new FormControl({value: '1094957383', disabled: true}, [Validators.pattern(/^\d+$/), Validators.required]),
      correoElectronico: new FormControl({value: 'cmarinh@uqvirtual.edu.co', disabled: true}),
      rol: new FormControl({value: 'consumidor', disabled: true}, Validators.required),
      numeroContacto: new FormControl({value: '3116595201', disabled: true}, [Validators.pattern(/^\d+$/), Validators.required]),
      departamento: new FormControl({value: 'Quindío', disabled: true}, Validators.required),
      ciudad: new FormControl({value: 'Armenia', disabled: true}, Validators.required),
      direccion: new FormControl({value: 'Carrera 6 #19-25', disabled: true}, Validators.required)
    });
  }

  public editarDatosUsuario() {
    this.datosPerfil.get('razonSocial').enable();
    this.datosPerfil.get('rol').enable();
    this.datosPerfil.get('numeroContacto').enable();
    this.datosPerfil.get('departamento').enable();
    this.datosPerfil.get('ciudad').enable();
    this.datosPerfil.get('direccion').enable();
    this.editarCampos = true;
  }

  public cancelarModificacion() {
    this.datosPerfil.get('razonSocial').disable();
    this.datosPerfil.get('rol').disable();
    this.datosPerfil.get('numeroContacto').disable();
    this.datosPerfil.get('departamento').disable();
    this.datosPerfil.get('ciudad').disable();
    this.datosPerfil.get('direccion').disable();
    this.editarCampos = false;
  }

  public guardarDatosNuevos() {
    this.cancelarModificacion();
    this.editarCampos = false;
  }

}
