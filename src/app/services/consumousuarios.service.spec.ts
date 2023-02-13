import { TestBed } from '@angular/core/testing';

import { ConsumousuariosService } from './consumousuarios.service';

describe('ConsumousuariosService', () => {
  let service: ConsumousuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumousuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
