import { createAction, props } from "@ngrx/store";
import { Curso } from "../model/curso.modelo";

export const agregarCurso = createAction(
    '[Cursos Cmp] Agregar curso', 
    props<{c:Curso[]}>()
);
export const eliminarCurso = createAction(
    '[Cursos Cmp] Eliminar curso',
    props<{idCurso:number}>()
);
export const completarCurso = createAction('[Cursos Cmp] Completar curso');
