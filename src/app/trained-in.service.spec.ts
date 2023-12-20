import { TestBed } from '@angular/core/testing';

import { TrainedInService } from './trained-in.service';

describe('TrainedInService', () => {
  let service: TrainedInService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainedInService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
