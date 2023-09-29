import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  public isInicioSesion = false;
  public isRegistro = false;
  constructor() { }

  ngOnInit(): void {
  }

  isLogin(): boolean{
    return localStorage.getItem('isLogin') === 'true'? true : false;
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
