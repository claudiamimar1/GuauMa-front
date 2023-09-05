import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Rol } from 'src/app/shared/model/rol';
import { TipoIdentificacion } from 'src/app/shared/model/tipoIdentificacion';
import { Pais } from 'src/app/shared/model/pais';
import { Departamento } from 'src/app/shared/model/departamento';
import { Municipio } from 'src/app/shared/model/municipio';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public urlConsultarRol: string = `${environment.url}/roles`;
  public urlConsultarTipoIdentificacion: string = `${environment.url}/tipo-identificacion`;
  public urlConsultarPais: string = `${environment.url}/pais`;
  public urlConsultarDepartamentos: string = `${environment.url}/departamentos`;
  public urlConsultarMunicipios: string = `${environment.url}/municipios`;

  constructor(
    protected http: HttpClient
  ) { }

  public consultarRol() {
    return this.http.get<Rol>(`${this.urlConsultarRol}`);
  }

  public consultarTipoIdentificacion() {
    return this.http.get<TipoIdentificacion>(`${this.urlConsultarTipoIdentificacion}`);
  }
  
  public consultarPais() {
    return this.http.get<Pais>(`${this.urlConsultarPais}`);
  }
  
  public consultarDepartamento(codigoPais) {
    return this.http.get<Departamento>(`${this.urlConsultarDepartamentos}?codigoPais=${codigoPais}`);
  }

  public consultarMunicipios(codigoDepartamento) {
    return this.http.get<Municipio>(`${this.urlConsultarMunicipios}?codigoDepartamento=${codigoDepartamento}`);
  }
}
