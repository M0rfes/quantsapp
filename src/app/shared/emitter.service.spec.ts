import { TestBed } from '@angular/core/testing';

import { EmitterService } from './emitter.service';

describe('EmmterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmitterService = TestBed.get(EmitterService);
    expect(service).toBeTruthy();
  });
});
