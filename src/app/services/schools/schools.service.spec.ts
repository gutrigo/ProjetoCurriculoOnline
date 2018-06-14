import { TestBed, inject } from '@angular/core/testing';

import { SchoolsServices } from './schools.service';

describe('SchoolsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchoolsServices]
    });
  });

  it('should be created', inject([SchoolsServices], (service: SchoolsServices) => {
    expect(service).toBeTruthy();
  }));
});
