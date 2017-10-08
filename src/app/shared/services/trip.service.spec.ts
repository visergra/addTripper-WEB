import { TestBed, inject } from '@angular/core/testing';

import { TripService } from './trip.service';

describe('InboxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TripService]
    });
  });

  it('should be created', inject([TripService], (service: TripService) => {
    expect(service).toBeTruthy();
  }));
});
