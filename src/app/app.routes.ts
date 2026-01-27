import { Routes } from '@angular/router';
import { App } from './app';
import { ContadorComponent } from './contador/contador-component/contador-component';

export const routes: Routes = [
    { path: '', component: App },
    { path: 'contador', component: ContadorComponent },
    
    { path: '**', component: App }
];
