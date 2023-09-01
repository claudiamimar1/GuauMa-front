import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-registro-datos-perfil',
  templateUrl: './registro-datos-perfil.component.html',
  styleUrls: ['./registro-datos-perfil.component.css']
})
export class RegistroDatosPerfilComponent implements OnInit {

  public datosUsuario: FormGroup;
  public email: string = '';

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(user => this.email = user.email);
    setTimeout(() => {
      this.datosUsuario = new FormGroup({
        razonSocial: new FormControl('', Validators.required),
        tipoDocumento: new FormControl('', Validators.required),
        numeroDocumento: new FormControl('', [Validators.pattern(/^\d+$/), Validators.required]),
        correoElectronico: new FormControl(this.email),
        rol: new FormControl('', Validators.required),
        numeroContacto: new FormControl('', [Validators.pattern(/^\d+$/), Validators.required]),
        departamento: new FormControl('', Validators.required),
        ciudad: new FormControl('', Validators.required),
        direccion: new FormControl('', Validators.required)
      });
    }, 1500);
  }

  public registrarUsuario() {
    if (this.datosUsuario.valid) {
      console.log(this.datosUsuario.valid);
    } else {
      console.log(this.datosUsuario.valid);
    }
  }
}
