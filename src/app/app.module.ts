import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/*Rutas del archivo app/components/app.routes.ts, se coloca en providers[] */
import {  APP_RUTASAPLICACION } from './app.routes';

/* Llamado al servcio de la ruta servicios/heroes.service.ts */
import { HeroesService } from './servicios/heroes.service';


/*Componentes*/
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BuscadorComponent,
    HeroeTarjetaComponent
  ],
  imports: [
    BrowserModule,
    APP_RUTASAPLICACION
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
