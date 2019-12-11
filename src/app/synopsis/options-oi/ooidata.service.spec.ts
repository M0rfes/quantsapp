import { TestBed } from '@angular/core/testing';

import { OOIDataService } from './ooidata.service';

describe('OOIDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OOIDataService = TestBed.get(OOIDataService);
    expect(service).toBeTruthy();
  });
});
