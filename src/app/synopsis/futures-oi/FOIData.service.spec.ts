import { TestBed } from '@angular/core/testing';

import { FOIDataService } from './FOIData.service';

describe('DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FOIDataService = TestBed.get(FOIDataService);
    expect(service).toBeTruthy();
  });
});
