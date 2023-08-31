import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { PaginaInicialComponent } from './feature/pagina-inicial/pagina-inicial.component';
import { PaginaBlogComponent } from './feature/pagina-blog/pagina-blog.component';
import { RouterModule } from '@angular/router';
import { PerfilComponent } from './feature/perfil/perfil.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ServiciosComponent } from './feature/servicios/servicios.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PaginaInicialComponent,
    PaginaBlogComponent,
    PerfilComponent,
    ServiciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
