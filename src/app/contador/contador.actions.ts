import { createAction } from "@ngrx/store";

export const incremento = createAction('[Comp Contador] Incremento');
export const decremento = createAction('[Comp Contador] Decremento');
export const reset = createAction('[Comp Contador] Reset');
