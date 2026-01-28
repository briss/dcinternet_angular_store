import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Menu } from './app/menu/menu';
import { CursosLista } from './app/app-cursos/componentes/cursos-lista/cursos-lista';

bootstrapApplication(CursosLista, appConfig)
  .catch((err) => console.error(err));
