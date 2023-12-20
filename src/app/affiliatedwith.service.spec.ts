import { TestBed } from '@angular/core/testing';

import { AffiliatedwithService } from './affiliatedwith.service';

describe('AffiliatedwithService', () => {
  let service: AffiliatedwithService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AffiliatedwithService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
