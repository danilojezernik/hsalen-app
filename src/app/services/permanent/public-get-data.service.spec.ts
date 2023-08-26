import { TestBed } from '@angular/core/testing';

import { PublicGetDataService } from './public-get-data.service';

describe('PublicGetDataService', () => {
  let service: PublicGetDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicGetDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
