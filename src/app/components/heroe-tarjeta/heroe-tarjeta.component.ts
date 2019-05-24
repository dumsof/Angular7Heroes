import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {
  /*La propiedad  @Input(), le indica a angular que el dato se puede diligenciar desde un componente padre al hijo
    en este caso el componente heroe-tarjeta seria el hijo que recibe el dato del componente padre heroes.component.html  */
  @Input() heroe: Heroe;
  @Input() index: number;
  /* Esta propiedad sirve para utilizar o escuchar eventos del padre, en este caso se necesita utilizar el metodo de redireccioar
    cuando se da clic ver mas del componente padre, se debe importar Output y EventEmitter
    -al evento heroeSeleccionado se le esta indicando que se pasa como parametro un valor numeber.
  */
  @Output() heroeSeleccionado: EventEmitter<number>;
  constructor(private router: Router) {
    /*Se inicializa el escuchador del evento del padre*/
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }
  verHeroe() {
    /*Se remplaza la funcionalidad por la suscripcion del evento que permite escuchar eventos desde el componente padre que
    esta realizando o utilizando la tarjeta que seria el componente hijo*/
    /*this.heroeSeleccionado.emit(this.index);*/
    /*Se comenta el manejador de evento del padre y se deja el redireccionamiento normal para que funcione la busqueda
    el boton ver mas, que muestra los detalles del heroe*/
    this.router.navigate(['/heroe', this.index]);
  }
}
