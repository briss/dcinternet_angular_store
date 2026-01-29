import { TestBed } from '@angular/core/testing';

import { CursoServicio } from './curso-servicio';

describe('CursoServicio', () => {
  let service: CursoServicio;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursoServicio);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
