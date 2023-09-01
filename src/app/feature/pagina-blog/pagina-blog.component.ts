import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-blog',
  templateUrl: './pagina-blog.component.html',
  styleUrls: ['./pagina-blog.component.css']
})
export class PaginaBlogComponent implements OnInit {

  public datosBlog = [];

  constructor() { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  private cargarDatos() {
    this.datosBlog = [
      {
        'id' : 1,
        'titulo': 'Perros en adopción',
        'descripcion': 'En adopcion perros criollos',
        'fechaPublicacion': `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
        'estado': 'Activo',
        'categoria': 'Adopción',
        'imagen': './../../../assets/images/logo.png'
      }, {
        'id' : 2,
        'titulo': 'Denuncia maltrato',
        'descripcion': 'En la veterinaria X se presenta casos de maltrato a las mascotas',
        'fechaPublicacion': `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
        'estado': 'Activo',
        'categoria': 'Denuncias',
        'imagen': './../../../assets/images/logo.png'
      }, {
        'id' : 3,
        'titulo': 'Promoción Spa',
        'descripcion': 'Solo por el mes de Agosto, cualquiera de nuestros spa tendra el 10% de descuento',
        'fechaPublicacion': `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
        'estado': 'Activo',
        'categoria': 'Promociones',
        'imagen': './../../../assets/images/logo.png'
      }
    ];
  }

}
