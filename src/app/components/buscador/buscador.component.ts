import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {
  heroes: Heroe[] = [];
  termino: string;
  constructor(private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(parametro => {
      this.heroes = this.heroesService.buscarHeroe(parametro['termino']);
      this.termino = parametro['termino'];
    });
  }
  verHeroe(i) {
    this.router.navigate(['/heroe', i]);
  }
}
