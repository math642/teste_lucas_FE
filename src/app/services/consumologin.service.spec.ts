import { TestBed } from '@angular/core/testing';

import { ConsumologinService } from './consumologin.service';

describe('ConsumologinService', () => {
  let service: ConsumologinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumologinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
