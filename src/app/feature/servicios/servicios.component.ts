import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Producto } from 'src/app/shared/model/producto';
import { ProductoService } from 'src/app/shared/service/producto.service';
import { UsuarioService } from 'src/app/shared/service/usuario.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  public datosServicios = [];
  public agregarServicio = false;
  public nuevoServicio: FormGroup;
  public nombreEditar = '';
  public descripcionEditar = '';
  public precioEditar = 0;
  public estadoEditar = '';
  public categoriaEditar = '';
  public categorias = [];
  public listaIdentificaciones = [];
  public tipoIdentificacion = '';
  public numeroIdentificacion = '';

  constructor(
    public productoService: ProductoService,
    public router: Router,
    public usuarioService: UsuarioService
  ) { }
  ngOnInit(): void {
    if (localStorage.getItem('isLogin') === 'true') {
      this.cargarDatosGenerales();
      this.cargarProductos();
      this.nuevoServicio = new FormGroup({
        nombre: new FormControl('', Validators.required),
        descripcion: new FormControl('', Validators.required),
        precio: new FormControl('', [Validators.pattern(/^\d+$/), Validators.required]),
        categoria: new FormControl('', Validators.required)
      });
    } else {
      this.router.navigate(['/']);
    }
  }

  private cargarDatosGenerales(): void {
    this.productoService.consultarCategoria().subscribe(response => {
      this.categorias = response.data;
      this.categorias.sort((a, b) => a.nombre > b.nombre ? 1 : -1);
    }, (error => {
      console.log(error);
    }));

    this.usuarioService.consultarTipoIdentificacion().subscribe(response => {
      this.listaIdentificaciones = response.data;
      this.listaIdentificaciones.sort((a, b) => a.descripcion > b.descripcion ? 1 : -1);
    }, (error => {
      console.log(error);
    }));
  }

  private cargarProductos(): void {
    this.tipoIdentificacion = JSON.parse(localStorage.getItem('usuario')).tipoIdentificacion;
    this.numeroIdentificacion = JSON.parse(localStorage.getItem('usuario')).numeroIdentificacion;
    this.productoService.consultarProductosUsuario(this.tipoIdentificacion, this.numeroIdentificacion).subscribe(
      res => {
        const usuario = res.data;
        if (usuario.length > 0) {
          usuario.forEach(us => {
            const prod = {
              id: us.idProducto,
              nombre: us.nombre,
              descripcion: us.descripcion,
              precio: us.precio,
              categoria: us.categoria.nombre
            };
            this.datosServicios.push(prod);
          });
        }
      }, (error => {
        console.log(error);
      }));
  }

  public agregarNuevoServicio(value): void {
    this.agregarServicio = value;
  }

  public guardarNuevoServicio(): void {
    if (this.nuevoServicio.valid) {
      const body: Producto = {
        nombre: this.nuevoServicio.controls.nombre.value,
        descripcion: this.nuevoServicio.controls.descripcion.value,
        precio: this.nuevoServicio.controls.precio.value,
        nombreCategoria: this.nuevoServicio.controls.categoria.value,
        usuario: {
          tipoIdentificacion: {
            idTipoIdentificacion: 1,
            nombre: this.tipoIdentificacion,
            descripcion: this.listaIdentificaciones.filter(e => e.nombre === this.tipoIdentificacion)[0].descripcion,
          },
          numeroIdentificacion: Number(this.numeroIdentificacion),
        }
      };
      this.productoService.guardarProducto(body).subscribe(e => {
        alert('Se registro correctamente el producto');
        this.agregarNuevoServicio(false);
        this.cargarProductos();
      });
    } else {
      alert('Ingrese todos los datos');
    }
  }
}
