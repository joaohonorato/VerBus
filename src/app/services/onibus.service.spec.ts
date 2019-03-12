import { TestBed, inject } from '@angular/core/testing';

import { OnibusService } from './onibus.service';

describe('OnibusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OnibusService]
    });
  });

  it('should be created', inject([OnibusService], (service: OnibusService) => {
    expect(service).toBeTruthy();
  }));
});
