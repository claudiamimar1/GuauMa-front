import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaBlogComponent } from './feature/pagina-blog/pagina-blog.component';
import { PaginaInicialComponent } from './feature/pagina-inicial/pagina-inicial.component';
import { PerfilComponent } from './feature/perfil/perfil.component';
import { ServiciosComponent } from './feature/servicios/servicios.component';
import { InicioSesionComponent } from './feature/inicio-sesion/inicio-sesion.component';
import { RegistroDatosPerfilComponent } from './feature/registro-datos-perfil/registro-datos-perfil.component';
import { ProductosGeneralesComponent } from './feature/productos-generales/productos-generales.component';


const routes: Routes = [
  { path: '', component: InicioSesionComponent},
  { path: 'registro-datos', component: RegistroDatosPerfilComponent},
  { path: 'inicio-cuidado-animal', component: PaginaInicialComponent},
  { path: 'blog-cuidado-animal', component: PaginaBlogComponent},
  { path: 'mi-perfil', component: PerfilComponent},
  { path: 'mis-servicios', component: ServiciosComponent},
  { path: 'productos', component: ProductosGeneralesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
