import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Curso } from "../../model/curso.modelo";
import { agregarCurso, completarCurso, consultarCursos, eliminarCurso } from '../../tienda/curso.actions';
import { seleccionarCursosTodos, seleccionarTotalCursosCompletados, seleccionarTotalCursosPendientes } from '../../tienda/curso.selector';

@Component({
  selector: 'app-cursos-lista',
  imports: [ AsyncPipe, ReactiveFormsModule ],
  templateUrl: './cursos-lista.html',
  styleUrl: './cursos-lista.css',
})
export class CursosLista implements OnInit {

  private readonly store = inject(Store<Curso[]>);

  totalCursosTomar$:Observable<number>;
  totalCursosCompletados$:Observable<number>;

  cursosTomar$:Observable<Curso[]>

  formaCurso:FormGroup = new FormGroup<{
    nombre: FormControl<string | null>,
    categoria: FormControl<string | null>,
    duracion: FormControl<number | null>,
    descripcion: FormControl<string | null>,
    imagen: FormControl<string | null>,
    completado: FormControl<boolean | null>
  }>({
    nombre: new FormControl("", [
      Validators.required,
      Validators.minLength(4)
    ]),
    categoria: new FormControl("", [
      Validators.required
    ]),
    duracion: new FormControl(32, [
      Validators.required,
      Validators.min(10)
    ]),
    descripcion: new FormControl("", [
      Validators.required
    ]),
    imagen: new FormControl("", [
      Validators.required
    ]),
    completado: new FormControl(false)
  });

  constructor() {
    this.totalCursosTomar$ = this.store.select(seleccionarTotalCursosPendientes);
    this.cursosTomar$ = this.store.select(seleccionarCursosTodos);
    this.totalCursosCompletados$ = this.store.select(seleccionarTotalCursosCompletados);
  }


  ngOnInit(): void {
    this.store.dispatch(consultarCursos());
  }


  enviar() {
    let curso = {
      id: Date.now(),
      nombre: this.formaCurso.get("nombre")?.value,
      categoria: this.formaCurso.get("categoria")?.value,
      duracion: this.formaCurso.get("duracion")?.value,
      descripcion: this.formaCurso.get("descripcion")?.value,
      imagen: this.formaCurso.get("imagen")?.value,
      completado: this.formaCurso.get("completado")?.value
    };

    this.store.dispatch(agregarCurso({curso: curso}))
  }

  completarCurso(idCurso:number) {
    this.store.dispatch(completarCurso({idCurso}))
  }

  borrarCurso(idCurso:number) {
    this.store.dispatch(eliminarCurso({idCurso}));
  }
}
