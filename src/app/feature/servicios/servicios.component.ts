import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Producto } from 'src/app/shared/model/producto';
import { ProductoService } from 'src/app/shared/service/producto.service'
import { UsuarioService } from 'src/app/shared/service/usuario.service';
import { InicioSesionComponent } from '../inicio-sesion/inicio-sesion.component';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent extends InicioSesionComponent implements OnInit {

  public datosServicios = [];
  public noEditar: boolean = true;
  public agregarServicio: boolean = false;
  public nuevoServicio: FormGroup;
  public nombreEditar: string = '';
  public descripcionEditar: string = '';
  public precioEditar: number = 0;
  public fechaPublicacionEditar: Date = new Date();
  public estadoEditar: string = '';
  public categoriaEditar: string = '';
  public categorias = [];

  constructor(
    public productoService: ProductoService,
    public auth: AuthService,
    public router: Router,
    public usuarioService: UsuarioService
  ) {
    super(auth, router, usuarioService)
  }
  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe(isAuthenticated => {
      this.consultarUsuario(isAuthenticated, '/mis-servicios');
    });
    this.nuevoServicio = new FormGroup({
      nombre: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
      precio: new FormControl('', [Validators.pattern(/^\d+$/), Validators.required]),
      categoria: new FormControl('', Validators.required)
    });
    this.cargarDatos();
  }

  private cargarDatos() {
    this.productoService.consultarCategoria().subscribe(response => {
      this.categorias = response.data;
      this.categorias.sort((a, b) => a.nombre > b.nombre ? 1 : -1);
    }, (error => {
      console.log(error);
    }));

    this.datosServicios = [
      {
        'id': 1,
        'nombre': 'Spa',
        'descripcion': 'Baño sencillo: Incluye corte de uñas',
        'precio': 50000,
        'categoria': 'spa'
      },
      {
        'id': 2,
        'nombre': 'Guarderia',
        'descripcion': 'Dia de guarderia: Se realizan diferentes actividades durante le dia',
        'precio': 60000,
        'categoria': 'entretenimiento'
      }
    ];
  }

  public agregarNuevoServicio(value: boolean) {
    this.agregarServicio = value;
  }

  public guardarNuevoServicio() {
    if (this.nuevoServicio.valid) {
      let body: Producto = {
        nombre: this.nuevoServicio.controls.nombre.value,
        descripcion: this.nuevoServicio.controls.descripcion.value,
        precio: this.nuevoServicio.controls.precio.value,
        nombreCategoria: this.nuevoServicio.controls.categoria.value,
        usuario: {
          tipoIdentificacion: {
            idTipoIdentificacion: 1,
            nombre: 'CC',
            descripcion: 'Cedula',
          },
          numeroIdentificacion: 1094957383,
        }
      }
      this.productoService.guardarProducto(body).subscribe(e => {
        alert('Se registro correctamente el producto');
      })

    } else {
      alert('Ingrese todos los datos');
    }
  }

}
