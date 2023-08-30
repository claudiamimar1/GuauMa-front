import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { PaginaInicialComponent } from './feature/pagina-inicial/pagina-inicial.component';
import { PaginaBlogComponent } from './feature/pagina-blog/pagina-blog.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PaginaInicialComponent,
    PaginaBlogComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
