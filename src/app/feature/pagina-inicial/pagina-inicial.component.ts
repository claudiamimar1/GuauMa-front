import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { UsuarioService } from 'src/app/shared/service/usuario.service';
import { InicioSesionComponent } from '../inicio-sesion/inicio-sesion.component';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent extends InicioSesionComponent implements OnInit {

  public datosNegocios = [];

  constructor(
    public auth: AuthService,
    public router: Router,
    public usuarioService: UsuarioService
  ) {
    super(auth, router, usuarioService);
  }

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe(isAuthenticated => {
      this.consultarUsuario(isAuthenticated, '/inicio-cuidado-animal');
    });
    this.cargarDatos();
  }

  private cargarDatos(): void {
    this.datosNegocios = [
      {
        id: 1,
        nombre: 'San Blass',
        descripcion: 'Veterinaria',
        fechaPublicacion: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
        estado: 'Activo',
        imagen: './../../../assets/images/logo.png'
      },
      {
        id: 2,
        nombre: 'Oh, my pets',
        descripcion: 'Tienda',
        fechaPublicacion: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
        estado: 'Activo',
        imagen: './../../../assets/images/logo.png'
      },
      {
        id: 3,
        nombre: 'Paseadora',
        descripcion: 'Tienda',
        fechaPublicacion: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
        estado: 'Activo',
        imagen: './../../../assets/images/logo.png'
      },
      {
        id: 3,
        nombre: 'Paseadora',
        descripcion: 'Paseo perros de lunes a viernes',
        fechaPublicacion: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
        estado: 'Activo',
        imagen: './../../../assets/images/logo.png'
      }
    ];
  }

}
