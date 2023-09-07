import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { UsuarioService } from 'src/app/shared/service/usuario.service';
import { InicioSesionComponent } from '../inicio-sesion/inicio-sesion.component';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent extends InicioSesionComponent implements OnInit {

  public datosPerfil: FormGroup;
  public editarCampos = false;

  constructor(
    public auth: AuthService,
    public router: Router,
    public usuarioService: UsuarioService
  ) {
    super(auth, router, usuarioService);
  }

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe(isAuthenticated => {
      this.consultarUsuario(isAuthenticated, '/mi-perfil');
    });
    this.cargarDatos();
  }

  private cargarDatos(): void {
    this.datosPerfil = new FormGroup({
      razonSocial: new FormControl({ value: 'Carolina Marín Hincapié', disabled: true }, Validators.required),
      tipoDocumento: new FormControl({ value: 'C', disabled: true }, Validators.required),
      numeroDocumento: new FormControl({ value: '1094957383', disabled: true }, [Validators.pattern(/^\d+$/), Validators.required]),
      correoElectronico: new FormControl({ value: 'cmarinh@uqvirtual.edu.co', disabled: true }),
      rol: new FormControl({ value: 'consumidor', disabled: true }, Validators.required),
      numeroContacto: new FormControl({ value: '3116595201', disabled: true }, [Validators.pattern(/^\d+$/), Validators.required]),
      departamento: new FormControl({ value: 'Quindío', disabled: true }, Validators.required),
      ciudad: new FormControl({ value: 'Armenia', disabled: true }, Validators.required),
      direccion: new FormControl({ value: 'Carrera 6 #19-25', disabled: true }, Validators.required)
    });
  }

  public editarDatosUsuario(): void {
    this.datosPerfil.get('razonSocial').enable();
    this.datosPerfil.get('rol').enable();
    this.datosPerfil.get('numeroContacto').enable();
    this.datosPerfil.get('departamento').enable();
    this.datosPerfil.get('ciudad').enable();
    this.datosPerfil.get('direccion').enable();
    this.editarCampos = true;
  }

  public cancelarModificacion(): void {
    this.datosPerfil.get('razonSocial').disable();
    this.datosPerfil.get('rol').disable();
    this.datosPerfil.get('numeroContacto').disable();
    this.datosPerfil.get('departamento').disable();
    this.datosPerfil.get('ciudad').disable();
    this.datosPerfil.get('direccion').disable();
    this.editarCampos = false;
  }

  public guardarDatosNuevos(): void {
    this.cancelarModificacion();
    this.editarCampos = false;
  }

}
