import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Rol } from 'src/app/shared/model/rol';
import { TipoIdentificacion } from 'src/app/shared/model/tipoIdentificacion';
import { Pais } from 'src/app/shared/model/pais';
import { Departamento } from 'src/app/shared/model/departamento';
import { Municipio } from 'src/app/shared/model/municipio';
import { Usuario } from 'src/app/shared/model/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlConsultarRol = `${environment.url}/usuario/roles`;
  private urlConsultarTipoIdentificacion = `${environment.url}/usuario/tipo-identificacion`;
  private urlConsultarPais = `${environment.url}/usuario/pais`;
  private urlConsultarDepartamentos = `${environment.url}/usuario/departamentos`;
  private urlConsultarMunicipios = `${environment.url}/usuario/municipios`;
  private urlConsultarUsuarios = `${environment.url}/usuario`;
  private urlConsultarProveedores = `${environment.url}/usuario/lista-proveedores`;

  constructor(
    protected http: HttpClient
  ) { }

  public consultarRol(): Observable<Rol> {
    return this.http.get<Rol>(`${this.urlConsultarRol}`);
  }

  public consultarTipoIdentificacion(): Observable<TipoIdentificacion> {
    return this.http.get<TipoIdentificacion>(`${this.urlConsultarTipoIdentificacion}`);
  }

  public consultarPais(): Observable<Pais> {
    return this.http.get<Pais>(`${this.urlConsultarPais}`);
  }

  public consultarDepartamento(codigoPais): Observable<Departamento> {
    return this.http.get<Departamento>(`${this.urlConsultarDepartamentos}?codigoPais=${codigoPais}`);
  }

  public consultarMunicipios(codigoDepartamento): Observable<Municipio> {
    return this.http.get<Municipio>(`${this.urlConsultarMunicipios}?codigoDepartamento=${codigoDepartamento}`);
  }

  public consultarUsuarios(correo): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.urlConsultarUsuarios}?correo=${correo}`);
  }

  public consultarProveedores(rol): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.urlConsultarProveedores}?nombre_rol=${rol}`);
  }
}
