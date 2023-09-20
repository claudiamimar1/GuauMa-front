import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Categoria } from 'src/app/shared/model/categoria';
import { Producto } from 'src/app/shared/model/producto';
import { Productos } from 'src/app/shared/model/productos';
import { Resenia } from 'src/app/shared/model/resenia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private urlConsultarCategoria = `${environment.url}/producto/categorias`;
  private urlGuardarProducto = `${environment.url}/producto`;
  private urlGuardarResenia = `${environment.url}/producto/resenia`;

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
}
