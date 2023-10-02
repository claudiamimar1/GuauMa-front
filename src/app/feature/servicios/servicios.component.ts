import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Producto } from 'src/app/shared/model/producto';
import { ProductoService } from 'src/app/shared/service/producto.service';
import { UsuarioService } from 'src/app/shared/service/usuario.service';
import { InicioSesionComponent } from '../inicio-sesion/inicio-sesion.component';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent extends InicioSesionComponent implements OnInit {

  public datosServicios = [];
  public noEditar = true;
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
    public auth: AuthService,
    public router: Router,
    public usuarioService: UsuarioService
  ) {
    super(router, usuarioService);
  }
  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe(isAuthenticated => {
      // this.consultarUsuario(isAuthenticated, '/mis-servicios');
    });
    this.cargarDatosGenerales();
    this.cargarProductos();
    this.nuevoServicio = new FormGroup({
      nombre: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
      precio: new FormControl('', [Validators.pattern(/^\d+$/), Validators.required]),
      categoria: new FormControl('', Validators.required)
    });
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

    const tipoDocumentoDe = CryptoJS.AES.decrypt(localStorage.getItem('param1'), 'admin');
    const numeroIdentificacionDe = CryptoJS.AES.decrypt(localStorage.getItem('param2'), 'admin');

    localStorage.setItem('param3', tipoDocumentoDe);
    localStorage.setItem('param4', numeroIdentificacionDe);

    this.tipoIdentificacion = this.hexToBase64(localStorage.getItem('param3'));
    this.numeroIdentificacion = this.hexToBase64(localStorage.getItem('param4'));

    this.productoService.consultarProductosUsuario(this.tipoIdentificacion, this.numeroIdentificacion).subscribe(
      res => {
        localStorage.setItem('param3', '');
        localStorage.setItem('param4', '');
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
        localStorage.setItem('param3', '');
        localStorage.setItem('param4', '');
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

  public hexToBase64(str): string {
    let bString = '';
    for (let i = 0; i < str.length; i += 2) {
      bString += String.fromCharCode(parseInt(str.substr(i, 2), 16));
    }
    return bString;
  }

}
