import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Categoria } from 'src/app/shared/model/categoria';
import { Producto } from 'src/app/shared/model/producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private urlConsultarCategoria = `${environment.url}/producto/categorias`;
  private urlGuardarProducto = `${environment.url}/producto`;

  constructor(
    protected http: HttpClient
  ) { }

  public consultarCategoria(): Observable<Categoria> {
    return this.http.get<Categoria>(`${this.urlConsultarCategoria}`);
  }

  public guardarProducto(body: Producto): Observable<Producto> {
    return this.http.post<Producto>(`${this.urlGuardarProducto}`, body);
  }
}
