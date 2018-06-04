import { TestBed, inject } from '@angular/core/testing';

import { OcourseService } from './ocourse.service';

describe('OcourseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OcourseService]
    });
  });

  it('should be created', inject([OcourseService], (service: OcourseService) => {
    expect(service).toBeTruthy();
  }));
});
