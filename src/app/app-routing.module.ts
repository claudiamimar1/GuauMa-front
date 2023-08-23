import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaBlogComponent } from './feature/pagina-blog/pagina-blog.component';
import { PaginaInicialComponent } from './feature/pagina-inicial/pagina-inicial.component';


const routes: Routes = [
  { path: 'inicio-cuidado-animal', component: PaginaInicialComponent},
  { path: 'blog-cuidado-animal', component: PaginaBlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
