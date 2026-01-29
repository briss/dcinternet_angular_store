import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, switchMap } from "rxjs";
import { Curso } from "../model/curso.modelo";
import { CursoServicio } from "../service/curso-servicio";
import { agregarCurso, consultarCursos, guardarCurso, guardarListaCursos } from "./curso.actions";

@Injectable({
    providedIn: 'root'
})
export class CursoEfecto {

    cursoService = inject(CursoServicio);
    acciones$ = inject(Actions);

    consultarCursos$ = createEffect(() =>
        this.acciones$.pipe(
            ofType(consultarCursos),
            switchMap(() => this.cursoService.getCursos()
                .pipe(
                    map((cursos:Curso[]) => guardarListaCursos({cursos})),
                    catchError(error => of(error))
                )
            )
        )
    );

    agregarCurso$ = createEffect(() =>
        this.acciones$.pipe(
            ofType(agregarCurso),
            mergeMap(({curso}) =>
                this.cursoService.agregarCurso(curso)
                    .pipe(
                        map((curso: Curso) => guardarCurso({curso})),
                        catchError(error => of(error))
                    )
            )
        )
    );
}