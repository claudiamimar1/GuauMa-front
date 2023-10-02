import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductoService } from 'src/app/shared/service/producto.service';
import { Publicacion } from 'src/app/shared/model/publicacion';

@Component({
  selector: 'app-pagina-blog',
  templateUrl: './pagina-blog.component.html',
  styleUrls: ['./pagina-blog.component.css']
})
export class PaginaBlogComponent implements OnInit {

  @Input() datosUsuario;

  public datosBlog = [];
  public publicacion: FormGroup;

  constructor(
    public router: Router,
    public productoService: ProductoService
  ) { }

  ngOnInit(): void {
    const fechaActual = new Date();
    if (localStorage.getItem('isLogin') === 'true') {
      const idUsuario = JSON.parse(localStorage.getItem('usuario')).idUsuario;
      this.publicacion = new FormGroup({
        titulo: new FormControl('', Validators.required),
        fechaPublicacion: new FormControl(fechaActual.getTime(), Validators.required),
        descripcion: new FormControl('', Validators.required),
        usuario: new FormControl(idUsuario, Validators.required)
      });
      this.cargarDatos();
    } else {
      this.router.navigate(['/']);
    }
  }

  private cargarDatos(): void {
    this.productoService.consultarPublicacion().subscribe(response => {
      this.datosBlog = response.data;
    }, (error => {
      console.log(error);
    }));
  }

  public guardarPublicacion(): void {
    if (this.publicacion.valid) {
      const body: Publicacion = {
        titulo: this.publicacion.value.titulo,
        idUsuario: this.publicacion.value.usuario,
        descripcion: this.publicacion.value.descripcion,
        fecha: this.publicacion.value.fechaPublicacion
      };
      this.productoService.crearPublicacion(body).subscribe(response => {
        alert('Se creo la publicación');
        location.reload();
      }, (error => {
        console.log(error);
      }));
    }
  }



}
