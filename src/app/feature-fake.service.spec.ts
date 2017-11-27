import { TestBed, inject } from '@angular/core/testing';

import { FeatureFakeService } from './feature-fake.service';

describe('FeatureFakeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeatureFakeService]
    });
  });

  it('should be created', inject([FeatureFakeService], (service: FeatureFakeService) => {
    expect(service).toBeTruthy();
  }));
});
