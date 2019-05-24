import { Component, OnInit } from '@angular/core';
/*Sirve para obtener la libreria que permite capturar el valor de la url */
import { ActivatedRoute} from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {
heroe: Heroe;
  constructor(private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService) {
    /*Para obtener los parametros se debe utilizar un observable y hay que suscribirse
     -Obtiene el parametro y su valor, en este cado id=0 o el valor que se este pasando.
    */
    this.activatedRoute.params.subscribe(parametros => {
       this.heroe = this.heroesService.getHeroe(parametros['id']);
      });
   }
  }
