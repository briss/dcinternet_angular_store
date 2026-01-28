import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CursoState } from "./curso.state";

export const seleccionarCursoState = createFeatureSelector<CursoState>('Cursos');

export const seleccionarCursosTodos = createSelector(seleccionarCursoState, 
    (estado:CursoState) => estado.cursos
);

export const seleccionarCursosCompletados = createSelector(seleccionarCursoState,
    (estado:CursoState) => estado.cursos.filter(curso => curso.completado)
);

export const seleccionarCursosPendientes = createSelector(seleccionarCursoState,
    (estado:CursoState) => estado.cursos.filter(curso => !curso.completado)
)

export const seleccionarTotalCursosCompletados = createSelector(seleccionarCursoState,
    (estado:CursoState) => estado.cursos.filter(curso => curso.completado).length
);

export const seleccionarTotalCursosPendientes = createSelector(seleccionarCursoState,
    (estado:CursoState) => estado.cursos.filter(curso => !curso.completado).length
)
