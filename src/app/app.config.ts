import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { contadorReducer } from './contador/contador.reducer';
import { cursosReducer } from './app-cursos/tienda/curso.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideStore({
      contador: contadorReducer
    }),
    provideState({
      name: 'Cursos',
      reducer: cursosReducer
    })
  ]
};
