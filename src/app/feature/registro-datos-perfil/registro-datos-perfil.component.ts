import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/shared/service/usuario.service';
import { InicioSesionComponent } from '../inicio-sesion/inicio-sesion.component';
import { Usuarios } from 'src/app/shared/model/usuarios';

@Component({
  selector: 'app-registro-datos-perfil',
  templateUrl: './registro-datos-perfil.component.html',
  styleUrls: ['./registro-datos-perfil.component.css']
})
export class RegistroDatosPerfilComponent implements OnInit {

  public datosUsuario: FormGroup;
  public roles: Array<any> = [];
  public tipoIdentificaciones: Array<any> = [];
  public paises: Array<any> = [];
  public departamentos: Array<any> = [];
  public municipios: Array<any> = [];

  constructor(
    public router: Router,
    public usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.cargarDatos();
    this.datosUsuario = new FormGroup({
      razonSocial: new FormControl('', Validators.required),
      tipoDocumento: new FormControl('', Validators.required),
      numeroDocumento: new FormControl('', [Validators.pattern(/^\d+$/), Validators.required]),
      correoElectronico: new FormControl('', [Validators.email, Validators.required]),
      contrasenia: new FormControl('', Validators.required),
      rol: new FormControl('', Validators.required),
      celular: new FormControl('', [Validators.pattern(/^\d+$/), Validators.required]),
      pais: new FormControl('', Validators.required),
      departamento: new FormControl('', Validators.required),
      ciudad: new FormControl('', Validators.required),
      direccion: new FormControl('', Validators.required)
    });
  }

  public cargarDatos(): void {
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

    this.usuarioService.consultarPais().subscribe(response => {
      this.paises = response.data;
      this.paises.sort((a, b) => a.nombre > b.nombre ? 1 : -1);
    }, (error => {
      console.log(error);
    }));
  }

  public cargarDepartamentos(value): void {
    const codigoPais = value.target.value;
    if (codigoPais !== '') {
      this.usuarioService.consultarDepartamento(value.target.value).subscribe(response => {
        this.departamentos = response.data;
        this.departamentos.sort((a, b) => a.nombre > b.nombre ? 1 : -1);
      }, (error => {
        console.log(error);
      }));
    } else {
      this.departamentos = [];
      this.municipios = [];
    }
  }

  public cargarMunicipios(value): void {
    const codigoDepartamento = value.target.value;
    if (codigoDepartamento !== '') {
      this.usuarioService.consultarMunicipios(value.target.value).subscribe(response => {
        this.municipios = response.data;
        this.municipios.sort((a, b) => a.nombre > b.nombre ? 1 : -1);
      }, (error => {
        console.log(error);
      }));
    } else {
      this.municipios = [];
    }
  }

  public registrarUsuario(): void {
    if (this.datosUsuario.valid) {
      this.usuarioService.consultarUsuarios(this.datosUsuario.value.correoElectronico).subscribe(response => {
        alert('El usuario ya se encuentra en nuestra base de datos');
      }, (error => {
        const body: Usuarios = {
          tipoIdentificacion: this.datosUsuario.value.tipoDocumento,
          numeroIdentificacion: this.datosUsuario.value.numeroDocumento,
          nombreRazonSocial: this.datosUsuario.value.razonSocial,
          correo: this.datosUsuario.value.correoElectronico,
          contrasenia: this.datosUsuario.value.contrasenia,
          celular: this.datosUsuario.value.celular,
          direccion: {
            descripcion: this.datosUsuario.value.direccion,
            codigoMunicipio: this.datosUsuario.value.ciudad
          },
          rol: this.datosUsuario.value.rol
        }
        this.usuarioService.crearRegistro(body).subscribe(response => {
          alert('Se creo el usuario correctamente');
          this.regresar();
        }, (error => {

        }));
      }));
    } else {
      alert('Ingresar la información solicitada');
    }
  }

  public regresar() {
    location.reload();
  }
}
