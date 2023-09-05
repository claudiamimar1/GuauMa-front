import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';
import { Rol } from 'src/app/shared/model/rol';
import { UsuarioService } from 'src/app/shared/service/usuario.service'

@Component({
  selector: 'app-registro-datos-perfil',
  templateUrl: './registro-datos-perfil.component.html',
  styleUrls: ['./registro-datos-perfil.component.css']
})
export class RegistroDatosPerfilComponent implements OnInit {

  public datosUsuario: FormGroup;
  public email: string = '';
  public roles: Array<any> = [];
  public tipoIdentificaciones: Array<any> = [];
  public paises: Array<any> = [];
  public departamentos: Array<any> = [];
  public municipios: Array<any> = [];

  constructor(
    public auth: AuthService,
    public usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(user => this.email = user.email);
    this.cargarDatos();
    setTimeout(() => {
      this.datosUsuario = new FormGroup({
        razonSocial: new FormControl('', Validators.required),
        tipoDocumento: new FormControl('', Validators.required),
        numeroDocumento: new FormControl('', [Validators.pattern(/^\d+$/), Validators.required]),
        correoElectronico: new FormControl(this.email),
        rol: new FormControl('', Validators.required),
        numeroContacto: new FormControl('', [Validators.pattern(/^\d+$/), Validators.required]),
        pais: new FormControl('', Validators.required),
        departamento: new FormControl('', Validators.required),
        ciudad: new FormControl('', Validators.required),
        direccion: new FormControl('', Validators.required)
      });
    }, 1500);
  }

  public cargarDatos() {
    this.usuarioService.consultarRol().subscribe(response => {
      this.roles = response.data;
    }, (error => {
      console.log(error);
    }));

    this.usuarioService.consultarTipoIdentificacion().subscribe(response => {
      this.tipoIdentificaciones = response.data;
    }, (error => {
      console.log(error);
    }));

    this.usuarioService.consultarPais().subscribe(response => {
      this.paises = response.data;
    }, (error => {
      console.log(error);
    }));
  }

  public cargarDepartamentos(value) {
    let codigoPais = value.target.value;
    if (codigoPais !== '') {
      this.usuarioService.consultarDepartamento(value.target.value).subscribe(response => {
        this.departamentos = response.data;
      }, (error => {
        console.log(error);
      }));
    } else {
      this.departamentos = [];
      this.municipios = [];
    }
  }

  public cargarMunicipios(value) {
    let codigoDepartamento = value.target.value;
    if (codigoDepartamento !== '') {
      this.usuarioService.consultarMunicipios(value.target.value).subscribe(response => {
        this.municipios = response.data;
      }, (error => {
        console.log(error);
      }));
    } else {
      this.municipios = [];
    }
  }

  public registrarUsuario() {
    if (this.datosUsuario.valid) {
      console.log(this.datosUsuario.valid);
    } else {
      console.log(this.datosUsuario.valid);
    }
  }
}
