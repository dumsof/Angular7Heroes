/*Este sistema de ruta se debe agregar en el app.modules.ts */
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

const APP_RUTAS: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: 'buscar/:termino', component: BuscadorComponent },
    { path: '**', pathMatch : 'full', redirectTo: 'home' }/*Ruta por defecto al home */
];
/*, {useHash : true} sirve para que se pueda utilizar parametros en la url*/
export const  APP_RUTASAPLICACION = RouterModule.forRoot(APP_RUTAS, {useHash : true});

