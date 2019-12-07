import { TestBed } from '@angular/core/testing';

import { FOVDataService } from './FOVData.service';

describe('DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FOVDataService = TestBed.get(FOVDataService);
    expect(service).toBeTruthy();
  });
});
