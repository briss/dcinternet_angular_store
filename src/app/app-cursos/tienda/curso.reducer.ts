import { createReducer, on } from "@ngrx/store";
import { agregarCurso, completarCurso, eliminarCurso } from "./curso.actions";
import { CursoState } from "./curso.state";

export const estadoInicial:CursoState = {
    cursos: []
};

export const cursosReducer = createReducer(
    estadoInicial,
    on(agregarCurso, (estado:CursoState, {c}) => ({
        ...estado, 
        cursos: [...estado.cursos, ...c]
    })),
    on(eliminarCurso, (estado:CursoState, {idCurso}) => ({
        ...estado,
        cursos: estado.cursos.filter(curso => curso.id !== idCurso)
    })),
    on(completarCurso, (estado) => ({
        ...estado
    }))
);