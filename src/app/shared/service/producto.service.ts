import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Categoria } from 'src/app/shared/model/categoria';
import { Producto } from 'src/app/shared/model/producto';
import { Productos } from 'src/app/shared/model/productos';
import { Resenia } from 'src/app/shared/model/resenia';
import { Publicaciones } from 'src/app/shared/model/publicaciones';
import { Publicacion } from 'src/app/shared/model/publicacion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private urlConsultarCategoria = `${environment.url}/producto/categorias`;
  private urlGuardarProducto = `${environment.url}/producto`;
  private urlGuardarResenia = `${environment.url}/producto/resenia`;
  private urlConsultarPublicacion = `${environment.url}/producto/publicacion`;

  constructor(
    protected http: HttpClient
  ) { }

  public consultarCategoria(): Observable<Categoria> {
    return this.http.get<Categoria>(`${this.urlConsultarCategoria}`);
  }

  public guardarProducto(body: Producto): Observable<Producto> {
    return this.http.post<Producto>(`${this.urlGuardarProducto}`, body);
  }

  public consultarProductos(): Observable<Productos> {
    return this.http.get<Productos>(`${this.urlGuardarProducto}`);
  }

  public consultarProductosCategoria(categoria): Observable<Productos> {
    return this.http.get<Productos>(`${this.urlGuardarProducto}`);
  }

  public consultarProductosUsuario(tipoIdentificacion, numeroIdentificacion): Observable<Productos> {
    return this.http.get<Productos>(`${this.urlGuardarProducto}?tipoIdentificacion=${tipoIdentificacion}&numeroIdentificacion=${numeroIdentificacion}`);
  }

  public crearResenia(body: Resenia): Observable<Producto> {
    return this.http.post<Producto>(`${this.urlGuardarResenia}`, body);
  }

  public consultarPublicacion(): Observable<Publicaciones> {
    return this.http.get<Publicaciones>(`${this.urlConsultarPublicacion}`);
  }

  public crearPublicacion(body: Publicacion): Observable<Publicaciones> {
    return this.http.post<Publicaciones>(`${this.urlConsultarPublicacion}`, body);
  }
}
