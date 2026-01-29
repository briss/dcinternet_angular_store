import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Curso, CursoBack } from '../model/curso.modelo';

@Injectable({
  providedIn: 'root',
})
export class CursoServicio {

  httpClient = inject(HttpClient);


  getCursos(): Observable<Curso[]> {
    return this.httpClient.get<CursoBack[]>('https://www.dcinternet.com.mx/rino/cursos')
        .pipe(
          map(cursosBack => cursosBack.map(cursoBack => ({
            id: cursoBack.id,
            nombre: cursoBack.nombre,
            categoria: cursoBack.categoria,
            duracion: cursoBack.duracion,
            descripcion: cursoBack.descripcion,
            imagen: cursoBack.imagen,
            completado: false
          })))
        );
  }

  agregarCurso(nuevoCurso: Curso): Observable<Curso> {
    return this.httpClient.post<CursoBack>('https://www.dcinternet.com.mx/rino/cursos', {
      nombre: nuevoCurso.nombre,
      categoria: nuevoCurso.categoria,
      duracion: nuevoCurso.duracion,
      descripcion: nuevoCurso.descripcion,
      imagen: nuevoCurso.imagen,
    })
    .pipe(
          map(cursoBack => ({
            id: cursoBack.id,
            nombre: cursoBack.nombre,
            categoria: cursoBack.categoria,
            duracion: cursoBack.duracion,
            descripcion: cursoBack.descripcion,
            imagen: cursoBack.imagen,
            completado: false
          })));
  }
}
