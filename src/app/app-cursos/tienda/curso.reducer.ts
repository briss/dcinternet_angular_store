import { createReducer, on } from "@ngrx/store";
import { agregarCurso, completarCurso, consultarCursos, eliminarCurso, guardarListaCursos } from "./curso.actions";
import { CursoState } from "./curso.state";

export const estadoInicial:CursoState = {
    cursos: []
};

export const cursosReducer = createReducer(
    estadoInicial,
    on(consultarCursos, (estado:CursoState) => ({
        ...estado,
    })),
    on(guardarListaCursos, (estado:CursoState, {cursos}) => ({
        ...estado,
        cursos: cursos
    })),
    on(agregarCurso, (estado:CursoState, {curso}) => ({
        ...estado,
        cursos: [...estado.cursos, curso]
    })),
    // Las nomenclaturas de agregarCurso y eliminarCurso son equivalentes
    on(eliminarCurso, (estado:CursoState, props) => {
        return {
            ...estado,
            cursos: estado.cursos.filter(curso => curso.id !== props.idCurso)
        };
    }),
    on(completarCurso, (estado, {idCurso}) => ({
        ...estado,
        cursos: estado.cursos
            .map(curso => curso.id === idCurso ? {...curso, completado: !curso.completado } : curso)
    }))
);