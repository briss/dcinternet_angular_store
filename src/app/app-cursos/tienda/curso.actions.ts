import { createAction, props } from "@ngrx/store";
import { Curso } from "../model/curso.modelo";

export const consultarCursos = createAction(
    '[Cursos Cmp] Consultar cursos'
);

export const guardarListaCursos = createAction(
    '[Cursos Cmp] Guardar lista cursos',
    props<{cursos: Curso[]}>()
);

export const agregarCurso = createAction(
    '[Cursos Cmp] Agregar curso',
    props<{curso:Curso}>()
);

export const eliminarCurso = createAction(
    '[Cursos Cmp] Eliminar curso',
    props<{idCurso:number}>()
);

export const completarCurso = createAction(
    '[Cursos Cmp] Completar curso',
    props<{idCurso:number}>()
);

export const guardarCurso = createAction(
    '[Cursos Cmp] Guardar curso',
    props<{curso:Curso}>()
);