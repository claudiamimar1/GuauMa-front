import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Categoria } from 'src/app/shared/model/categoria';
import { Producto } from 'src/app/shared/model/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private urlConsultarCategoria: string = `${environment.url}/producto/categorias`;
  private urlGuardarProducto: string = `${environment.url}/producto`;

  constructor(
    protected http: HttpClient
  ) { }

  public consultarCategoria() {
    return this.http.get<Categoria>(`${this.urlConsultarCategoria}`);
  }

  public guardarProducto(body: Producto) {
    return this.http.post<Producto>(`${this.urlGuardarProducto}`, body);
  }
}
