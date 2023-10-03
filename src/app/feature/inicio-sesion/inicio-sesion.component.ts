import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/shared/service/usuario.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

  public inicioSesion: FormGroup;
  public inicioCorrecto = false;

  constructor(
    public router: Router,
    public usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.inicioSesion = new FormGroup({
      correoElectronico: new FormControl('', Validators.required),
      contrasenia: new FormControl('', Validators.required)
    });
  }

  public iniciarSesion(): void {
    if (this.inicioSesion.valid) {
      this.usuarioService.iniciarSesion(this.inicioSesion.value.correoElectronico, this.inicioSesion.value.contrasenia)
        .subscribe(response => {
          if (response.mensajes[0] === 'Consulta exitosa') {
            this.guardarDatosStorage(response.data);
          } else {
            alert(response.mensajes[0]);
          }
        });
    } else {
      alert('Complete todos los datos');
    }
  }

  public guardarDatosStorage(datosUsuario): void {
    const datos = {
      correo: datosUsuario.correo,
      idUsuario: datosUsuario.idUsuario,
      numeroIdentificacion: datosUsuario.numeroIdentificacion,
      tipoIdentificacion: datosUsuario.tipoIdentificacion.nombre
    };
    localStorage.setItem('isLogin', 'true');
    localStorage.setItem('usuario', JSON.stringify(datos));
    this.router.navigate(['/inicio-cuidado-animal']);
  }

  isLogin(): boolean {
    return localStorage.getItem('isLogin') === 'true' ? true : false;
  }

  public regresar(): void {
    location.reload();
  }
}
