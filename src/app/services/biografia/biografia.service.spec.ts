import { TestBed, inject } from '@angular/core/testing';

import { BiografiaService } from './biografia.service';

describe('BiografiaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BiografiaService]
    });
  });

  it('should be created', inject([BiografiaService], (service: BiografiaService) => {
    expect(service).toBeTruthy();
  }));
});
