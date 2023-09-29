import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/shared/model/usuario';
import { UsuarioService } from 'src/app/shared/service/usuario.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

  public inicioSesion: FormGroup;
  public inicioCorrecto = false;
  public datosUsuario;

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

  public iniciarSesion() {
    if(this.inicioSesion.valid) {
      this.usuarioService.iniciarSesion(this.inicioSesion.value.correoElectronico, this.inicioSesion.value.contrasenia).subscribe(response => {
        if(response.mensajes[0] === 'Consulta exitosa') {
          this.datosUsuario = response.data;
          localStorage.setItem('isLogin', 'true');
          this.router.navigate(['/inicio-cuidado-animal']);
        } else {
          alert(response.mensajes[0]);
        }
      });
    } else {
      alert('Complete todos los datos');
    }
  }
  
  public regresar() {
    location.reload();
  }
}
