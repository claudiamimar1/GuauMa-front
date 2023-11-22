import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PopUpComponent } from 'src/app/core/components/pop-up/pop-up.component';
import { ProductoService } from 'src/app/shared/service/producto.service';
import { UsuarioService } from 'src/app/shared/service/usuario.service';

@Component({
  selector: 'app-perfil-proveedor',
  templateUrl: './perfil-proveedor.component.html',
  styleUrls: ['./perfil-proveedor.component.css']
})
export class PerfilProveedorComponent extends PopUpComponent implements OnInit {

  public informacionProveedor = [];
  public direccion: string;
  public informacionProductosProveedor = [];

  constructor(
    public router: Router,
    public usuarioService: UsuarioService,
    public productoService: ProductoService,
    public dialogRef: MatDialog
    ) { 
      super(dialogRef, productoService);
    }

  ngOnInit(): void {
    this.consultarInformacionProveedor();
  }

  consultarInformacionProveedor() {
    let correoProveedor = this.router.url.split('/')[2];
    this.usuarioService.consultarUsuarios(correoProveedor).subscribe(response => {
      this.informacionProveedor = response.data;
      this.consultarProductosProveedor(this.informacionProveedor['tipoIdentificacion'].nombre, this.informacionProveedor['numeroIdentificacion']);
      this.usuarioService.consultarMunicipios(0).subscribe(e => {
        let municipio = e.data.filter(municipio => municipio.idMunicipio === this.informacionProveedor['direccion'].codigoMunicipio);
        this.direccion = this.informacionProveedor['direccion'].descripcion + ', ' + municipio[0].nombre;
      });
    });
  }

  consultarProductosProveedor(tipoIdentificacion, numeroIdentificacion) {
    this.productoService.consultarProductosUsuario(tipoIdentificacion, numeroIdentificacion).subscribe(response => {
      this.informacionProductosProveedor = response.data;
    });
  }
}
