import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Curso } from "../../model/curso.modelo";
import { seleccionarCursosTodos, seleccionarTotalCursosCompletados, seleccionarTotalCursosPendientes } from '../../tienda/curso.selector';
import { Observable } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { agregarCurso, completarCurso, eliminarCurso } from '../../tienda/curso.actions';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cursos-lista',
  imports: [ AsyncPipe, ReactiveFormsModule ],
  templateUrl: './cursos-lista.html',
  styleUrl: './cursos-lista.css',
})
export class CursosLista {

  private readonly store = inject(Store<Curso[]>);

  totalCursosTomar$:Observable<number>;
  totalCursosCompletados$:Observable<number>;

  cursosTomar$:Observable<Curso[]>


  formaCurso:FormGroup = new FormGroup({
    nombre: new FormControl(""),
    duracion: new FormControl(0),
    completado: new FormControl(false)
  });

  constructor() {
    this.totalCursosTomar$ = this.store.select(seleccionarTotalCursosPendientes);
    this.cursosTomar$ = this.store.select(seleccionarCursosTodos);
    this.totalCursosCompletados$ = this.store.select(seleccionarTotalCursosCompletados);
  }

  enviar() {
    let curso = {
      id: Date.now(),
      nombre: this.formaCurso.get("nombre")?.value,
      duracion: this.formaCurso.get("duracion")?.value,
      completado: this.formaCurso.get("completado")?.value
    };

    this.store.dispatch(agregarCurso({curso: [curso]}))
  }

  completarCurso(idCurso:number) {
    this.store.dispatch(completarCurso({idCurso}))
  }

  borrarCurso(idCurso:number) {
    this.store.dispatch(eliminarCurso({idCurso}));
  }
}
