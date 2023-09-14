import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { UsuarioService } from 'src/app/shared/service/usuario.service';
import * as CryptoJS from 'crypto-js'

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

  constructor(
    public auth: AuthService,
    public router: Router,
    public usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe(isAuthenticated => {
      this.consultarUsuario(isAuthenticated, '/inicio-cuidado-animal');
    });
  }

  public iniciarSesion(): void {
    this.auth.loginWithRedirect();
  }

  public consultarUsuario(isAuthenticated, enlace): void {
    if (isAuthenticated) {
      this.auth.user$.subscribe(user => {
        this.usuarioService.consultarUsuarios(user.email).subscribe(response => {
          if (response.codigoHttp === 202) {
            this.router.navigate([enlace]);
            let tipoIdetificacion = CryptoJS.AES.encrypt(response.data['tipoIdentificacion'].nombre, 'admin');
            let numeroIdentificacion = CryptoJS.AES.encrypt(`${response.data['numeroIdentificacion']}`, 'admin');
            localStorage.setItem('param1', tipoIdetificacion);
            localStorage.setItem('param2', numeroIdentificacion);
          } else if (response.codigoHttp === 500) {
            this.router.navigate(['/registro-datos']);
          }
        }, (error => {
          this.router.navigate(['/registro-datos']);
        }));
      });
    } else {
      this.router.navigate(['/']);
    }
  }
}
