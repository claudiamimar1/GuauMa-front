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
import { InicioSesionComponent } from './feature/inicio-sesion/inicio-sesion.component';
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PaginaInicialComponent,
    PaginaBlogComponent,
    PerfilComponent,
    ServiciosComponent,
    InicioSesionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    AuthModule.forRoot({
      domain: 'dev-bofx3gh2nrkzclxr.us.auth0.com',
      clientId: 'ZHmm31MIaqMmZQMt81fy3gs13P5eT8Ib'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
