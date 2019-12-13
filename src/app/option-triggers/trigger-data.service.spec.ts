import { TestBed } from '@angular/core/testing';

import { TriggerDataService } from './trigger-data.service';

describe('TriggerDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TriggerDataService = TestBed.get(TriggerDataService);
    expect(service).toBeTruthy();
  });
});
