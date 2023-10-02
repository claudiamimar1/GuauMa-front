import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/shared/service/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public datosPerfil: FormGroup;
  public editarCampos = false;
  public roles: Array<any> = [];
  public tipoIdentificaciones: Array<any> = [];

  constructor(
    public router: Router,
    public usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('isLogin') === 'true') {
      const correoUsuario = JSON.parse(localStorage.getItem('usuario')).correo;
      this.usuarioService.consultarUsuarios(correoUsuario).subscribe(response => {
        this.cargarDatos(response.data);
      }, (error => {
        console.log(error);
      }));
    } else {
      this.router.navigate(['/']);
    }
  }

  private cargarDatos(usuario): void {
    this.usuarioService.consultarRol().subscribe(response => {
      this.roles = response.data;
      this.roles.sort((a, b) => a.nombre > b.nombre ? 1 : -1);
    }, (error => {
      console.log(error);
    }));

    this.usuarioService.consultarTipoIdentificacion().subscribe(response => {
      this.tipoIdentificaciones = response.data;
      this.tipoIdentificaciones.sort((a, b) => a.descripcion > b.descripcion ? 1 : -1);
    }, (error => {
      console.log(error);
    }));

    this.datosPerfil = new FormGroup({
      razonSocial: new FormControl({ value: usuario.nombreRazonSocial, disabled: true }, Validators.required),
      tipoDocumento: new FormControl({ value: usuario.tipoIdentificacion.nombre, disabled: true }, Validators.required),
      numeroDocumento: new FormControl({ value: usuario.numeroIdentificacion, disabled: true }, [Validators.pattern(/^\d+$/), Validators.required]),
      correoElectronico: new FormControl({ value: usuario.correo, disabled: true }),
      rol: new FormControl({ value: usuario.rol.nombre, disabled: true }, Validators.required),
      numeroContacto: new FormControl({ value: usuario.celular, disabled: true }, [Validators.pattern(/^\d+$/), Validators.required]),
      //ciudad: new FormControl({ value: 'Armenia', disabled: true }, Validators.required),
      direccion: new FormControl({ value: usuario.direccion.descripcion, disabled: true }, Validators.required)
    });
  }

  public editarDatosUsuario(): void {
    this.datosPerfil.get('razonSocial').enable();
    this.datosPerfil.get('rol').enable();
    this.datosPerfil.get('numeroContacto').enable();
    //this.datosPerfil.get('departamento').enable();
    //this.datosPerfil.get('ciudad').enable();
    this.datosPerfil.get('direccion').enable();
    this.editarCampos = true;
  }

  public cancelarModificacion(): void {
    this.datosPerfil.get('razonSocial').disable();
    this.datosPerfil.get('rol').disable();
    this.datosPerfil.get('numeroContacto').disable();
    //this.datosPerfil.get('departamento').disable();
    //.datosPerfil.get('ciudad').disable();
    this.datosPerfil.get('direccion').disable();
    this.editarCampos = false;
  }

  public guardarDatosNuevos(): void {
    this.cancelarModificacion();
    this.editarCampos = false;
  }

}
