import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/shared/service/usuario.service';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements OnInit {

  public datosNegocios = [];

  constructor(
    public router: Router,
    public usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  private cargarDatos(): void {
    this.usuarioService.consultarProveedores('Proveedor').subscribe(response => {
      if (response.data.length > 0) {
        response.data.forEach(res => {
          const negocio = {
            id: res.idUsuario,
            nombre: res.nombreRazonSocial,
            imagen: './../../../assets/images/perfil.png'
          };
          this.datosNegocios.push(negocio);
        });
      } else {
        alert('No se encontraron datos de negocios');
      }
    }, (error => {
      console.log(error);
    }));
  }

}
