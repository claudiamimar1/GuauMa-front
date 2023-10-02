import { Component, OnInit } from '@angular/core';
import { InicioSesionComponent } from '../inicio-sesion/inicio-sesion.component';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/shared/service/usuario.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent extends InicioSesionComponent implements OnInit {

  public isInicioSesion = false;
  public isRegistro = false;
  constructor(
    public router: Router,
    public usuarioService: UsuarioService) { 
    super(router, usuarioService)
  }

  ngOnInit(): void {
  }

  public iniciarSesion(): void {
    this.isInicioSesion = true;
    this.isRegistro = false;
  }

  public registro(): void {
    this.isRegistro = true;
    this.isInicioSesion = false;
  }

}
