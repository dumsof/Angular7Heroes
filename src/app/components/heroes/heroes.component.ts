import { Component, OnInit } from '@angular/core';
/*Importar el servicio de la carpeta servicios/heroes.service.ts */
import { HeroesService, Heroe } from '../../servicios/heroes.service';
/*Para utilizar las rutas del boton ver mas de los heroes se debe importar las rutas */
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  /*para que el tipo se Heroe se debe importar la interfaz Heroe del archivo hores.service.ts*/
  heroes: Heroe[] = [];
  /*en el constructor se crea una variable de tipo servicio para acceder al mismo*/
  constructor(private heroesServices: HeroesService,
              private rutas: Router) { }

  ngOnInit() {
    /*se obtiene la informacion que esta en el servicio [heroesServices] file: heroes.service.ts*/
    this.heroes = this.heroesServices.getHeroes();
    console.log(this.heroes);
  }

  verHeroe(indexSeleccionHeroe: number) {
    /*Identificacion del archivo app.routes.ts [heroe], se necesita el / para que se pueda devolver y navegar bien*/
    this.rutas.navigate(['heroe', indexSeleccionHeroe]);
  }

}
