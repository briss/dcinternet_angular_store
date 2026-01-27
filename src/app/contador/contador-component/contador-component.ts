import { Component, inject, Signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { decremento, incremento, reset } from '../contador.actions';

@Component({
  selector: 'app-contador-component',
  imports: [],
  templateUrl: './contador-component.html',
  styleUrl: './contador-component.css',
})
export class ContadorComponent {

  private readonly store: Store<{contador: number}> = inject(Store);

  contador: Signal<number> = this.store.selectSignal(estado => estado.contador);


  incremento() {
    this.store.dispatch(incremento());
  }

  decremento() {
    this.store.dispatch(decremento());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
