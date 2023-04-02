import { TestBed } from '@angular/core/testing';

import { TravelingitemsService } from './travelingitems.service';

describe('TravelingitemsService', () => {
  let service: TravelingitemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelingitemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
