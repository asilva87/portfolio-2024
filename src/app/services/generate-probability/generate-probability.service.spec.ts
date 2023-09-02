import { TestBed } from '@angular/core/testing';

import { GenerateProbabilityService } from './generate-probability.service';

describe('GenerateProbabilityService', () => {
  let service: GenerateProbabilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateProbabilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
