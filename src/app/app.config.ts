import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { provideState, provideStore } from '@ngrx/store';
import { CursoEfecto } from './app-cursos/tienda/curso.effects';
import { cursosReducer } from './app-cursos/tienda/curso.reducer';
import { routes } from './app.routes';
import { contadorReducer } from './contador/contador.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(),
    provideStore({
        contador: contadorReducer
    }),
    provideState({
        name: 'Cursos',
        reducer: cursosReducer
    }),
    provideEffects([CursoEfecto])
  ]
};
