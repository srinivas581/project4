import { TestBed } from '@angular/core/testing';

import { SaiService } from './sai.service';

describe('SaiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SaiService = TestBed.get(SaiService);
    expect(service).toBeTruthy();
  });
});
