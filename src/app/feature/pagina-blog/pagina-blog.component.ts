import { Component, OnInit } from '@angular/core';
import { InicioSesionComponent } from '../inicio-sesion/inicio-sesion.component';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/shared/service/usuario.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PrincipalComponent } from '../principal/principal.component';

@Component({
  selector: 'app-pagina-blog',
  templateUrl: './pagina-blog.component.html',
  styleUrls: ['./pagina-blog.component.css']
})
export class PaginaBlogComponent extends PrincipalComponent implements OnInit {

  public datosBlog = [];
  public publicacion: FormGroup;

  constructor(
    public router: Router,
    public usuarioService: UsuarioService
  ) {
    super();
  }

  ngOnInit(): void {
    if (this.isLogin()) {
      this.publicacion = new FormGroup({
        titulo: new FormControl('', Validators.required),
        fechaPublicacion: new FormControl(new Date, Validators.required),
        descripcion: new FormControl('', Validators.required),
        usuario: new FormControl('', Validators.required)
      });
      this.cargarDatos();
    } else {
      this.router.navigate(['/']);
    }
  }

  private cargarDatos(): void {
    this.datosBlog = [
      {
        id: 1,
        titulo: 'Perros en adopción',
        descripcion: 'En adopcion perros criollos',
        fechaPublicacion: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
        estado: 'Activo',
        categoria: 'Adopción',
        imagen: './../../../assets/images/logo.png'
      }, {
        id: 2,
        titulo: 'Denuncia maltrato',
        descripcion: 'En la veterinaria X se presenta casos de maltrato a las mascotas',
        fechaPublicacion: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
        estado: 'Activo',
        categoria: 'Denuncias',
        imagen: './../../../assets/images/logo.png'
      }, {
        id: 3,
        titulo: 'Promoción Spa',
        descripcion: 'Solo por el mes de Agosto, cualquiera de nuestros spa tendra el 10% de descuento',
        fechaPublicacion: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
        estado: 'Activo',
        categoria: 'Promociones',
        imagen: './../../../assets/images/logo.png'
      }
    ];
  }

  public guardarPublicacion() {
    debugger;
    if (this.publicacion.valid) {

    }
  }



}
