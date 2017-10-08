import { TestBed, inject } from '@angular/core/testing';

import { IsAuthenticatedService } from './is-authenticated.service';

describe('IsAuthenticatedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsAuthenticatedService]
    });
  });

  it('should be created', inject([IsAuthenticatedService], (service: IsAuthenticatedService) => {
    expect(service).toBeTruthy();
  }));
});
