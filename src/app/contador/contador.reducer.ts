import { createReducer, on } from "@ngrx/store";
import { decremento, incremento, reset } from "./contador.actions";

export const estadoInicial = 0;

export const contadorReducer = createReducer(
    estadoInicial,
    on(incremento, estado => estado + 1),
    on(decremento, estado => estado - 1),
    on(reset, () => 0)
);
