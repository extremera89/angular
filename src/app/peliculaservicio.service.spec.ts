import { TestBed } from '@angular/core/testing';

import { PeliculaservicioService } from './peliculaservicio.service';

describe('PeliculaservicioService', () => {
  let service: PeliculaservicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeliculaservicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
