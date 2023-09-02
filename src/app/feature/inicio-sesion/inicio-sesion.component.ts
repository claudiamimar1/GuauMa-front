import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

  constructor(
    public auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe(isAuthenticated => {
      if(isAuthenticated && !this.consultarUsuario()) {
        this.router.navigate(['/registro-datos']);
      } else if (isAuthenticated && this.consultarUsuario()) {
        this.router.navigate(['/inicio-cuidado-animal']);
      }
    });
  }

  public iniciarSesion() {
    this.auth.loginWithRedirect();
  }

  public consultarUsuario() {
    // Se consume servicio para saber si el usuario existe
    return true;
  }

}
