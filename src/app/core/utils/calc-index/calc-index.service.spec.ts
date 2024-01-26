import { TestBed } from '@angular/core/testing';

import { CalcIndexService } from './calc-index.service';

describe('CalcIndexService', () => {
  let service: CalcIndexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcIndexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
