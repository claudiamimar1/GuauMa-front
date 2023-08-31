import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaBlogComponent } from './feature/pagina-blog/pagina-blog.component';
import { PaginaInicialComponent } from './feature/pagina-inicial/pagina-inicial.component';
import { PerfilComponent } from './feature/perfil/perfil.component';
import { ServiciosComponent } from './feature/servicios/servicios.component';


const routes: Routes = [
  { path: 'inicio-cuidado-animal', component: PaginaInicialComponent},
  { path: 'blog-cuidado-animal', component: PaginaBlogComponent},
  { path: 'mi-perfil', component: PerfilComponent},
  { path: 'mis-servicios', component: ServiciosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
